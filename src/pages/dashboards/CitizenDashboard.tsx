import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  Search,
  Plus,
} from "lucide-react";

const CitizenDashboard = () => {
  const [applications, setApplications] = useState<Array<{
    id: string;
    scheme: string;
    status: string;
    appliedDate: string;
    amount: string;
  }>>([]);

  useEffect(() => {
    // Load applications from localStorage
    const storedApplications = JSON.parse(localStorage.getItem("schemeApplications") || "[]");
    
    // Merge with default applications (for demo purposes)
    const defaultApps = [
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
    ];

    // Combine and format stored applications
    const formattedStored = storedApplications.map((app: any) => ({
      id: app.id,
      scheme: app.scheme,
      status: app.status,
      appliedDate: app.appliedDate,
      amount: app.amount,
    }));

    // Merge with defaults, avoiding duplicates
    const allApps = [...defaultApps];
    formattedStored.forEach((storedApp: any) => {
      if (!allApps.find((app) => app.id === storedApp.id)) {
        allApps.push(storedApp);
      }
    });

    setApplications(allApps);
  }, []);

  // Calculate stats dynamically
  const totalApplications = applications.length;
  const approvedCount = applications.filter((app) => app.status === "approved").length;
  const pendingCount = applications.filter((app) => app.status === "pending" || app.status === "in-review").length;
  const benefitsReceived = applications
    .filter((app) => app.status === "approved" && app.amount !== "N/A")
    .reduce((sum, app) => {
      const amount = parseInt(app.amount.replace(/[₹,]/g, "")) || 0;
      return sum + amount;
    }, 0);

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
    { label: "Total Applications", value: String(totalApplications), icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Approved", value: String(approvedCount), icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
    { label: "Pending", value: String(pendingCount), icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Benefits Received", value: `₹${benefitsReceived.toLocaleString("en-IN")}`, icon: Award, color: "text-purple-600", bg: "bg-purple-50" },
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
                <TabsTrigger value="browse-schemes">Browse Schemes</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              {/* Applications Tab */}
              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Application Status</CardTitle>
                        <CardDescription>
                          Track all your scheme applications in one place
                        </CardDescription>
                      </div>
                      <Link to="/schemes">
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Apply for New Scheme
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {applications.length === 0 ? (
                      <div className="text-center py-8">
                        <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-4">No applications found</p>
                        <Link to="/schemes">
                          <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Apply for a Scheme
                          </Button>
                        </Link>
                      </div>
                    ) : (
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
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Browse Schemes Tab */}
              <TabsContent value="browse-schemes">
                <Card>
                  <CardHeader>
                    <CardTitle>Browse Available Schemes</CardTitle>
                    <CardDescription>
                      Explore and apply for various welfare schemes available for persons with disabilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { name: "Educational Schemes", count: 3, icon: FileText, path: "/schemes" },
                          { name: "Employment & Skill Development", count: 3, icon: TrendingUp, path: "/schemes" },
                          { name: "Assistive Devices & Aids", count: 3, icon: Award, path: "/schemes" },
                          { name: "Social Security", count: 3, icon: CheckCircle, path: "/schemes" },
                          { name: "MSHFDC Loans", count: 3, icon: FileText, path: "/schemes" },
                          { name: "Sports & Recreation", count: 3, icon: Award, path: "/schemes" },
                        ].map((category, index) => (
                          <Link key={index} to={category.path}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                              <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <category.icon className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold">{category.name}</h3>
                                    <p className="text-sm text-muted-foreground">{category.count} schemes available</p>
                                  </div>
                                </div>
                                <Button variant="outline" className="w-full">
                                  <Search className="h-4 w-4 mr-2" />
                                  Browse Schemes
                                </Button>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <Link to="/schemes">
                          <Button size="lg">
                            <Search className="h-5 w-5 mr-2" />
                            View All Schemes
                          </Button>
                        </Link>
                      </div>
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
