import { Link } from "react-router-dom";
import {
  FileText,
  GraduationCap,
  Briefcase,
  MessageSquare,
  Award,
  Users,
  TrendingUp,
  Heart,
  Search,
  Send,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Index = () => {
  const quickLinks = [
    {
      icon: FileText,
      title: "PwD Certificate",
      description: "Apply for or track your disability certificate",
      path: "/certificate",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Award,
      title: "Schemes",
      description: "Explore welfare schemes and benefits",
      path: "/schemes",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Scholarships and educational assistance",
      path: "/schemes/education",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Briefcase,
      title: "Employment",
      description: "Job opportunities and skill development",
      path: "/employment",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: MessageSquare,
      title: "Grievances",
      description: "Submit and track grievances",
      path: "/grievances",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: Users,
      title: "Dashboard",
      description: "Access your personalized dashboard",
      path: "/dashboard/citizen",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  const stats = [
    { label: "Active Beneficiaries", value: "2.5L+", icon: Users },
    { label: "Schemes Available", value: "25+", icon: Award },
    { label: "Certificates Issued", value: "1.8L+", icon: FileText },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Quick Links Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-accent">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${link.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <link.icon className={`h-6 w-6 ${link.color}`} aria-hidden="true" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {link.title}
                      </CardTitle>
                      <CardDescription>{link.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-background rounded-lg shadow-sm"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" aria-hidden="true" />
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">About the Department</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The Persons with Disabilities Welfare Department, Government of Maharashtra, 
                  is dedicated to ensuring equal opportunities, protection of rights, and full 
                  participation of persons with disabilities in all spheres of life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Vision</h3>
                      <p className="text-sm text-muted-foreground">
                        An inclusive society where persons with disabilities live with dignity and equal rights.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Mission</h3>
                      <p className="text-sm text-muted-foreground">
                        To empower PwDs through comprehensive welfare schemes, education, employment, and barrier-free access.
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="mt-6" variant="outline">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
                  alt="Team working together"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Schemes */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Featured Schemes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Education Scholarships</CardTitle>
                  <CardDescription>
                    Financial assistance for students with disabilities pursuing education
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/schemes/scholarship">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Self Employment Scheme</CardTitle>
                  <CardDescription>
                    Support for persons with disabilities to start their own businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/schemes/self-employment">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Assistive Devices</CardTitle>
                  <CardDescription>
                    Subsidized aids and appliances for persons with disabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/schemes/assistive-devices">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link to="/schemes">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  View All Schemes
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter/Updates Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-8 opacity-90">
                Subscribe to receive the latest updates on schemes, policies, and programs
              </p>
              <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground text-foreground"
                  aria-label="Email address"
                />
                <Button type="submit" variant="secondary">
                  <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
