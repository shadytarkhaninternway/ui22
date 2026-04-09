
import { Link } from "wouter";
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
import { Bell, LogOut, Calendar, Users, Clock, User, Video, TrendingUp, BookOpen, Moon, Sun, Globe, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function MentorSessions() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const sessions = [
    {
      id: 1,
      student: "Ahmed Mohamed",
      topic: "Career Guidance",
      date: "Today, 3:00 PM",
      duration: "1 hour",
      status: "confirmed",
      meetingLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      student: "Sara Ali",
      topic: "Resume Review",
      date: "Tomorrow, 10:00 AM",
      duration: "45 min",
      status: "pending",
      meetingLink: null,
    },
    {
      id: 3,
      student: "Karim Hassan",
      topic: "Interview Prep",
      date: "Jan 17, 2:00 PM",
      duration: "1 hour",
      status: "confirmed",
      meetingLink: "https://zoom.us/j/123456789",
    },
    {
      id: 4,
      student: "Layla Ibrahim",
      topic: "Technical Discussion",
      date: "Jan 15, 2024",
      duration: "1 hour",
      status: "completed",
      meetingLink: null,
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

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
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
        <aside className="hidden lg:block w-64 border-r border-border/50 min-h-screen bg-background/50 backdrop-blur-sm">
          <nav className="p-4 space-y-2">
            <Link href="/mentor/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <TrendingUp className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/mentor/sessions">
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
                My Sessions
              </Button>
            </Link>
            <Link href="/mentor/mentees">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-5 w-5" />
                My Mentees
              </Button>
            </Link>
            <Link href="/mentor/profile">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-5 w-5" />
                Profile
              </Button>
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold mb-2">My Sessions</h1>
              <p className="text-muted-foreground">Manage your mentorship sessions</p>
            </motion.div>

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
                              <p className="text-sm text-muted-foreground">with {session.student}</p>
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
                              {session.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {session.status === "confirmed" && session.meetingLink && (
                        <Button className="bg-gradient-to-r from-primary to-purple-500">
                          <Video className="w-4 h-4 mr-2" />
                          Start Meeting
                        </Button>
                      )}
                      {session.status === "pending" && (
                        <>
                          <Button className="bg-gradient-to-r from-primary to-purple-500">
                            Confirm
                          </Button>
                          <Button variant="outline" className="text-destructive">
                            Decline
                          </Button>
                        </>
                      )}
                      <Button variant="outline">View Details</Button>
                      {session.status !== "completed" && (
                        <Button variant="outline">Reschedule</Button>
                      )}
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
