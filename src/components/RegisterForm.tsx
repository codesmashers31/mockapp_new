import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import registrationIllustration from "/media/illustrations/28.svg";
// import MySvg from "/src/media/illustrations/28.svg";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Layout: Mobile -> column; Large -> row */}
      <div className="flex flex-col-reverse lg:flex-row w-full">
        {/* Left Side - Benefits/Illustration */}
        <aside className="lg:w-1/2 flex justify-center items-center bg-gradient-hero p-4 sm:p-8 md:p-12">
          <div className="w-full max-w-lg mx-auto space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                CareerConnect
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Your gateway to amazing opportunities
              </p>
            </div>
            <div>
              <img
                src={registrationIllustration}
                alt="Professional career growth illustration"
                className="w-full max-h-60 sm:max-h-80 object-cover rounded-2xl shadow-xl transition-all duration-300"
              />
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Build your professional profile",
                  desc: "Create a comprehensive profile that showcases your skills and experience"
                },
                {
                  title: "Get personalized job recommendations",
                  desc: "Receive relevant opportunities delivered straight to your inbox"
                },
                {
                  title: "Connect with top employers",
                  desc: "Access opportunities from leading companies in your field"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                    <svg className="w-3 h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side - Registration Form */}
        <main className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12 bg-background">
          <div className="w-full max-w-md mx-auto">
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-end w-full mb-4">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Already Registered?{" "}
                  <Link
                    to="/signin"
                    className="text-primary hover:underline font-medium"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>

            <Card className="shadow-lg border-none bg-white/95 rounded-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  Create your profile
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Join thousands of professionals finding their dream jobs
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-xs sm:text-sm font-medium">
                      Full name<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="What is your name?"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="h-10 sm:h-12"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                      Email ID<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Tell us your Email ID"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-10 sm:h-12"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll send relevant jobs and updates to this email
                    </p>
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
                        placeholder="Minimum 6 characters"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="h-10 sm:h-12 pr-10"
                        required
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This helps your account stay protected
                    </p>
                  </div>
                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-xs sm:text-sm font-medium">
                      Mobile number<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      className="h-10 sm:h-12"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full h-10 sm:h-12 text-base font-medium" variant="hero">
                    Create Account
                  </Button>
                </form>

                {/* Or Separator */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                {/* Google SSO */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">Continue with</p>
                  <Button variant="outline" className="w-full h-10 sm:h-12 text-base font-medium">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      {/* ... SVG paths ... */}
                    </svg>
                    Google
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};