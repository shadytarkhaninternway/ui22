import NotificationsPopover from "@/components/NotificationsPopover";
import { useState } from "react";
import { useRoute, Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingShapes from "@/components/FloatingShapes";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Star, Briefcase, TrendingUp, Calendar, BookOpen, User, Bell, LogOut, Moon, Sun, Globe, ArrowLeft, Clock, MessageSquare } from "lucide-react";

// Mock data (in a real app, this would be fetched based on the ID)
const getMentorDetails = (id: string) => {
    return {
        id: parseInt(id),
        name: "Dr. Ahmed Hassan",
        title: "Senior Software Engineer",
        field: "Software Engineering",
        experience: "15 years",
        rating: 4.9,
        reviews: 127,
        expertise: ["React", "Node.js", "System Design", "Career Growth"],
        available: true,
        nextSlot: "Tomorrow 3PM",
        bio: "Passionate about mentoring young developers and helping them navigate their career paths. I have over 15 years of experience building scalable web applications and leading engineering teams at top tech companies. My mentoring style focuses on practical, hands-on learning and preparing you for real-world engineering challenges.",
        stats: {
            totalSessions: 342,
            responseTime: "< 2 hours",
            hiredMentees: 45
        },
        availableSlots: [
            "Today, 5:00 PM",
            "Tomorrow, 3:00 PM",
            "Tomorrow, 6:00 PM",
            "Friday, 1:00 PM",
        ]
    };
};

export default function StudentMentorProfile() {
    const [, params] = useRoute("/student/mentorships/:id");
    const [, navigate] = useLocation();
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    const [isBookingDetailsOpen, setIsBookingDetailsOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");

    if (!params?.id) return <div>Mentor not found</div>;

    const mentor = getMentorDetails(params.id);

    const handleBookSession = () => {
        if (!selectedSlot || !selectedTopic) {
            alert("Please select a time slot and topic");
            return;
        }
        // Handle booking logic here
        alert("Session booked successfully!");
        setIsBookingDetailsOpen(false);
        navigate("/student/sessions");
    };

    return (
        <div className="min-h-screen bg-background">
            <FloatingShapes />

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <Link href="/student/mentorships">
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">IW</span>
                                    </div>
                                    <span className="font-semibold text-lg hidden sm:block">InternWay</span>
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
                {/* Sidebar */}
                <aside className="hidden lg:block w-64 border-r border-border/50 min-h-screen bg-background/50 backdrop-blur-sm">
                    <nav className="p-4 space-y-2">
                        <Link href="/student/dashboard">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <TrendingUp className="h-5 w-5" />
                                Dashboard
                            </Button>
                        </Link>
                        <Link href="/student/internships">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Briefcase className="h-5 w-5" />
                                Internships
                            </Button>
                        </Link>
                        <Link href="/student/mentorships">
                            <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                                <BookOpen className="h-5 w-5" />
                                Mentorships
                            </Button>
                        </Link>
                        <Link href="/student/profile">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <User className="h-5 w-5" />
                                Profile
                            </Button>
                        </Link>
                        <Link href="/student/sessions">
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <Calendar className="h-5 w-5" />
                                My Sessions
                            </Button>
                        </Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-8">
                    <div className="max-w-4xl mx-auto space-y-6">

                        {/* Mentor Header Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card className="p-8 backdrop-blur-lg bg-background/80 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <User className="w-12 h-12 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
                                        <p className="text-xl text-muted-foreground mb-4">{mentor.title}</p>

                                        <div className="flex flex-wrap items-center gap-4 text-sm">
                                            <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="font-semibold">{mentor.rating}</span>
                                                <span>({mentor.reviews} reviews)</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{mentor.experience}</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full">
                                                <BookOpen className="w-4 h-4" />
                                                <span>{mentor.field}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto mt-4 md:mt-0">
                                        <Dialog open={isBookingDetailsOpen} onOpenChange={setIsBookingDetailsOpen}>
                                            <DialogTrigger asChild>
                                                <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-purple-500" disabled={!mentor.available}>
                                                    {mentor.available ? "Book Session" : "Unavailable"}
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>Book Session with {mentor.name}</DialogTitle>
                                                    <DialogDescription>
                                                        Select a preferred time slot and topic for your mentorship session.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4 py-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Select Time Slot</label>
                                                        <Select value={selectedSlot} onValueChange={setSelectedSlot}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Choose a time" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {mentor.availableSlots.map(slot => (
                                                                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Session Topic</label>
                                                        <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="What do you want to discuss?" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="cv_review">CV & Resume Review</SelectItem>
                                                                <SelectItem value="career_guidance">Career Guidance</SelectItem>
                                                                <SelectItem value="mock_interview">Mock Interview</SelectItem>
                                                                <SelectItem value="technical_help">Technical Help</SelectItem>
                                                                <SelectItem value="portfolio_review">Portfolio Review</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end gap-3 mt-4">
                                                    <Button variant="outline" onClick={() => setIsBookingDetailsOpen(false)}>Cancel</Button>
                                                    <Button onClick={handleBookSession} className="bg-gradient-to-r from-primary to-purple-500">Confirm Booking</Button>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Main Info Column */}
                            <div className="md:col-span-2 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Card className="p-6 backdrop-blur-lg bg-background/80">
                                        <h2 className="text-xl font-semibold mb-4 text-foreground/90">About</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {mentor.bio}
                                        </p>
                                    </Card>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Card className="p-6 backdrop-blur-lg bg-background/80">
                                        <h2 className="text-xl font-semibold mb-4 text-foreground/90">Areas of Expertise</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {mentor.expertise.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Sidebar Stats Column */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-6"
                            >
                                <Card className="p-6 backdrop-blur-lg bg-background/80">
                                    <h3 className="font-semibold mb-6 flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                        Mentor Stats
                                    </h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Total Sessions</p>
                                            <p className="text-2xl font-bold">{mentor.stats.totalSessions}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Avg. Response Time</p>
                                            <p className="text-2xl font-bold text-green-600">{mentor.stats.responseTime}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Mentees Hired</p>
                                            <p className="text-2xl font-bold text-blue-600">{mentor.stats.hiredMentees}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
