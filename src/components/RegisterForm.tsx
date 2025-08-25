import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import registrationIllustration from "/media/illustrations/28.svg";

export const RegisterForm = () => {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      startCountdown();
    }, 1500);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      console.log("Registration successful with:", { email });
      // Here you would typically redirect user or show success message
    }, 1500);
  };

  const startCountdown = () => {
    setCountdown(30);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const resendOtp = () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    // Simulate resend OTP
    setTimeout(() => {
      setIsLoading(false);
      startCountdown();
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        {/* Left Side - Benefits/Illustration (unchanged) */}
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
                  {step === "email" ? "Create your profile" : "Verify your email"}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {step === "email" 
                    ? "Join thousands of professionals finding their dream jobs" 
                    : `Enter the verification code sent to ${email}`}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {step === "email" ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium">
                        Email ID<span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Tell us your Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 sm:h-12"
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        We'll send a verification code to this email
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-10 sm:h-12 text-base font-medium" 
                      variant="hero"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending code..." : "Send Verification Code"}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleOtpSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-xs sm:text-sm font-medium">
                        Verification Code<span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        className="h-10 sm:h-12 text-center text-lg tracking-widest"
                        required
                        pattern="[0-9]{6}"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground">
                          Didn't receive the code?
                        </p>
                        <button
                          type="button"
                          onClick={resendOtp}
                          disabled={countdown > 0 || isLoading}
                          className="text-xs text-primary hover:underline disabled:text-muted-foreground disabled:cursor-not-allowed"
                        >
                          {countdown > 0 ? `Resend in ${countdown}s` : "Resend code"}
                        </button>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-10 sm:h-12 text-base font-medium" 
                      variant="hero"
                      disabled={isLoading || otp.length !== 6}
                    >
                      {isLoading ? "Verifying..." : "Verify & Create Account"}
                    </Button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setStep("email")}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        ← Change email address
                      </button>
                    </div>
                  </form>
                )}

                <Separator />

                {/* Google SSO */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">Continue with</p>
                  <Button variant="outline" className="w-full h-10 sm:h-12 text-base font-medium">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
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