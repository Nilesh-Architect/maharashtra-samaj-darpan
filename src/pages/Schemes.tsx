import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Home,
  ShoppingCart,
  Medal,
  Users,
  BookOpen,
  ArrowRight,
  IndianRupee,
} from "lucide-react";

const Schemes = () => {
  const schemeCategories = [
    {
      title: "Educational Schemes",
      icon: GraduationCap,
      description: "Scholarships and educational support for students with disabilities",
      color: "text-blue-600",
      bg: "bg-blue-50",
      schemes: [
        { name: "Pre-Matric Scholarship", eligibility: "Class 1-10 Students", path: "/schemes/pre-matric" },
        { name: "Post-Matric Scholarship", eligibility: "Class 11 & Above", path: "/schemes/post-matric" },
        { name: "National Fellowship", eligibility: "M.Phil & Ph.D Students", path: "/schemes/fellowship" },
      ]
    },
    {
      title: "Employment & Skill Development",
      icon: Briefcase,
      description: "Job opportunities, training programs, and vocational courses",
      color: "text-green-600",
      bg: "bg-green-50",
      schemes: [
        { name: "Self-Employment Scheme", eligibility: "18-55 Years", path: "/schemes/self-employment" },
        { name: "Skill Development Training", eligibility: "18-45 Years", path: "/schemes/skill-development" },
        { name: "National Action Plan for Skill Training", eligibility: "15-60 Years", path: "/schemes/skill-training" },
      ]
    },
    {
      title: "Assistive Devices & Aids",
      icon: HeartHandshake,
      description: "Subsidized aids, appliances, and assistive technologies",
      color: "text-purple-600",
      bg: "bg-purple-50",
      schemes: [
        { name: "ADIP Scheme", eligibility: "BPL Families", path: "/schemes/assistive-devices" },
        { name: "Artificial Limbs", eligibility: "All Categories", path: "/schemes/artificial-limbs" },
        { name: "Hearing Aids", eligibility: "Hearing Impairment", path: "/schemes/hearing-aids" },
      ]
    },
    {
      title: "Social Security",
      icon: Home,
      description: "Pension, maintenance allowance, and financial assistance",
      color: "text-orange-600",
      bg: "bg-orange-50",
      schemes: [
        { name: "Disability Pension", eligibility: "40%+ Disability", path: "/schemes/disability-pension" },
        { name: "Maintenance Allowance", eligibility: "Severely Disabled", path: "/schemes/maintenance-allowance" },
        { name: "Indira Gandhi National Disability Pension", eligibility: "18-59 Years, BPL", path: "/schemes/igndps" },
      ]
    },
    {
      title: "MSHFDC Loans",
      icon: ShoppingCart,
      description: "Financial support for self-employment and education",
      color: "text-red-600",
      bg: "bg-red-50",
      schemes: [
        { name: "Term Loan for Business", eligibility: "Up to ₹10 Lakhs", path: "/schemes/term-loan" },
        { name: "Education Loan", eligibility: "Higher Education", path: "/schemes/education-loan" },
        { name: "Micro Credit Finance", eligibility: "Up to ₹50,000", path: "/schemes/micro-credit" },
      ]
    },
    {
      title: "Sports & Recreation",
      icon: Medal,
      description: "Support for sports training and participation",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      schemes: [
        { name: "Sports Equipment Grant", eligibility: "Sportspersons", path: "/schemes/sports-equipment" },
        { name: "Coaching Assistance", eligibility: "National/State Players", path: "/schemes/sports-coaching" },
        { name: "Prize Money for Achievements", eligibility: "Winners", path: "/schemes/sports-prize" },
      ]
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
              Welfare Schemes
            </h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Comprehensive schemes and programs designed to empower persons with disabilities across Maharashtra
            </p>
          </div>
        </section>

        {/* Schemes Overview */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 p-6 bg-secondary rounded-lg">
              <h2 className="text-2xl font-bold mb-3">About Our Schemes</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Government of Maharashtra, through the Persons with Disabilities Welfare Department, 
                implements a wide range of central and state schemes to ensure comprehensive support for 
                persons with disabilities. These schemes cover education, employment, healthcare, social 
                security, assistive devices, and various other welfare measures.
              </p>
            </div>

            {/* Scheme Categories */}
            <div className="space-y-8">
              {schemeCategories.map((category, index) => (
                <div key={index}>
                  <Card className="border-l-4 border-l-accent">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`w-14 h-14 rounded-lg ${category.bg} flex items-center justify-center`}>
                          <category.icon className={`h-7 w-7 ${category.color}`} aria-hidden="true" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{category.title}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {category.schemes.map((scheme, schemeIndex) => (
                          <Link key={schemeIndex} to={scheme.path}>
                            <div className="p-4 border border-border rounded-lg hover:border-accent hover:shadow-md transition-all group">
                              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                                {scheme.name}
                              </h3>
                              <Badge variant="secondary" className="mb-3">
                                {scheme.eligibility}
                              </Badge>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent transition-colors">
                                <span>View Details</span>
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="section-title">How to Apply for Schemes</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Register/Login", description: "Create an account or login to your dashboard" },
                { step: "2", title: "Select Scheme", description: "Browse and select the scheme you're eligible for" },
                { step: "3", title: "Fill Application", description: "Complete the online application form with required details" },
                { step: "4", title: "Track Status", description: "Monitor your application status in real-time" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/login">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Common Documents Required */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Commonly Required Documents</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Disability Certificate (40% or above)",
                      "Aadhaar Card",
                      "Income Certificate",
                      "Caste Certificate (if applicable)",
                      "Bank Account Details",
                      "Educational Certificates",
                      "Passport Size Photographs",
                      "Residential Proof",
                    ].map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">✓</span>
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 text-center italic">
                    Note: Additional documents may be required based on specific scheme requirements
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schemes;
