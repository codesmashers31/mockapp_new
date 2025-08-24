import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-5">
            <div className="text-2xl font-display font-bold text-primary">MockHire</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary font-medium text-sm">Browse Jobs</a>
              <a href="#" className="text-foreground hover:text-primary font-medium text-sm">Find HRs</a>
              <a href="#" className="text-foreground hover:text-primary font-medium text-sm">Find Mentors</a>
              <a href="#" className="text-foreground hover:text-primary font-medium text-sm">My Sessions</a>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="font-medium">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm" className="font-medium">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
