import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  name: string;
  role: string;
  experience: string;
  skills: string[];
  rating: number;
  price: string;
  type: "hr" | "mentor";
}

const ProfileCard = ({ name, role, experience, skills, rating, price, type }: ProfileCardProps) => {
  return (
    <Card className="group hover:shadow-lg smooth-transition border-l-4 border-l-primary/20 hover:border-l-primary bg-gradient-to-br from-card to-muted/20">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">{name[0]}</span>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-card-foreground text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground font-medium">{role}</p>
            </div>
          </div>
          <Badge variant={type === "hr" ? "default" : "secondary"} className="font-medium">
            {type === "hr" ? "HR Expert" : "Mentor"}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/50 p-3 rounded-lg">
            <span className="text-xs text-muted-foreground block">Experience</span>
            <span className="font-semibold text-sm">{experience}</span>
          </div>
          
          <div className="bg-muted/50 p-3 rounded-lg">
            <span className="text-xs text-muted-foreground block">Rating</span>
            <span className="font-semibold text-sm text-warning">⭐ {rating}/5</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs font-medium bg-accent/10 text-accent border-accent/30">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <div className="text-xl font-bold text-primary">{price}</div>
          </div>
          <Button size="sm" className="font-medium hover:shadow-md">
            Book Session
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;