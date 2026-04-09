
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingShapes from "@/components/FloatingShapes";
import { Bell, LogOut, Calendar, Users, Clock, User, Briefcase, BookOpen, TrendingUp, Moon, Globe, ArrowLeft, Star, Video } from "lucide-react";
import { motion } from "framer-motion";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function MentorDashboard() {
  const stats = [
    {
      title: "Total Sessions",
      value: "47",
      icon: Calendar,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Mentees",
      value: "12",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Hours This Month",
      value: "24",
      icon: Clock,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Average Rating",
      value: "4.9",
      icon: Star,
      gradient: "from-yellow-400 to-amber-500",
    },
  ];

  const upcomingSessions = [
    {
      student: "Ahmed Mohamed",
      topic: "Career Guidance",
      date: "Today, 3:00 PM",
      duration: "1 hour",
    },
    {
      student: "Sara Ali",
      topic: "Resume Review",
      date: "Tomorrow, 10:00 AM",
      duration: "45 min",
    },
    {
      student: "Karim Hassan",
      topic: "Interview Prep",
      date: "Jan 17, 2:00 PM",
      duration: "1 hour",
    },
  ];

  const recentMentees = [
    { name: "Layla Ibrahim", field: "Software Engineering", sessions: 5 },
    { name: "Omar Saeed", field: "Data Science", sessions: 3 },
    { name: "Nour Khalil", field: "UI/UX Design", sessions: 7 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />

      {/* Top Navbar */}
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
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Moon className="h-5 w-5" />
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
            <Link href="/mentor/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                <TrendingUp className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/mentor/sessions">
              <Button variant="ghost" className="w-full justify-start gap-2">
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

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold mb-2">Mentor Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your mentorship overview</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Card className="p-6 backdrop-blur-lg bg-background/80 hover-elevate transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Upcoming Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Upcoming Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <Card key={index} className="p-4 hover-elevate transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{session.student}</h3>
                          <p className="text-sm text-muted-foreground">{session.topic}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{session.date}</p>
                        <p className="text-xs text-muted-foreground mb-3">{session.duration}</p>
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm" className="bg-gradient-to-r from-primary to-purple-500">
                            <Video className="w-4 h-4 mr-1" />
                            Start
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Recent Mentees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Recent Mentees</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentMentees.map((mentee, index) => (
                  <Card key={index} className="p-4 hover-elevate transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{mentee.name}</h3>
                        <p className="text-xs text-muted-foreground">{mentee.field}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{mentee.sessions} sessions completed</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
