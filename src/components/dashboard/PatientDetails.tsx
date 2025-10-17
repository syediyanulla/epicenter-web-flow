import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Phone, MapPin, Calendar, Activity } from "lucide-react";

export const PatientDetails = () => {
  // Mock patient data - replace with real data
  const patient = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    bloodType: "O+",
    phone: "+1 234 567 8900",
    address: "123 Main St, City",
    emergencyContact: "+1 234 567 8901",
    condition: "Stable",
    admissionDate: "2025-10-15",
  };

  return (
    <Card className="shadow-medium hover:shadow-large transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Patient Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-3">
            <Avatar className="w-24 h-24 border-4 border-primary/20">
              <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                {patient.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <Badge variant={patient.condition === "Stable" ? "secondary" : "destructive"} className="animate-pulse-glow">
              <Activity className="w-3 h-3 mr-1" />
              {patient.condition}
            </Badge>
          </div>

          {/* Details Grid */}
          <div className="flex-1 grid md:grid-cols-2 gap-4">
            <DetailItem icon={User} label="Full Name" value={patient.name} />
            <DetailItem icon={Calendar} label="Age / Gender" value={`${patient.age} / ${patient.gender}`} />
            <DetailItem icon={Activity} label="Blood Type" value={patient.bloodType} />
            <DetailItem icon={Phone} label="Phone" value={patient.phone} />
            <DetailItem icon={MapPin} label="Address" value={patient.address} />
            <DetailItem icon={Phone} label="Emergency Contact" value={patient.emergencyContact} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DetailItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200">
    <Icon className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground font-medium">{label}</p>
      <p className="text-sm text-foreground font-semibold truncate">{value}</p>
    </div>
  </div>
);
