import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  Download,
  Eye,
} from "lucide-react";

const CitizenDashboard = () => {
  const [applications] = useState([
    {
      id: "APP2024001",
      scheme: "Post-Matric Scholarship",
      status: "approved",
      appliedDate: "2024-01-15",
      amount: "₹25,000",
    },
    {
      id: "APP2024002",
      scheme: "Self-Employment Scheme",
      status: "pending",
      appliedDate: "2024-02-01",
      amount: "₹2,50,000",
    },
    {
      id: "APP2024003",
      scheme: "Assistive Devices",
      status: "in-review",
      appliedDate: "2024-01-20",
      amount: "N/A",
    },
  ]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      approved: { variant: "default" as const, className: "bg-green-500", label: "Approved", icon: CheckCircle },
      pending: { variant: "secondary" as const, className: "bg-yellow-500", label: "Pending", icon: Clock },
      "in-review": { variant: "outline" as const, className: "bg-blue-500", label: "In Review", icon: Eye },
      rejected: { variant: "destructive" as const, className: "bg-red-500", label: "Rejected", icon: XCircle },
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
  };

  const stats = [
    { label: "Total Applications", value: "3", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Approved", value: "1", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
    { label: "Pending", value: "2", icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Benefits Received", value: "₹25,000", icon: Award, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1 bg-secondary">
        {/* Dashboard Header */}
        <section className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome, Rahul Sharma</h1>
                <p className="opacity-90">UDID: MH2024XXXX1234</p>
              </div>
              <Button variant="secondary" size="lg">
                <Download className="h-5 w-5 mr-2" aria-hidden="true" />
                Download PwD Certificate
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                        <stat.icon className={`h-5 w-5 ${stat.color}`} aria-hidden="true" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Dashboard Content */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="applications" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="applications">My Applications</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              {/* Applications Tab */}
              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Status</CardTitle>
                    <CardDescription>
                      Track all your scheme applications in one place
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applications.map((app) => {
                        const statusInfo = getStatusBadge(app.status);
                        const StatusIcon = statusInfo.icon;
                        
                        return (
                          <div
                            key={app.id}
                            className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-semibold text-lg">{app.scheme}</h3>
                                  <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                                    <StatusIcon className="h-3 w-3" aria-hidden="true" />
                                    {statusInfo.label}
                                  </Badge>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                                  <div>
                                    <span className="font-medium">Application ID:</span> {app.id}
                                  </div>
                                  <div>
                                    <span className="font-medium">Applied:</span> {app.appliedDate}
                                  </div>
                                  <div>
                                    <span className="font-medium">Amount:</span> {app.amount}
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                                {app.status === "approved" && (
                                  <Button size="sm">
                                    <Download className="h-4 w-4 mr-1" aria-hidden="true" />
                                    Download
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Manage your personal details and documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                          <p className="text-lg">Rahul Sharma</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                          <p className="text-lg">15/03/1995</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Disability Type</label>
                          <p className="text-lg">Locomotor Disability</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Disability %</label>
                          <p className="text-lg">45%</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Email</label>
                          <p className="text-lg">rahul.sharma@email.com</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Mobile</label>
                          <p className="text-lg">+91 98765 43210</p>
                        </div>
                      </div>
                      <Button className="mt-4">Edit Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Notifications</CardTitle>
                    <CardDescription>
                      Stay updated with important alerts and messages
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { title: "Application Approved", message: "Your Post-Matric Scholarship application has been approved", time: "2 hours ago", type: "success" },
                        { title: "Document Verification", message: "Please upload additional documents for Self-Employment Scheme", time: "1 day ago", type: "warning" },
                        { title: "New Scheme Available", message: "Apply for the Skill Development Training Program", time: "3 days ago", type: "info" },
                      ].map((notification, index) => (
                        <div key={index} className="p-3 border border-border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{notification.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            </div>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CitizenDashboard;
