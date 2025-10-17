import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const LiveLocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ lat: 40.7128, lng: -74.0060 });

  // Simulate live location updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="shadow-medium h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="w-5 h-5 text-primary animate-pulse-glow" />
          Live Location
          <span className="ml-auto text-xs font-normal text-green-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow"></span>
            Tracking Active
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapRef}
          className="relative w-full h-[400px] rounded-lg overflow-hidden bg-muted border"
        >
          {/* Placeholder for map - Replace with actual map library */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/10 to-primary/10">
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <MapPin className="w-16 h-16 text-primary animate-float drop-shadow-lg" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Patient Location</p>
                <p className="text-xs text-muted-foreground font-mono">
                  {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
                </p>
              </div>

              {/* Animated ripple effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-4 border-primary/30 rounded-full animate-ping"></div>
                <div className="w-32 h-32 border-4 border-secondary/30 rounded-full animate-ping absolute top-0 left-0" style={{ animationDelay: "0.5s" }}></div>
              </div>
            </div>
          </div>

          {/* Map overlay info */}
          <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm p-3 rounded-lg shadow-medium border animate-slide-in-right">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow"></div>
              <span className="font-semibold text-foreground">En route to City General Hospital</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">ETA: 3 minutes</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">Speed</p>
            <p className="text-lg font-bold text-foreground">45 km/h</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">Distance</p>
            <p className="text-lg font-bold text-foreground">0.8 km</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/50">
            <p className="text-xs text-muted-foreground">ETA</p>
            <p className="text-lg font-bold text-primary">3 min</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
