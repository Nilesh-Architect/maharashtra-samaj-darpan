import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Briefcase, GraduationCap, MapPin, Clock, Building, Search, TrendingUp } from "lucide-react";

const Employment = () => {
  const jobListings = [
    {
      title: "Assistant Administrative Officer",
      company: "Maharashtra State Govt",
      location: "Mumbai",
      type: "Government",
      salary: "₹25,000 - ₹40,000",
      posted: "2 days ago",
      reserved: "4% PwD Quota",
    },
    {
      title: "Computer Operator",
      company: "PWD Department",
      location: "Pune",
      type: "Government",
      salary: "₹18,000 - ₹30,000",
      posted: "5 days ago",
      reserved: "4% PwD Quota",
    },
    {
      title: "Data Entry Operator",
      company: "District Office",
      location: "Nagpur",
      type: "Government",
      salary: "₹15,000 - ₹25,000",
      posted: "1 week ago",
      reserved: "4% PwD Quota",
    },
  ];

  const trainingPrograms = [
    {
      title: "Digital Marketing Skills",
      duration: "3 months",
      mode: "Online & Offline",
      seats: "50",
    },
    {
      title: "Computer Hardware & Networking",
      duration: "6 months",
      mode: "Offline",
      seats: "30",
    },
    {
      title: "Accounting & Tally",
      duration: "4 months",
      mode: "Online",
      seats: "40",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Employment & Skill Development
            </h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Explore job opportunities, training programs, and placement services
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Active Jobs", value: "150+", icon: Briefcase },
                { label: "Training Programs", value: "25+", icon: GraduationCap },
                { label: "Placements", value: "5,000+", icon: TrendingUp },
                { label: "Employers", value: "200+", icon: Building },
              ].map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" aria-hidden="true" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Search */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Search Jobs</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <Input placeholder="Job title or keyword" className="md:col-span-2" />
                  <Input placeholder="Location" />
                  <Button className="bg-accent hover:bg-accent/90">
                    <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                    Search Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobListings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="h-6 w-6 text-accent" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Building className="h-4 w-4" aria-hidden="true" />
                                {job.company}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" aria-hidden="true" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{job.type}</Badge>
                          <Badge className="bg-success">{job.reserved}</Badge>
                          <Badge variant="outline">{job.salary}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" aria-hidden="true" />
                          Posted {job.posted}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button>Apply Now</Button>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          </div>
        </section>

        {/* Skill Development */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Skill Development Programs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>
                      Duration: {program.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Mode:</span>
                        <span className="font-medium">{program.mode}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Available Seats:</span>
                        <span className="font-medium">{program.seats}</span>
                      </div>
                    </div>
                    <Link to="/employment/training-apply">
                      <Button className="w-full">Apply for Training</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Employer Registration */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-2xl">For Employers</CardTitle>
                  <CardDescription>
                    Post jobs and hire talented persons with disabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2">Benefits for Employers:</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Access to skilled PwD talent pool</li>
                        <li>• Compliance with RPwD Act 2016</li>
                        <li>• Tax benefits and incentives</li>
                        <li>• Government support for training</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">How to Register:</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Create employer account</li>
                        <li>• Complete company profile</li>
                        <li>• Post job openings</li>
                        <li>• Review applications</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Link to="/employment/employer-register">
                      <Button>Register as Employer</Button>
                    </Link>
                    <Link to="/employment/employer-login">
                      <Button variant="outline">Employer Login</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Register now to access exclusive job opportunities and training programs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary">
                  Create Account
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Login to Apply
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Employment;
