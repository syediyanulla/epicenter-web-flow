interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

export const ProcessStep = ({ number, title, description, delay = 0 }: ProcessStepProps) => {
  return (
    <div
      className="flex gap-6 items-start opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-medium">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
