import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
// import ProfileCard from "@/components/ProfileCard";
import InfoPanel from "@/components/InfoPanel";
// import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";

import CoachSessionCard from "@/components/CoachSessionCard";


const Index = () => (
    <>
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
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

    <main className="container mx-auto flex-1 px-2 sm:px-6 md:px-8 py-8">
      {/* Responsive grid: sidebar - main - infopanel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar: Always below main on mobile */}
        <aside className="order-3 lg:order-1 lg:col-span-3 h-fit sticky top-24">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <section className="order-1 lg:order-2 lg:col-span-6 w-full">
          {/* Quick Stats */}
      

          {/* Divider */}
          <div className="flex items-center space-x-4 mb-5">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
            <span className="text-xs md:text-sm font-bold text-muted-foreground bg-background px-3">
              Available Coaches
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
          </div>

          {/* Cards & AdBanners */}
         <CoachSessionCard/>


        </section>

        {/* InfoPanel: Moves below on mobile */}
        <aside className="order-2 lg:order-3 lg:col-span-3 sticky top-24 h-fit">
          <InfoPanel />
          
        </aside>
      </div>


    </main>
    
  </div>

        <Footer/>
  </>
);

export default Index;
