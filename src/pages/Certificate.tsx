import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, CheckCircle, Clock, AlertCircle, Search } from "lucide-react";

const Certificate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PwD Certificate Management
            </h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Apply for, track, and download your Persons with Disabilities certificate
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/certificate/apply">
                <Card className="h-full hover:shadow-lg transition-all border-l-4 border-l-accent group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <FileText className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      Apply for Certificate
                    </CardTitle>
                    <CardDescription>
                      Submit a new application for disability certificate
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link to="/certificate/track">
                <Card className="h-full hover:shadow-lg transition-all border-l-4 border-l-primary group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Search className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Track Application
                    </CardTitle>
                    <CardDescription>
                      Check the status of your certificate application
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link to="/certificate/download">
                <Card className="h-full hover:shadow-lg transition-all border-l-4 border-l-success group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success group-hover:text-success-foreground transition-colors">
                      <Download className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="group-hover:text-success transition-colors">
                      Download Certificate
                    </CardTitle>
                    <CardDescription>
                      Download your approved disability certificate
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* About Certificate */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="section-title">About Disability Certificate</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A Disability Certificate is an official document issued by competent medical authorities that certifies the type and percentage of disability of a person. This certificate is essential for availing various benefits, schemes, and concessions provided by the government.
                  </p>
                  <h3 className="font-semibold text-lg mb-3">Benefits of Disability Certificate:</h3>
                  <ul className="space-y-2">
                    {[
                      "Access to government schemes and welfare programs",
                      "Educational scholarships and fee concessions",
                      "Employment reservations (4% in government jobs)",
                      "Income tax exemptions and deductions",
                      "Travel concessions in public transport",
                      "Land and housing allotment at concessional rates",
                      "Assistive devices and aids at subsidized costs",
                      "Priority in various government services",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Eligibility Criteria</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Who Can Apply?</h3>
                      <p className="text-muted-foreground">
                        Any person with a disability of 40% or more in any of the 21 categories recognized under the RPwD Act, 2016 can apply for a disability certificate.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Categories of Disabilities:</h3>
                      <div className="grid md:grid-cols-2 gap-2 mt-3">
                        {[
                          "Blindness and Low Vision",
                          "Deaf and Hard of Hearing",
                          "Locomotor Disability",
                          "Intellectual Disability",
                          "Mental Illness",
                          "Autism Spectrum Disorder",
                          "Cerebral Palsy",
                          "Muscular Dystrophy",
                          "Chronic Neurological Conditions",
                          "Specific Learning Disabilities",
                          "Multiple Sclerosis",
                          "Speech and Language Disability",
                          "Thalassemia",
                          "Hemophilia",
                          "Sickle Cell Disease",
                          "Multiple Disabilities including Deafblindness",
                          "Acid Attack Victims",
                          "Parkinson's Disease",
                          "And others as per RPwD Act 2016",
                        ].map((category, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 bg-secondary rounded">
                            <span className="text-accent font-bold">•</span>
                            <span className="text-sm text-muted-foreground">{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Required Documents</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Aadhaar Card",
                      "Recent passport size photographs",
                      "Proof of residence (Ration Card/Voter ID/Electricity Bill)",
                      "Medical reports from recognized hospitals",
                      "Previous disability certificate (if any, for renewal)",
                      "Income certificate (for certain schemes)",
                      "Age proof (Birth Certificate/School Leaving Certificate)",
                      "Identity proof (PAN Card/Driving License)",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-background rounded">
                        <FileText className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{doc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> All documents should be self-attested. Original documents need to be produced for verification at the medical board.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Application Process</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Fill Application", description: "Complete the online form with accurate details", icon: FileText },
                  { step: "2", title: "Upload Documents", description: "Submit required documents and photographs", icon: FileText },
                  { step: "3", title: "Medical Assessment", description: "Attend medical board examination", icon: Clock },
                  { step: "4", title: "Receive Certificate", description: "Download certificate after approval", icon: CheckCircle },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Start your disability certificate application online and track it at every step
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/certificate/apply">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Login to Track
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

export default Certificate;
