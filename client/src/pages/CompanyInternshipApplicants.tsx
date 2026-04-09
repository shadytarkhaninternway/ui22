import NotificationsPopover from "@/components/NotificationsPopover";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FloatingShapes from "@/components/FloatingShapes";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, Briefcase, Users, Building, TrendingUp, User, Search, Download, Mail, Phone, Moon, Sun, Globe, ArrowLeft, Percent } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CompanyInternshipApplicants() {
    const [, params] = useRoute("/company/internships/:id/applicants");
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const applications = [
        {
            id: 1,
            name: "Ahmed Khaled",
            university: "Cairo University",
            major: "Computer Science",
            gpa: "3.8",
            applied: "2 hours ago",
            status: "pending",
            email: "ahmed@example.com",
            phone: "+20 123 456 7890",
            cvUrl: "#",
            matchScore: 95,
        },
        {
            id: 2,
            name: "Sara Mohamed",
            university: "Ain Shams University",
            major: "Software Engineering",
            gpa: "3.9",
            applied: "5 hours ago",
            status: "reviewing",
            email: "sara@example.com",
            phone: "+20 123 456 7891",
            cvUrl: "#",
            matchScore: 88,
        },
        {
            id: 3,
            name: "Layla Ibrahim",
            university: "Cairo University",
            major: "Information Systems",
            gpa: "3.6",
            applied: "2 days ago",
            status: "rejected",
            email: "layla@example.com",
            phone: "+20 123 456 7893",
            cvUrl: "#",
            matchScore: 45,
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
            case "reviewing":
                return "bg-blue-500/10 text-blue-600 border-blue-500/20";
            case "accepted":
                return "bg-green-500/10 text-green-600 border-green-500/20";
            case "rejected":
                return "bg-red-500/10 text-red-600 border-red-500/20";
            default:
                return "bg-gray-500/10 text-gray-600 border-gray-500/20";
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <FloatingShapes />

            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <Link href="/company/internships">
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">IW</span>
                                    </div>
                                    <span className="font-semibold text-lg">InternWay</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Globe className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setLanguage("en")}>
                                        English {language === "en" && "✓"}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setLanguage("ar")}>
                                        العربية {language === "ar" && "✓"}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                            </Button>
                            <NotificationsPopover />
                            <Link href="/">
                                <Button variant="ghost" size="icon">
                                    <LogOut className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex pt-16">
                <aside className="hidden lg:block w-64 border-r border-border/50 min-h-screen bg-background/50 backdrop-blur-sm">
                    <nav className="p-4 space-y-2">
                        <Link href="/company/dashboard">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Dashboard
                            </Button>
                        </Link>
                        <Link href="/company/internships">
                            <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                                <Briefcase className="h-5 w-5" />
                                My Internships
                            </Button>
                        </Link>
                        <Link href="/company/applications">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Users className="h-5 w-5" />
                                Applications
                            </Button>
                        </Link>
                        <Link href="/company/profile">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Building className="h-5 w-5" />
                                Company Profile
                            </Button>
                        </Link>
                    </nav>
                </aside>

                <main className="flex-1 p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-3xl font-bold mb-2">Applicants</h1>
                            <p className="text-muted-foreground">Review incoming talent for this specific posting</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        placeholder="Search applicants..."
                                        className="pl-10"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <Select value={statusFilter} onValueChange={setStatusFilter}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Filter by status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Applications</SelectItem>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="reviewing">Under Review</SelectItem>
                                        <SelectItem value="accepted">Accepted</SelectItem>
                                        <SelectItem value="rejected">Rejected</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </motion.div>

                        <div className="space-y-4">
                            {applications.map((application, index) => (
                                <motion.div
                                    key={application.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <Card className="p-6 backdrop-blur-lg bg-background/80 hover-elevate transition-all border-l-4" style={{ borderLeftColor: `rgba(168, 85, 247, ${application.matchScore / 100})` }}>
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0">
                                                <User className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-1">{application.name}</h3>
                                                        <div className="flex flex-wrap gap-3 text-sm">
                                                            <span className="text-muted-foreground">{application.university}</span>
                                                            <span className="text-muted-foreground">•</span>
                                                            <span className="text-muted-foreground">{application.major}</span>
                                                            <span className="text-muted-foreground">•</span>
                                                            <span className="text-muted-foreground">GPA: {application.gpa}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-2">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(application.status)}`}>
                                                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                                                        </span>
                                                        <span className="flex items-center gap-1 text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                                            <Percent className="w-4 h-4" />
                                                            {application.matchScore}% Match
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-4 mb-4 p-3 rounded-lg bg-muted/50">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Mail className="w-4 h-4 text-muted-foreground" />
                                                        <span>{application.email}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Phone className="w-4 h-4 text-muted-foreground" />
                                                        <span>{application.phone}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                                    <span className="text-sm text-muted-foreground">Applied {application.applied}</span>
                                                    <div className="flex gap-2">
                                                        <Button variant="outline" size="sm">
                                                            <Download className="w-4 h-4 mr-1" />
                                                            Download CV
                                                        </Button>
                                                        {application.status === "pending" && (
                                                            <>
                                                                <Button size="sm" className="bg-gradient-to-r from-primary to-purple-500">
                                                                    Accept
                                                                </Button>
                                                                <Button variant="outline" size="sm" className="text-destructive">
                                                                    Reject
                                                                </Button>
                                                            </>
                                                        )}
                                                        {application.status === "reviewing" && (
                                                            <>
                                                                <Button size="sm" className="bg-gradient-to-r from-primary to-purple-500">
                                                                    Accept
                                                                </Button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
