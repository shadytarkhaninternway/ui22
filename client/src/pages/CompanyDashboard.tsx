
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingShapes from "@/components/FloatingShapes";
import { Bell, LogOut, Briefcase, Users, Eye, CheckCircle, User, Building, TrendingUp, Moon, Globe, ArrowLeft, Download, Percent } from "lucide-react";
import { motion } from "framer-motion";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function CompanyDashboard() {
  const stats = [
    {
      title: "Active Internships",
      value: "8",
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Total Applications",
      value: "156",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
    },

    {
      title: "Hired Interns",
      value: "23",
      icon: CheckCircle,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const activeInternships = [
    {
      title: "Frontend Developer Intern",
      applications: 45,
      location: "Cairo",
      type: "Paid",
    },
    {
      title: "Backend Developer Intern",
      applications: 32,
      location: "Alexandria",
      type: "Paid",
    },
    {
      title: "UI/UX Designer Intern",
      applications: 28,
      location: "Remote",
      type: "Unpaid",
    },
  ];

  const recentApplications = [
    {
      name: "Ahmed Khaled",
      position: "Frontend Developer",
      applied: "2 hours ago",
      status: "pending",
      matchScore: 92,
    },
    {
      name: "Sara Mohamed",
      position: "Backend Developer",
      applied: "5 hours ago",
      status: "pending",
      matchScore: 85,
    },
    {
      name: "Omar Hassan",
      position: "UI/UX Designer",
      applied: "1 day ago",
      status: "reviewed",
      matchScore: 78,
    },
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
            <Link href="/company/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                <TrendingUp className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/company/internships">
              <Button variant="ghost" className="w-full justify-start gap-2">
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

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold mb-2">Company Dashboard</h1>
              <p className="text-muted-foreground">Manage your internships and applications</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Active Internships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Active Internships</h2>
                <Button className="bg-gradient-to-r from-primary to-purple-500">
                  Post New Internship
                </Button>
              </div>
              <div className="space-y-4">
                {activeInternships.map((internship, index) => (
                  <Card key={index} className="p-4 hover-elevate transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{internship.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{internship.location}</span>
                          <span className={internship.type === "Paid" ? "text-green-500" : "text-orange-500"}>
                            {internship.type}
                          </span>
                          <span>{internship.applications} applications</span>
                        </div>
                      </div>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Recent Applications</h2>
              <div className="space-y-4">
                {recentApplications.map((application, index) => (
                  <Card key={index} className="p-4 hover-elevate transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{application.name}</h3>
                          <p className="text-sm text-muted-foreground">{application.position}</p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{application.applied}</p>
                          <div className="flex gap-2 items-center justify-end mt-1">
                            <span className={`text-xs px-2 py-1 rounded ${application.status === "pending"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-blue-500/10 text-blue-500"
                              }`}>
                              {application.status}
                            </span>
                            <span className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-green-500/10 text-green-600">
                              <Percent className="w-3 h-3" />
                              {application.matchScore}% Match
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-1" />
                            CV
                          </Button>
                          {application.status === "pending" && (
                            <>
                              <Button size="sm" className="bg-gradient-to-r from-primary to-purple-500">Accept</Button>
                              <Button size="sm" variant="outline" className="text-destructive">Reject</Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
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
