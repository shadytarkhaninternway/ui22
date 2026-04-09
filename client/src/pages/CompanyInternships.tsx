
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FloatingShapes from "@/components/FloatingShapes";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, Briefcase, Users, Building, TrendingUp, MapPin, DollarSign, Calendar, Eye, Search, Moon, Sun, Globe, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function CompanyInternships() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      applications: 45,
      location: "Cairo",
      type: "Paid",
      salary: "5,000 EGP/month",
      status: "active",
      deadline: "Dec 30, 2024",
      views: 234,
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      applications: 32,
      location: "Alexandria",
      type: "Paid",
      salary: "5,500 EGP/month",
      status: "active",
      deadline: "Jan 15, 2025",
      views: 189,
    },
    {
      id: 3,
      title: "UI/UX Designer Intern",
      applications: 28,
      location: "Remote",
      type: "Unpaid",
      salary: "Unpaid",
      status: "active",
      deadline: "Jan 20, 2025",
      views: 156,
    },
    {
      id: 4,
      title: "Data Analyst Intern",
      applications: 18,
      location: "Cairo",
      type: "Paid",
      salary: "4,500 EGP/month",
      status: "closed",
      deadline: "Dec 15, 2024",
      views: 98,
    },
  ];

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
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">My Internships</h1>
                  <p className="text-muted-foreground">Manage your internship postings</p>
                </div>
                <Link href="/company/internships/new">
                  <Button className="bg-gradient-to-r from-primary to-purple-500">
                    Post New Internship
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="backdrop-blur-lg bg-background/80 rounded-2xl border border-border p-6"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search internships..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 backdrop-blur-lg bg-background/80 hover-elevate transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{internship.title}</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {internship.location}
                              </span>
                              <span className={`flex items-center gap-1 ${internship.type === "Paid" ? "text-green-500" : "text-orange-500"}`}>
                                <DollarSign className="w-4 h-4" />
                                {internship.salary}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Deadline: {internship.deadline}
                              </span>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${internship.status === "active"
                              ? "bg-green-500/10 text-green-600"
                              : "bg-gray-500/10 text-gray-600"
                            }`}>
                            {internship.status.charAt(0).toUpperCase() + internship.status.slice(1)}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-4 p-4 rounded-lg bg-muted/50">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Applications</p>
                            <p className="text-2xl font-bold">{internship.applications}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Views</p>
                            <p className="text-2xl font-bold flex items-center gap-1">
                              <Eye className="w-5 h-5" />
                              {internship.views}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Status</p>
                            <p className="text-lg font-semibold">{internship.type}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Link href={`/company/internships/${internship.id}/applicants`}>
                        <Button className="bg-gradient-to-r from-primary to-purple-500">
                          View Applications ({internship.applications})
                        </Button>
                      </Link>
                      <Button variant="outline">Edit</Button>
                      {internship.status === "active" ? (
                        <Button variant="outline" className="text-orange-600">Close Posting</Button>
                      ) : (
                        <Button variant="outline" className="text-green-600">Reopen</Button>
                      )}
                      <Button variant="outline" className="text-destructive">Delete</Button>
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
