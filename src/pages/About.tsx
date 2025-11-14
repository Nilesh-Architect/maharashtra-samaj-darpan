import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Eye, Building, Users, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About the Department
            </h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Committed to creating an inclusive society for Persons with Disabilities
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title">Introduction</h2>
              <div className="prose max-w-none text-muted-foreground space-y-4">
                <p className="text-lg leading-relaxed">
                  The Persons with Disabilities Welfare Department, Government of Maharashtra, was established with the objective of ensuring the empowerment, rehabilitation, and welfare of persons with disabilities across the state.
                </p>
                <p className="leading-relaxed">
                  The Department operates under the provisions of the Rights of Persons with Disabilities Act, 2016, and implements various central and state schemes to provide comprehensive support services including education, employment, healthcare, social security, and barrier-free accessibility.
                </p>
                <p className="leading-relaxed">
                  With a network of district-level offices, specialized institutions, and implementing agencies, the Department works to create an inclusive ecosystem where persons with disabilities can live with dignity, independence, and equal opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create an inclusive, barrier-free society where persons with disabilities enjoy equal rights, opportunities, and dignity, enabling them to achieve their full potential and participate meaningfully in all aspects of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Implement welfare schemes ensuring social security and financial support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Promote inclusive education and skill development opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Facilitate employment and self-employment through various programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Ensure accessible infrastructure and assistive technologies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Key Objectives</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Rights Protection",
                  description: "Safeguard and promote the rights of persons with disabilities as enshrined in the RPwD Act, 2016"
                },
                {
                  icon: HeartHandshake,
                  title: "Social Inclusion",
                  description: "Foster social integration through awareness programs and community participation initiatives"
                },
                {
                  icon: Users,
                  title: "Capacity Building",
                  description: "Enhance skills and capabilities through training, rehabilitation, and development programs"
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <item.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Functions of Department */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Functions of the Department</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                "Implementation and monitoring of the Rights of Persons with Disabilities Act, 2016",
                "Formulation and execution of state-level policies and schemes for PwD welfare",
                "Issuance of Disability Certificates and Unique Disability ID Cards",
                "Operation of residential schools, vocational training centers, and rehabilitation facilities",
                "Provision of scholarships, educational aids, and assistive devices",
                "Promotion of employment opportunities through skill development and placement programs",
                "Administration of self-employment schemes and entrepreneurship support",
                "Coordination with ULBs for ensuring 5% budget allocation for PwD welfare",
                "Grievance redressal and legal aid services",
                "Awareness generation and sensitization programs across the state"
              ].map((func, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{func}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Administrative Structure */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Administrative Structure</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent" aria-hidden="true" />
                      State Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-secondary rounded">
                      <span className="font-medium">Commissioner, Persons with Disabilities</span>
                      <span className="text-sm text-muted-foreground">Head of Department</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary rounded">
                      <span className="font-medium">Additional Commissioner</span>
                      <span className="text-sm text-muted-foreground">Deputy Head</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary rounded">
                      <span className="font-medium">Joint Commissioner</span>
                      <span className="text-sm text-muted-foreground">Senior Officer</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent" aria-hidden="true" />
                      District Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-secondary rounded">
                      <span className="font-medium">District Social Welfare Officer</span>
                      <span className="text-sm text-muted-foreground">36 Districts</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary rounded">
                      <span className="font-medium">Taluka Social Welfare Officer</span>
                      <span className="text-sm text-muted-foreground">Sub-District Level</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
