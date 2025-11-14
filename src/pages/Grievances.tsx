import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Search, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Grievances = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Grievance Submitted Successfully",
        description: "Your grievance ID is: GRV2024001234. You will receive updates via email and SMS.",
      });
    }, 1500);
  };

  const sampleGrievances = [
    { id: "GRV2024001", subject: "Delay in scholarship disbursement", status: "resolved", date: "2024-01-15" },
    { id: "GRV2024002", subject: "PwD certificate not received", status: "in-progress", date: "2024-02-01" },
    { id: "GRV2024003", subject: "Assistive device quality issue", status: "pending", date: "2024-02-10" },
  ];

  const getStatusBadge = (status: string) => {
    const config = {
      resolved: { variant: "default" as const, className: "bg-green-500", label: "Resolved", icon: CheckCircle },
      "in-progress": { variant: "secondary" as const, className: "bg-blue-500", label: "In Progress", icon: Clock },
      pending: { variant: "outline" as const, className: "bg-yellow-500", label: "Pending", icon: AlertCircle },
    };
    return config[status as keyof typeof config] || config.pending;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Grievance Redressal System
            </h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Submit your complaints and track their resolution transparently
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Submit Grievance Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-accent" aria-hidden="true" />
                    Submit New Grievance
                  </CardTitle>
                  <CardDescription>
                    Please provide detailed information about your complaint
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Enter your full name" required aria-required="true" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input id="mobile" type="tel" placeholder="Enter mobile number" required aria-required="true" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="Enter email address" required aria-required="true" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Grievance Category *</Label>
                        <Select required>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="certificate">Disability Certificate</SelectItem>
                            <SelectItem value="scholarship">Scholarship Issues</SelectItem>
                            <SelectItem value="employment">Employment Related</SelectItem>
                            <SelectItem value="assistive">Assistive Devices</SelectItem>
                            <SelectItem value="pension">Pension/Allowance</SelectItem>
                            <SelectItem value="accessibility">Accessibility Issues</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="Brief subject of your grievance" required aria-required="true" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Please provide detailed information about your grievance"
                        rows={6}
                        required
                        aria-required="true"
                      />
                      <p className="text-xs text-muted-foreground">Minimum 50 characters required</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district">District *</Label>
                      <Select required>
                        <SelectTrigger id="district">
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="nagpur">Nagpur</SelectItem>
                          <SelectItem value="nashik">Nashik</SelectItem>
                          <SelectItem value="thane">Thane</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="attachment">Attachment (Optional)</Label>
                      <Input id="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                      <p className="text-xs text-muted-foreground">Max file size: 2MB (PDF, JPG, PNG)</p>
                    </div>

                    <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-info flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="text-sm">
                          <p className="font-medium mb-1">Important Notes:</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>You will receive a unique Grievance ID after submission</li>
                            <li>Response time: 15-30 working days</li>
                            <li>Updates will be sent via SMS and email</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Grievance"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Track Grievance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-accent" aria-hidden="true" />
                    Track Grievance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input placeholder="Enter Grievance ID" />
                    <Button className="w-full">Track Status</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Grievances */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Grievances</CardTitle>
                  <CardDescription>Sample grievance statuses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sampleGrievances.map((grievance) => {
                      const statusInfo = getStatusBadge(grievance.status);
                      const StatusIcon = statusInfo.icon;
                      
                      return (
                        <div key={grievance.id} className="p-3 border border-border rounded-lg">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-sm font-medium">{grievance.id}</span>
                            <Badge variant={statusInfo.variant} className="flex items-center gap-1 text-xs">
                              <StatusIcon className="h-3 w-3" aria-hidden="true" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{grievance.subject}</p>
                          <p className="text-xs text-muted-foreground">{grievance.date}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium mb-1">Helpline</p>
                      <a href="tel:18001234567" className="text-primary hover:underline">
                        1800-123-4567 (Toll Free)
                      </a>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:grievance@maharashtra.gov.in" className="text-primary hover:underline">
                        grievance@maharashtra.gov.in
                      </a>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Office Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Grievances;
