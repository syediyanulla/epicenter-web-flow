import { Header } from "@/components/Header";
import { PatientDetails } from "@/components/dashboard/PatientDetails";
import { MedicalGraphs } from "@/components/dashboard/MedicalGraphs";
import { NearbyHospitals } from "@/components/dashboard/NearbyHospitals";
import { LiveLocationMap } from "@/components/dashboard/LiveLocationMap";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Patient Details Section */}
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <PatientDetails />
        </div>

        {/* Medical Graphs Section */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <MedicalGraphs />
        </div>

        {/* Bottom Grid - Hospitals and Map */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <NearbyHospitals />
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <LiveLocationMap />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
