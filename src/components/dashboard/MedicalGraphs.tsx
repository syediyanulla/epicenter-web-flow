import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Activity, Heart, Droplets } from "lucide-react";

// Mock data - replace with real data
const ecgData = Array.from({ length: 50 }, (_, i) => ({
  time: i,
  value: Math.sin(i * 0.5) * 30 + 70 + Math.random() * 20,
}));

const spo2Data = Array.from({ length: 20 }, (_, i) => ({
  time: `${i}m`,
  value: 95 + Math.random() * 4,
}));

const hrData = Array.from({ length: 20 }, (_, i) => ({
  time: `${i}m`,
  value: 70 + Math.random() * 15,
}));

export const MedicalGraphs = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* ECG Graph */}
      <Card className="shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Activity className="w-5 h-5 text-primary" />
            ECG
            <span className="ml-auto text-sm font-normal text-muted-foreground">Real-time</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2">
            <p className="text-3xl font-bold text-foreground">Normal</p>
            <p className="text-xs text-muted-foreground">Heart rhythm stable</p>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={ecgData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={false}
                animationDuration={300}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* SPO2 Graph */}
      <Card className="shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Droplets className="w-5 h-5 text-secondary" />
            SpO2
            <span className="ml-auto text-sm font-normal text-muted-foreground">Last 20min</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2">
            <p className="text-3xl font-bold text-foreground">98%</p>
            <p className="text-xs text-muted-foreground">Oxygen saturation</p>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={spo2Data}>
              <defs>
                <linearGradient id="spo2Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={2}
                fill="url(#spo2Gradient)"
                animationDuration={500}
              />
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Heart Rate Graph */}
      <Card className="shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Heart className="w-5 h-5 text-primary animate-pulse-glow" />
            Heart Rate
            <span className="ml-auto text-sm font-normal text-muted-foreground">Last 20min</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-2">
            <p className="text-3xl font-bold text-foreground">78 BPM</p>
            <p className="text-xs text-muted-foreground">Average rate</p>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={hrData}>
              <defs>
                <linearGradient id="hrGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fill="url(#hrGradient)"
                animationDuration={500}
              />
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
