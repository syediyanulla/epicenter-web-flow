import { Header } from "@/components/Header";
import { FlowingConnections } from "@/components/FlowingConnections";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { TeamMember } from "@/components/TeamMember";
import { MagneticButton } from "@/components/MagneticButton";
import { Users, Compass, Settings, Heart, Network, Award, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const testimonials = [
    {
      quote: "Cure-On has been instrumental in our success. Their understanding of the sector is second to none.",
      author: "Sarah Mitchell",
      role: "Chief Medical Officer, City General Hospital"
    },
    {
      quote: "The team's expertise in healthcare recruitment helped us build an exceptional clinical team in record time.",
      author: "Dr. James Peterson",
      role: "Director of Operations, HealthCare Plus"
    },
    {
      quote: "Their advisory services transformed our approach to patient care delivery. True partners in our journey.",
      author: "Maria Rodriguez",
      role: "CEO, Community Health Alliance"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 lg:left-1/2 pointer-events-auto">
          <FlowingConnections />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8 animate-fade-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                  We place people at the{" "}
                  <span className="text-primary">epicentre</span> of healthcare.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  We believe there will be a convergence of industries in the future delivery of healthcare services, and we will be at the epicentre of it.
                </p>
                <MagneticButton size="lg" onClick={() => navigate("/dashboard")}>
                  Discover Why We're Different
                </MagneticButton>
              </div>

              {/* Right: Space for Animation (background) */}
              <div className="relative min-h-[500px] lg:min-h-[600px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-12 lg:px-24 py-24 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            A New Standard in Healthcare Solutions
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            We deliver comprehensive services that address every aspect of modern healthcare delivery
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Users}
              title="Healthcare Recruitment"
              description="Connecting top-tier talent with leading healthcare institutions to build teams that excel."
              delay={0}
            />
            <ServiceCard
              icon={Compass}
              title="Advisory Services"
              description="Providing strategic guidance to navigate the complexities of the modern healthcare landscape."
              delay={100}
            />
            <ServiceCard
              icon={Settings}
              title="Managed Services"
              description="Delivering comprehensive solutions to streamline operations and enhance patient care."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Our Proven Process
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            A systematic approach to delivering exceptional healthcare solutions
          </p>
          
          <div className="space-y-12">
            <ProcessStep
              number={1}
              title="Understand"
              description="We begin by deeply understanding your unique challenges and objectives."
              delay={0}
            />
            <ProcessStep
              number={2}
              title="Strategize"
              description="We develop a tailored strategy that aligns with your goals and our industry expertise."
              delay={100}
            />
            <ProcessStep
              number={3}
              title="Execute"
              description="We implement the strategy with precision, transparency, and constant communication."
              delay={200}
            />
            <ProcessStep
              number={4}
              title="Deliver"
              description="We deliver measurable results that place people and quality care at the forefront."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Our Commitment to You
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            Built on a foundation of trust, expertise, and innovation
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-xl shadow-soft">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                <Heart className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">People First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our focus is always on the individuals who deliver and receive care.
              </p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-xl shadow-soft">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 mb-6">
                <Network className="w-10 h-10 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Industry Convergence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are at the forefront of integrating technology for better healthcare.
              </p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-xl shadow-soft">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                <Award className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Unrivaled Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team brings decades of experience from across the healthcare spectrum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            What Our Partners Say
          </h2>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonial
                    ? "opacity-100 translate-x-0 relative"
                    : "opacity-0 absolute inset-0 translate-x-8 pointer-events-none"
                }`}
              >
                <blockquote className="bg-card p-12 rounded-2xl shadow-large">
                  <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <p className="text-lg font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Meet Our Experts
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
            A team of dedicated professionals with deep healthcare industry expertise
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Emily Hunter"
              title="Founder & CEO"
              bio="With over 20 years in healthcare leadership, Emily combines clinical expertise with strategic vision to transform healthcare delivery."
              delay={0}
            />
            <TeamMember
              name="Michael Chen"
              title="Director of Recruitment"
              bio="Michael's extensive network and talent acquisition expertise have helped build exceptional teams for leading healthcare institutions."
              delay={100}
            />
            <TeamMember
              name="Sarah Williams"
              title="Head of Advisory"
              bio="Sarah provides strategic guidance to healthcare organizations navigating digital transformation and operational excellence."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Ready to build the future of healthcare together?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Let's connect and explore how we can put our expertise to work for you.
          </p>
          <MagneticButton size="lg" variant="secondary">
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </MagneticButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Mission */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Cure-On</h3>
              <p className="text-background/80 leading-relaxed mb-6">
                Placing people at the epicentre of healthcare. We believe in the convergence of industries for the future delivery of healthcare services.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
                <li><a href="#process" className="text-background/80 hover:text-background transition-colors">Our Process</a></li>
                <li><a href="#team" className="text-background/80 hover:text-background transition-colors">Our Team</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-background/80">123 Healthcare Plaza, Medical District</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@cureon.com" className="text-background/80 hover:text-background transition-colors">
                    info@cureon.com
                  </a>
                </li>
              </ul>
              
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; {new Date().getFullYear()} Cure-On. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
