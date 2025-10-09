interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  delay?: number;
}

export const TeamMember = ({ name, title, bio, imageUrl, delay = 0 }: TeamMemberProps) => {
  return (
    <div
      className="group opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-6xl font-bold text-primary/30">{name.charAt(0)}</div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1 text-foreground">{name}</h3>
          <p className="text-primary font-medium mb-3">{title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
};
