import { useEffect, useRef } from "react";

export const FlowingConnections = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particles
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      isDataNode: boolean;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? "rgba(253, 126, 20, 0.6)" : "rgba(0, 123, 255, 0.6)";
        this.isDataNode = Math.random() > 0.85; // 15% are data nodes
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.offsetWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.offsetHeight) this.vy *= -1;

        // Update pulse phase for data nodes
        if (this.isDataNode) {
          this.pulsePhase += 0.05;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Draw regular particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw pulsating glow for data nodes
        if (this.isDataNode) {
          const pulseIntensity = (Math.sin(this.pulsePhase) + 1) / 2;
          const glowRadius = this.radius + pulseIntensity * 4;
          
          const gradient = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, glowRadius);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, "rgba(253, 126, 20, 0)");
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Geometric overlays and map visualization
    let geometricPhase = 0;
    let ambulanceProgress = 0;
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    
    // Emergency event location (top right area)
    const emergencyX = centerX + canvas.offsetWidth * 0.25;
    const emergencyY = centerY - canvas.offsetHeight * 0.15;
    
    // Ambulance start location (bottom left area)
    const ambulanceStartX = centerX - canvas.offsetWidth * 0.2;
    const ambulanceStartY = centerY + canvas.offsetHeight * 0.2;

    const drawStyleizedMap = () => {
      // Draw abstract grid/road pattern
      ctx.strokeStyle = `rgba(0, 123, 255, 0.08)`;
      ctx.lineWidth = 0.5;
      
      const gridSize = 80;
      const startX = centerX - canvas.offsetWidth * 0.3;
      const endX = centerX + canvas.offsetWidth * 0.3;
      const startY = centerY - canvas.offsetHeight * 0.25;
      const endY = centerY + canvas.offsetHeight * 0.25;
      
      // Vertical lines
      for (let x = startX; x <= endX; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, startY);
        ctx.lineTo(x, endY);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = startY; y <= endY; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
        ctx.stroke();
      }
    };

    const drawEmergencyEvent = () => {
      // Pulsating emergency icon (coral)
      const pulseScale = (Math.sin(geometricPhase * 2) + 1) / 2;
      const emergencyRadius = 8 + pulseScale * 4;
      
      // Outer glow
      const gradient = ctx.createRadialGradient(
        emergencyX, emergencyY, 0,
        emergencyX, emergencyY, emergencyRadius * 2
      );
      gradient.addColorStop(0, `rgba(253, 126, 20, ${0.6 * pulseScale})`);
      gradient.addColorStop(1, "rgba(253, 126, 20, 0)");
      
      ctx.beginPath();
      ctx.arc(emergencyX, emergencyY, emergencyRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Core dot
      ctx.beginPath();
      ctx.arc(emergencyX, emergencyY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(253, 126, 20, 0.9)";
      ctx.fill();
      
      // Emergency cross symbol
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(emergencyX - 3, emergencyY);
      ctx.lineTo(emergencyX + 3, emergencyY);
      ctx.moveTo(emergencyX, emergencyY - 3);
      ctx.lineTo(emergencyX, emergencyY + 3);
      ctx.stroke();
    };

    const drawAmbulancePath = () => {
      // Calculate current ambulance position
      const currentX = ambulanceStartX + (emergencyX - ambulanceStartX) * ambulanceProgress;
      const currentY = ambulanceStartY + (emergencyY - ambulanceStartY) * ambulanceProgress;
      
      // Draw the route path (with subtle dash pattern)
      ctx.strokeStyle = `rgba(0, 123, 255, 0.3)`;
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 5]);
      ctx.beginPath();
      ctx.moveTo(ambulanceStartX, ambulanceStartY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Draw ambulance icon (moving dot with trail)
      if (ambulanceProgress > 0.05) {
        // Ambulance glow
        const ambGradient = ctx.createRadialGradient(
          currentX, currentY, 0,
          currentX, currentY, 12
        );
        ambGradient.addColorStop(0, "rgba(0, 123, 255, 0.6)");
        ambGradient.addColorStop(1, "rgba(0, 123, 255, 0)");
        
        ctx.beginPath();
        ctx.arc(currentX, currentY, 12, 0, Math.PI * 2);
        ctx.fillStyle = ambGradient;
        ctx.fill();
        
        // Ambulance core
        ctx.beginPath();
        ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 123, 255, 0.9)";
        ctx.fill();
      }
      
      // Update ambulance progress
      ambulanceProgress += 0.003;
      if (ambulanceProgress > 1) {
        ambulanceProgress = 0; // Reset for continuous loop
      }
    };

    const drawGeometricOverlays = () => {
      // Draw subtle hexagons
      for (let i = 0; i < 3; i++) {
        const hexSize = 60 + i * 40;
        const opacity = 0.03 + (Math.sin(geometricPhase + i * 0.5) + 1) * 0.015;
        
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (Math.PI / 3) * j + geometricPhase * 0.2;
          const x = centerX + hexSize * Math.cos(angle);
          const y = centerY + hexSize * Math.sin(angle);
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(0, 123, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw subtle circuitry lines
      ctx.strokeStyle = `rgba(0, 123, 255, ${0.04 + Math.sin(geometricPhase) * 0.02})`;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([5, 10]);
      
      for (let i = 0; i < 2; i++) {
        const y = centerY + (i - 0.5) * 100;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.offsetWidth, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    };

    const drawDigitalHeartbeat = () => {
      const pulseScale = (Math.sin(geometricPhase * 0.5) + 1) / 2;
      const pulseRadius = 30 + pulseScale * 20;
      
      // Central pulse
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseRadius);
      gradient.addColorStop(0, `rgba(253, 126, 20, ${0.1 * pulseScale})`);
      gradient.addColorStop(1, "rgba(253, 126, 20, 0)");
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw map and ambulance visualization (bottom layer)
      drawStyleizedMap();
      
      // Draw geometric overlays (background layer)
      drawGeometricOverlays();
      drawDigitalHeartbeat();

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            // Enhanced connection for data nodes
            const opacity = (p1.isDataNode || p2.isDataNode) ? 0.3 : 0.2;
            ctx.strokeStyle = `rgba(0, 123, 255, ${opacity * (1 - distance / 150)})`;
            ctx.lineWidth = (p1.isDataNode && p2.isDataNode) ? 1.5 : 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Mouse interaction
        const dx = p1.x - mouse.x;
        const dy = p1.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(253, 126, 20, ${0.4 * (1 - distance / 100)})`;
          ctx.lineWidth = 2;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // Draw ambulance service visualization (top layer)
      drawAmbulancePath();
      drawEmergencyEvent();

      // Update geometric phase
      geometricPhase += 0.01;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0"
    />
  );
};
