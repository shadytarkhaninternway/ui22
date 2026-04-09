import { useState } from "react";
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
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Video, Briefcase, TrendingUp, BookOpen, Bell, LogOut, Moon, Sun, Globe, ArrowLeft, Star } from "lucide-react";
import { Link } from "wouter";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function StudentSessions() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [selectedSessionForReview, setSelectedSessionForReview] = useState<number | null>(null);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = () => {
    if (reviewRating === 0) {
      alert("Please select a rating.");
      return;
    }
    // Handle submission properly in real app
    alert("Review submitted successfully!");
    setSelectedSessionForReview(null);
    setReviewRating(0);
    setReviewText("");
  };

  const sessions = [
    {
      id: 1,
      mentor: "Dr. Ahmed Hassan",
      topic: "Career Path in Software Engineering",
      date: "Dec 28, 2024",
      time: "3:00 PM - 4:00 PM",
      status: "confirmed",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      type: "Career Guidance",
    },
    {
      id: 2,
      mentor: "Eng. Sara Mohamed",
      topic: "Machine Learning Fundamentals",
      date: "Dec 30, 2024",
      time: "10:00 AM - 11:00 AM",
      status: "pending",
      meetingLink: null,
      type: "Technical",
    },
    {
      id: 3,
      mentor: "Eng. Nour Khaled",
      topic: "Portfolio Review Session",
      date: "Jan 2, 2025",
      time: "2:00 PM - 3:00 PM",
      status: "confirmed",
      meetingLink: "https://zoom.us/j/123456789",
      type: "Design Review",
    },
    {
      id: 4,
      mentor: "Prof. Karim Ali",
      topic: "Deep Learning Research Discussion",
      date: "Dec 25, 2024",
      time: "4:00 PM - 5:00 PM",
      status: "completed",
      meetingLink: null,
      type: "Research",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
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
              <Button variant="ghost" className="w-full justify-start gap-2">
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
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
                My Sessions
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold mb-2">My Sessions</h1>
              <p className="text-muted-foreground">Manage your mentorship sessions</p>
            </motion.div>

            {/* Sessions List */}
            <div className="space-y-4">
              {sessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Card className="p-6 backdrop-blur-lg bg-background/80 hover-elevate transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{session.topic}</h3>
                              <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(session.status)}`}>
                              {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 mt-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {session.date}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {session.time}
                            </div>
                            <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs">
                              {session.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {session.status === "confirmed" && session.meetingLink && (
                        <Button className="bg-gradient-to-r from-primary to-purple-500">
                          <Video className="w-4 h-4 mr-2" />
                          Join Meeting
                        </Button>
                      )}
                      {session.status === "pending" && (
                        <Button variant="outline">Waiting for Confirmation</Button>
                      )}
                      {session.status !== "completed" && (
                        <>
                          <Button variant="outline">Reschedule</Button>
                          <Button variant="outline" className="text-destructive">Cancel</Button>
                        </>
                      )}
                      {session.status === "completed" && (
                        <Button variant="outline" onClick={() => setSelectedSessionForReview(session.id)}>Leave Review</Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Review Dialog */}
            <Dialog open={selectedSessionForReview !== null} onOpenChange={(open) => !open && setSelectedSessionForReview(null)}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Leave a Review</DialogTitle>
                  <DialogDescription>
                    Rate your session experience and leave feedback for your mentor.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewRating(star)}
                        className={`p-1 transition-colors ${reviewRating >= star ? "text-yellow-500" : "text-muted-foreground hover:text-yellow-500/50"
                          }`}
                      >
                        <Star className={`w-8 h-8 ${reviewRating >= star ? "fill-current" : ""}`} />
                      </button>
                    ))}
                  </div>
                  <Textarea
                    placeholder="Write your review here..."
                    className="min-h-[100px]"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-purple-500"
                    onClick={handleReviewSubmit}
                  >
                    Submit Review
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </main>
      </div>
    </div>
  );
}