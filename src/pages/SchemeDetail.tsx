import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  IndianRupee,
  Users,
  Calendar,
  Award,
} from "lucide-react";

// Scheme data mapping
const schemeData: Record<string, {
  name: string;
  category: string;
  description: string;
  eligibility: string;
  benefits: string[];
  documents: string[];
  amount?: string;
  icon: any;
}> = {
  "pre-matric": {
    name: "Pre-Matric Scholarship",
    category: "Educational Schemes",
    description: "Financial assistance for students with disabilities studying in classes 1-10. This scheme aims to support early education and reduce the financial burden on families.",
    eligibility: "Students studying in Class 1-10 with 40% or more disability",
    benefits: [
      "Tuition fee reimbursement",
      "Maintenance allowance",
      "Book allowance",
      "Additional allowance for disabled students"
    ],
    documents: [
      "Disability Certificate (40% or above)",
      "Income Certificate",
      "Aadhaar Card",
      "School/College Admission Proof",
      "Bank Account Details",
      "Passport Size Photographs"
    ],
    amount: "Up to ₹25,000 per annum",
    icon: FileText,
  },
  "post-matric": {
    name: "Post-Matric Scholarship",
    category: "Educational Schemes",
    description: "Scholarship for students with disabilities pursuing education from Class 11 onwards, including graduation and post-graduation courses.",
    eligibility: "Students studying in Class 11 & Above with 40% or more disability",
    benefits: [
      "Full tuition fee coverage",
      "Maintenance allowance",
      "Book and equipment allowance",
      "Reader allowance for visually impaired"
    ],
    documents: [
      "Disability Certificate (40% or above)",
      "Income Certificate",
      "Aadhaar Card",
      "Educational Certificates",
      "Admission Proof",
      "Bank Account Details"
    ],
    amount: "Up to ₹50,000 per annum",
    icon: Award,
  },
  "fellowship": {
    name: "National Fellowship",
    category: "Educational Schemes",
    description: "Fellowship program for M.Phil and Ph.D students with disabilities to pursue higher education and research.",
    eligibility: "M.Phil & Ph.D Students with 40% or more disability",
    benefits: [
      "Monthly fellowship stipend",
      "Contingency grant",
      "Escort/Reader allowance",
      "Departmental assistance"
    ],
    documents: [
      "Disability Certificate",
      "M.Phil/Ph.D Admission Proof",
      "Research Proposal",
      "Income Certificate",
      "Aadhaar Card"
    ],
    amount: "Up to ₹1,00,000 per annum",
    icon: Award,
  },
  "self-employment": {
    name: "Self-Employment Scheme",
    category: "Employment & Skill Development",
    description: "Financial assistance and support for persons with disabilities to start their own business or become self-employed.",
    eligibility: "Persons with disabilities aged 18-55 years with 40% or more disability",
    benefits: [
      "Subsidy up to 25% of project cost",
      "Bank loan assistance",
      "Training and skill development",
      "Marketing support"
    ],
    documents: [
      "Disability Certificate (40% or above)",
      "Aadhaar Card",
      "Income Certificate",
      "Business Plan",
      "Bank Account Details",
      "Residential Proof"
    ],
    amount: "Up to ₹2,50,000",
    icon: Users,
  },
  "skill-development": {
    name: "Skill Development Training",
    category: "Employment & Skill Development",
    description: "Vocational training programs to enhance employability and skills of persons with disabilities.",
    eligibility: "Persons with disabilities aged 18-45 years",
    benefits: [
      "Free training programs",
      "Stipend during training",
      "Job placement assistance",
      "Certificate upon completion"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Educational Certificates",
      "Income Certificate"
    ],
    amount: "Training + Stipend",
    icon: Users,
  },
  "skill-training": {
    name: "National Action Plan for Skill Training",
    category: "Employment & Skill Development",
    description: "Comprehensive skill training program under the National Action Plan for persons with disabilities.",
    eligibility: "Persons with disabilities aged 15-60 years",
    benefits: [
      "Multiple skill courses",
      "Industry-relevant training",
      "Placement support",
      "Entrepreneurship guidance"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Educational Qualification Proof",
      "Income Certificate"
    ],
    amount: "Free Training",
    icon: Users,
  },
  "assistive-devices": {
    name: "ADIP Scheme",
    category: "Assistive Devices & Aids",
    description: "Assistance to Disabled persons for Purchase/Fitting of Aids and Appliances (ADIP) scheme provides assistive devices at subsidized rates.",
    eligibility: "BPL families with persons having 40% or more disability",
    benefits: [
      "Subsidized assistive devices",
      "Free devices for BPL families",
      "Repair and maintenance support",
      "Training on device usage"
    ],
    documents: [
      "Disability Certificate (40% or above)",
      "Aadhaar Card",
      "BPL Certificate",
      "Income Certificate",
      "Medical Prescription"
    ],
    amount: "Subsidized/Free",
    icon: FileText,
  },
  "artificial-limbs": {
    name: "Artificial Limbs",
    category: "Assistive Devices & Aids",
    description: "Provision of artificial limbs and prosthetics for persons with locomotor disabilities.",
    eligibility: "All categories of persons with locomotor disability",
    benefits: [
      "Free artificial limbs",
      "Fitting and adjustment",
      "Repair and replacement",
      "Follow-up services"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Medical Certificate",
      "Prescription from Doctor"
    ],
    amount: "Free",
    icon: FileText,
  },
  "hearing-aids": {
    name: "Hearing Aids",
    category: "Assistive Devices & Aids",
    description: "Provision of hearing aids and related assistive devices for persons with hearing impairment.",
    eligibility: "Persons with hearing impairment (40% or above)",
    benefits: [
      "Free hearing aids",
      "Battery supply",
      "Repair services",
      "Audiological assessment"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Audiological Report",
      "Medical Prescription"
    ],
    amount: "Free",
    icon: FileText,
  },
  "disability-pension": {
    name: "Disability Pension",
    category: "Social Security",
    description: "Monthly pension for persons with disabilities to provide financial security and support.",
    eligibility: "Persons with 40% or more disability, aged 18 years and above",
    benefits: [
      "Monthly pension",
      "Direct bank transfer",
      "Annual increment",
      "Family coverage"
    ],
    documents: [
      "Disability Certificate (40% or above)",
      "Aadhaar Card",
      "Income Certificate",
      "Bank Account Details",
      "Age Proof"
    ],
    amount: "₹500-1000 per month",
    icon: IndianRupee,
  },
  "maintenance-allowance": {
    name: "Maintenance Allowance",
    category: "Social Security",
    description: "Financial assistance for severely disabled persons who require constant care and support.",
    eligibility: "Severely disabled persons (80% or above disability)",
    benefits: [
      "Monthly maintenance allowance",
      "Caregiver support",
      "Medical expense coverage",
      "Direct benefit transfer"
    ],
    documents: [
      "Disability Certificate (80% or above)",
      "Aadhaar Card",
      "Medical Certificate",
      "Income Certificate",
      "Bank Account Details"
    ],
    amount: "₹1,000-2,000 per month",
    icon: IndianRupee,
  },
  "igndps": {
    name: "Indira Gandhi National Disability Pension",
    category: "Social Security",
    description: "Central government pension scheme for persons with disabilities from BPL families.",
    eligibility: "Persons with disabilities aged 18-59 years from BPL families",
    benefits: [
      "Monthly pension",
      "Central government support",
      "Direct bank transfer",
      "Annual revision"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "BPL Certificate",
      "Age Proof",
      "Bank Account Details"
    ],
    amount: "₹300-500 per month",
    icon: IndianRupee,
  },
  "term-loan": {
    name: "Term Loan for Business",
    category: "MSHFDC Loans",
    description: "Term loans for starting or expanding business ventures for persons with disabilities.",
    eligibility: "Persons with disabilities with viable business plans",
    benefits: [
      "Loan up to ₹10 Lakhs",
      "Subsidized interest rates",
      "Flexible repayment",
      "Business counseling"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Business Plan",
      "Income Certificate",
      "Bank Statements",
      "Property Documents (if applicable)"
    ],
    amount: "Up to ₹10 Lakhs",
    icon: IndianRupee,
  },
  "education-loan": {
    name: "Education Loan",
    category: "MSHFDC Loans",
    description: "Educational loans for higher education and professional courses for students with disabilities.",
    eligibility: "Students with disabilities pursuing higher education",
    benefits: [
      "Loan for tuition and expenses",
      "Low interest rates",
      "Moratorium period",
      "Tax benefits"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Admission Proof",
      "Income Certificate",
      "Co-applicant Details"
    ],
    amount: "Up to ₹20 Lakhs",
    icon: IndianRupee,
  },
  "micro-credit": {
    name: "Micro Credit Finance",
    category: "MSHFDC Loans",
    description: "Small loans for micro-enterprises and self-employment activities for persons with disabilities.",
    eligibility: "Persons with disabilities for micro-enterprises",
    benefits: [
      "Quick loan processing",
      "Minimal documentation",
      "Flexible repayment",
      "No collateral required"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Income Certificate",
      "Business Proposal"
    ],
    amount: "Up to ₹50,000",
    icon: IndianRupee,
  },
  "sports-equipment": {
    name: "Sports Equipment Grant",
    category: "Sports & Recreation",
    description: "Financial assistance for purchasing sports equipment for disabled sportspersons.",
    eligibility: "Sportspersons with disabilities",
    benefits: [
      "Equipment purchase grant",
      "Training support",
      "Competition participation",
      "Coaching assistance"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Sports Achievement Certificates",
      "Equipment Quotation"
    ],
    amount: "Up to ₹50,000",
    icon: Award,
  },
  "sports-coaching": {
    name: "Coaching Assistance",
    category: "Sports & Recreation",
    description: "Financial support for coaching and training of disabled sportspersons at national and state levels.",
    eligibility: "National/State level disabled sportspersons",
    benefits: [
      "Coaching fee support",
      "Training camp expenses",
      "Travel allowance",
      "Nutrition support"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Sports Certificates",
      "Coaching Center Details"
    ],
    amount: "Up to ₹1,00,000",
    icon: Award,
  },
  "sports-prize": {
    name: "Prize Money for Achievements",
    category: "Sports & Recreation",
    description: "Cash prizes and rewards for disabled sportspersons achieving excellence in competitions.",
    eligibility: "Winners in national/international competitions",
    benefits: [
      "Cash prizes",
      "Recognition awards",
      "Medal rewards",
      "Career support"
    ],
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Achievement Certificates",
      "Competition Results"
    ],
    amount: "As per achievement level",
    icon: Award,
  },
};

const SchemeDetail = () => {
  const { schemeId } = useParams<{ schemeId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get scheme data or default
  const scheme = schemeId ? schemeData[schemeId] : null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    disabilityType: "",
    disabilityPercentage: "",
    address: "",
    city: "",
    state: "Maharashtra",
    pincode: "",
    income: "",
    bankAccount: "",
    ifscCode: "",
    additionalInfo: "",
  });

  useEffect(() => {
    // Check if user is logged in (simple check - in real app, use proper auth)
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to apply for schemes",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate, toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate application ID
    const applicationId = `APP${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`;

    // Get existing applications from localStorage
    const existingApplications = JSON.parse(localStorage.getItem("schemeApplications") || "[]");
    
    // Add new application
    const newApplication = {
      id: applicationId,
      scheme: scheme?.name || "Unknown Scheme",
      schemeId: schemeId,
      status: "pending",
      appliedDate: new Date().toISOString().split("T")[0],
      amount: scheme?.amount || "N/A",
      formData: formData,
    };

    existingApplications.push(newApplication);
    localStorage.setItem("schemeApplications", JSON.stringify(existingApplications));

    setIsSubmitting(false);

    toast({
      title: "Application Submitted Successfully!",
      description: `Your application ID is ${applicationId}. You can track it in your dashboard.`,
    });

    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      navigate("/dashboard/citizen");
    }, 2000);
  };

  if (!scheme) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-secondary">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Scheme Not Found</CardTitle>
              <CardDescription>The scheme you're looking for doesn't exist.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/schemes">
                <Button className="w-full">Browse All Schemes</Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const SchemeIcon = scheme.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-1 bg-secondary">
        {/* Header Section */}
        <section className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <Link to="/schemes">
              <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Schemes
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <SchemeIcon className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{scheme.name}</h1>
                <p className="opacity-90">{scheme.category}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Scheme Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scheme Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{scheme.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Eligibility Criteria
                    </h3>
                    <p className="text-muted-foreground">{scheme.eligibility}</p>
                  </div>

                  {scheme.amount && (
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <IndianRupee className="h-4 w-4" />
                        Benefits Amount
                      </h3>
                      <Badge variant="secondary" className="text-lg">
                        {scheme.amount}
                      </Badge>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Benefits
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Required Documents
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {scheme.documents.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Apply for Scheme</CardTitle>
                  <CardDescription>
                    Fill in the details to submit your application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        placeholder="9876543210"
                        maxLength={10}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="disabilityType">Disability Type *</Label>
                      <Select
                        value={formData.disabilityType}
                        onValueChange={(value) => handleSelectChange("disabilityType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select disability type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="locomotor">Locomotor Disability</SelectItem>
                          <SelectItem value="visual">Visual Impairment</SelectItem>
                          <SelectItem value="hearing">Hearing Impairment</SelectItem>
                          <SelectItem value="intellectual">Intellectual Disability</SelectItem>
                          <SelectItem value="mental">Mental Illness</SelectItem>
                          <SelectItem value="multiple">Multiple Disabilities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="disabilityPercentage">Disability Percentage *</Label>
                      <Select
                        value={formData.disabilityPercentage}
                        onValueChange={(value) => handleSelectChange("disabilityPercentage", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select percentage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="40-59">40% - 59%</SelectItem>
                          <SelectItem value="60-79">60% - 79%</SelectItem>
                          <SelectItem value="80-100">80% - 100%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your complete address"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          placeholder="City"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          placeholder="400001"
                          maxLength={6}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="income">Annual Income (₹) *</Label>
                      <Input
                        id="income"
                        name="income"
                        type="number"
                        value={formData.income}
                        onChange={handleInputChange}
                        required
                        placeholder="500000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bankAccount">Bank Account Number *</Label>
                      <Input
                        id="bankAccount"
                        name="bankAccount"
                        value={formData.bankAccount}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter account number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ifscCode">IFSC Code *</Label>
                      <Input
                        id="ifscCode"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleInputChange}
                        required
                        placeholder="BANK0001234"
                        maxLength={11}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Any additional details you want to provide"
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
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

export default SchemeDetail;

