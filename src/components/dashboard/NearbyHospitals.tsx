import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Clock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock hospital data - replace with real data
const hospitals = [
  {
    id: 1,
    name: "City General Hospital",
    distance: "0.8 km",
    eta: "3 min",
    phone: "+1 234 567 8900",
    specialty: "Emergency",
    available: true,
  },
  {
    id: 2,
    name: "St. Mary's Medical Center",
    distance: "1.2 km",
    eta: "5 min",
    phone: "+1 234 567 8901",
    specialty: "Cardiology",
    available: true,
  },
  {
    id: 3,
    name: "Metro Health Clinic",
    distance: "2.1 km",
    eta: "8 min",
    phone: "+1 234 567 8902",
    specialty: "General",
    available: false,
  },
  {
    id: 4,
    name: "Regional Trauma Center",
    distance: "2.5 km",
    eta: "10 min",
    phone: "+1 234 567 8903",
    specialty: "Trauma",
    available: true,
  },
  {
    id: 5,
    name: "Community Hospital",
    distance: "3.0 km",
    eta: "12 min",
    phone: "+1 234 567 8904",
    specialty: "General",
    available: true,
  },
];

export const NearbyHospitals = () => {
  return (
    <Card className="shadow-medium h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-secondary" />
          Nearby Hospitals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {hospitals.map((hospital, index) => (
              <div
                key={hospital.id}
                className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{hospital.name}</h3>
                    <Badge variant={hospital.available ? "secondary" : "outline"} className="text-xs">
                      {hospital.specialty}
                    </Badge>
                  </div>
                  {hospital.available && (
                    <Badge className="bg-green-500 text-white animate-pulse-glow">Available</Badge>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span>{hospital.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-3 h-3 text-secondary" />
                    <span>{hospital.eta}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <Phone className="w-3 h-3 text-secondary" />
                    <span>{hospital.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
