import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import InfoPanel from "@/components/InfoPanel";
import AdBanner from "@/components/AdBanner";


const profiles = [
  {
    name: "Sarah Johnson",
    role: "Senior HR Manager",
    experience: "8+ years",
    skills: ["Technical Hiring", "Behavioral Analysis", "Leadership"],
    rating: 4.8,
    price: "₹299/session",
    type: "hr"
  },
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    experience: "6+ years",
    skills: ["React", "Node.js", "System Design"],
    rating: 4.9,
    price: "₹399/session",
    type: "mentor"
  },
  {
    name: "Priya Sharma",
    role: "Tech Recruiter",
    experience: "5+ years",
    skills: ["Frontend", "Backend", "DevOps"],
    rating: 4.7,
    price: "₹249/session",
    type: "hr"
  },
  {
    name: "Amit Patel",
    role: "Senior Software Engineer",
    experience: "10+ years",
    skills: ["Java", "Microservices", "Cloud"],
    rating: 5.0,
    price: "₹499/session",
    type: "mentor"
  },
  {
    name: "Neha Gupta",
    role: "HR Business Partner",
    experience: "7+ years",
    skills: ["Culture Fit", "Communication", "Strategy"],
    rating: 4.6,
    price: "₹329/session",
    type: "hr"
  },
  {
    name: "Vikram Singh",
    role: "DevOps Engineer",
    experience: "4+ years",
    skills: ["AWS", "Docker", "Kubernetes"],
    rating: 4.8,
    price: "₹449/session",
    type: "mentor"
  }
];

// Helper to inject ads after every 2 cards
const getProfileSections = () => {
  const result = [];
  for (let i = 0; i < profiles.length; i++) {
    result.push(
      <ProfileCard
        key={i}
        {...profiles[i]}
        type={profiles[i].type as "hr" | "mentor"}
      />
    );
    if ((i + 1) % 2 === 0 && i !== profiles.length - 1) {
      result.push(
        <AdBanner
          key={`ad-${i}`}
          title="🔥 Special Offer!"
          subtitle="Get 20% OFF on your first mock interview session – Use code: GETHIRED"
        />
      );
    }
  }
  return result;
};

const Index = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
    <Navigation />

    {/* Hero Section */}
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border-b border-border">
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold font-display text-primary mb-1">
            Find Your Perfect Interview Coach
          </h1>
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto">
            Connect with top HRs & industry mentors for personalized mock interviews and career growth 🚀
          </p>
        </div>
      </div>
    </section>

    <div className="container mx-auto px-2 sm:px-6 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-24 h-fit">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-6 w-full">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-card/80 p-4 rounded-xl border border-border text-center shadow hover:shadow-lg transition">
              <div className="text-xl md:text-2xl font-bold text-primary">150+</div>
              <div className="text-xs text-muted-foreground font-medium">Active HRs</div>
            </div>
            <div className="bg-card/80 p-4 rounded-xl border border-border text-center shadow hover:shadow-lg transition">
              <div className="text-xl md:text-2xl font-bold text-accent">200+</div>
              <div className="text-xs text-muted-foreground font-medium">Mentors</div>
            </div>
            <div className="bg-card/80 p-4 rounded-xl border border-border text-center shadow hover:shadow-lg transition">
              <div className="text-xl md:text-2xl font-bold text-success">95%</div>
              <div className="text-xs text-muted-foreground font-medium">Success Rate</div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center space-x-4 mb-5">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
            <span className="text-xs md:text-sm font-bold text-muted-foreground bg-background px-3">
              Available Coaches
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
          </div>

          {/* Cards & Ad Banners */}
          <section className="space-y-6">
            {getProfileSections()}
          </section>
        </main>

        {/* Right Panel (mobile below) */}
        <aside className="lg:col-span-3 sticky top-24 h-fit">
          <InfoPanel />
        </aside>
      </div>
    </div>
  </div>
);

export default Index;
