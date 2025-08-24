import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
    toast({
      title: "Login Successful!",
      description: "Welcome back to CareerConnect",
    });
    navigate("/");
  };

   return (
    <div className="min-h-screen flex items-stretch bg-gradient-to-br from-primary/5 via-background/80 to-accent/20">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        {/* Left: Welcome Panel */}
        <aside className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-10 py-12 bg-transparent">
          <div className="w-full max-w-lg space-y-10">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-primary mb-2">
                Welcome Back!
              </h1>
              <p className="text-sm sm:text-lg text-muted-foreground">
                Continue your career journey with us
              </p>
            </div>
            <div className="space-y-7">
              {[
                {
                  icon: <ArrowRight className="w-7 h-7 text-primary-foreground" />,
                  bg: "bg-primary shadow-lg",
                  title: "Quick Access",
                  desc: "Jump right back into your job search"
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  bg: "bg-success shadow-lg",
                  title: "Saved Applications",
                  desc: "See your job progress and updates easily"
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  ),
                  bg: "bg-accent shadow-lg",
                  title: "Profile Insights",
                  desc: "See how recruiters view your profile"
                }
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center rounded-2xl bg-white/70 backdrop-blur-lg p-5 gap-5 shadow hover:shadow-xl transition-shadow"
                >
                  <div className={`min-w-[3.2rem] min-h-[3.2rem] flex items-center justify-center rounded-full ${f.bg}`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{f.title}</h3>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Right: Login Form, directly on same color/gradient as left */}
        <main className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 py-12 bg-transparent">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center mb-9">
              <div className="flex justify-end w-full mb-4">
                <p className="text-xs sm:text-sm text-muted-foreground text-right">
                  New to CareerConnect?{" "}
                  <Link to="/signup" className="text-primary hover:underline font-semibold">
                    Register here
                  </Link>
                </p>
              </div>
            </div>
            {/* No extra Card! The form sits right on the theme background */}
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl p-6 sm:p-8 backdrop-blur-xl bg-white/80 shadow-xl">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                  Email ID<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-11 sm:h-12"
                  required
                />
              </div>
              
              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs sm:text-sm font-medium">
                  Password<span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-11 sm:h-12 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="flex justify-end">
                  <a href="#" className="text-xs text-primary hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 sm:h-12 text-base font-semibold rounded-lg"
                variant="hero"
              >
                Sign In
              </Button>

              {/* OR separator */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white/80 px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">Continue with</p>
                <Button variant="outline" className="w-full h-11 sm:h-12 text-base font-semibold">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
   )
};