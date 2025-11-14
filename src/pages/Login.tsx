import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User, Building, Users } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: `Welcome to your ${userType} dashboard`,
      });
      
      // Navigate to appropriate dashboard
      if (userType === "citizen") navigate("/dashboard/citizen");
      else if (userType === "officer") navigate("/dashboard/officer");
      else navigate("/dashboard/ulb");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1 bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-3">Login to Portal</h1>
              <p className="text-muted-foreground">
                Access your dashboard to manage applications and services
              </p>
            </div>

            <Tabs defaultValue="citizen" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="citizen" className="flex items-center gap-2">
                  <User className="h-4 w-4" aria-hidden="true" />
                  Citizen
                </TabsTrigger>
                <TabsTrigger value="officer" className="flex items-center gap-2">
                  <Building className="h-4 w-4" aria-hidden="true" />
                  Officer
                </TabsTrigger>
                <TabsTrigger value="ulb" className="flex items-center gap-2">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  ULB/District
                </TabsTrigger>
              </TabsList>

              {/* Citizen Login */}
              <TabsContent value="citizen">
                <Card>
                  <CardHeader>
                    <CardTitle>Citizen/PwD Login</CardTitle>
                    <CardDescription>
                      Access your account to apply for schemes and track applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleLogin(e, "citizen")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="citizen-username">Username / Email / Mobile</Label>
                        <Input
                          id="citizen-username"
                          type="text"
                          placeholder="Enter your username, email or mobile number"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="citizen-password">Password</Label>
                        <Input
                          id="citizen-password"
                          type="password"
                          placeholder="Enter your password"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <Link to="/forgot-password" className="text-primary hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                      </Button>
                      <div className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary hover:underline font-medium">
                          Register Now
                        </Link>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Officer Login */}
              <TabsContent value="officer">
                <Card>
                  <CardHeader>
                    <CardTitle>Department Officer Login</CardTitle>
                    <CardDescription>
                      Access your dashboard to process and verify applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleLogin(e, "officer")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="officer-id">Officer ID</Label>
                        <Input
                          id="officer-id"
                          type="text"
                          placeholder="Enter your officer ID"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="officer-password">Password</Label>
                        <Input
                          id="officer-password"
                          type="password"
                          placeholder="Enter your password"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <Link to="/forgot-password" className="text-primary hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ULB/District Login */}
              <TabsContent value="ulb">
                <Card>
                  <CardHeader>
                    <CardTitle>ULB/District Official Login</CardTitle>
                    <CardDescription>
                      Access your dashboard for budget tracking and reporting
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => handleLogin(e, "ulb")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="ulb-id">Official ID</Label>
                        <Input
                          id="ulb-id"
                          type="text"
                          placeholder="Enter your official ID"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ulb-password">Password</Label>
                        <Input
                          id="ulb-password"
                          type="password"
                          placeholder="Enter your password"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <Link to="/forgot-password" className="text-primary hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Additional Help */}
            <div className="mt-8 p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Contact Helpline: <a href="tel:18001234567" className="text-primary hover:underline">1800-123-4567</a></li>
                <li>• Email: <a href="mailto:pwd@maharashtra.gov.in" className="text-primary hover:underline">pwd@maharashtra.gov.in</a></li>
                <li>• <Link to="/help" className="text-primary hover:underline">View Help Documentation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
