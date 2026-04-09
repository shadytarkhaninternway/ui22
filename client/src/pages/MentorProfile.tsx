
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FloatingShapes from "@/components/FloatingShapes";
import CVUploadZone from "@/components/CVUploadZone";
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
import { Bell, LogOut, Calendar, Users, User, TrendingUp, Save, Briefcase, DollarSign, Clock, Moon, Sun, Globe, ArrowLeft, Edit, Video, CreditCard, PlusCircle, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function MentorProfile() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
    const [cvFile, setCvFile] = useState<File | null>(null);

  const [freeSlots, setFreeSlots] = useState([
    { id: 1, day: "Monday, Jan 22", time: "10:00 AM - 11:30 AM" },
    { id: 2, day: "Wednesday, Jan 24", time: "2:00 PM - 4:00 PM" },
    { id: 3, day: "Friday, Jan 26", time: "1:00 PM - 2:00 PM" },
  ]);
  const [newDay, setNewDay] = useState("");
  const [newTime, setNewTime] = useState("");

  const handleAddSlot = () => {
    if (newDay && newTime) {
      setFreeSlots([...freeSlots, { id: Date.now(), day: newDay, time: newTime }]);
      setNewDay("");
      setNewTime("");
    }
  };

  const removeSlot = (id: number) => {
    setFreeSlots(freeSlots.filter(slot => slot.id !== id));
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
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
                <User className="h-5 w-5" />
                Profile
              </Button>
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold">Profile Settings</h1>
                  <p className="text-muted-foreground">Manage your mentor profile information</p>
                </div>
                <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/10">
                  <Edit className="w-4 h-4" /> Edit Profile
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="Dr. Ahmed Hassan" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="ahmed.hassan@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+20 123 456 7890" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Cairo, Egypt" />
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="jobTitle">Current Job Title</Label>
                    <Input id="jobTitle" defaultValue="Senior Software Engineer" />
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" defaultValue="15" />
                  </div>
                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input id="linkedIn" defaultValue="linkedin.com/in/ahmedhassan" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Passionate about mentoring young developers and helping them navigate their career paths. With 15 years in the industry, I specialize in software architecture and team leadership."
                      className="min-h-24"
                      maxLength={500}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Areas of Expertise Section Removed */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4">Upload CV</h2>
                <CVUploadZone
                  selectedFile={cvFile}
                  onFileSelect={setCvFile}
                  onFileRemove={() => setCvFile(null)}
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Availability & Preferences
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-medium mb-1">Available Free Slots</h3>
                    {freeSlots.map((slot) => (
                      <div key={slot.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-green-500/5 group relative">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-green-600" />
                          <span className="font-medium">{slot.day}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-green-600 font-medium">{slot.time}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-destructive hover:bg-destructive/10" 
                            onClick={() => removeSlot(slot.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {freeSlots.length === 0 && <p className="text-xs text-muted-foreground my-2">No free slots added yet.</p>}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full mb-2 mt-2 gap-2 hover:bg-primary/5 border-primary/20 bg-primary/5 text-primary">
                        <Edit className="w-4 h-4" /> Manage Availability & Preferences
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Management Settings</DialogTitle>
                        <DialogDescription>
                          Configure your free slots, session pricing, and platform details.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid gap-6 py-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm border-b pb-2">Add Free Slot</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="slotDay">Day</Label>
                              <Input id="slotDay" type="date" className="mt-1" value={newDay} onChange={(e) => setNewDay(e.target.value)} />
                            </div>
                            <div>
                              <Label htmlFor="slotTime">Time</Label>
                              <Input id="slotTime" type="time" className="mt-1" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
                            </div>
                          </div>
                          <Button variant="outline" className="w-full gap-2 border-primary/20 hover:bg-primary/5 text-primary" type="button" onClick={handleAddSlot}>
                            <PlusCircle className="w-4 h-4" /> Add Slot
                          </Button>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-semibold text-sm border-b pb-2">Session Details</h4>
                          <div>
                            <Label htmlFor="sessionType">Session Type</Label>
                            <select id="sessionType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1">
                              <option value="paid">Paid Sessions</option>
                              <option value="free">Free Mentorship</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="hourlyRate">Session Salary / Hourly Rate (EGP)</Label>
                            <Input id="hourlyRate" type="number" defaultValue="500" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="sessionDuration">Default Session Duration (minutes)</Label>
                            <Input id="sessionDuration" type="number" defaultValue="60" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="platform">Meeting Platform</Label>
                            <select id="platform" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1">
                              <option value="zoom">Zoom</option>
                              <option value="meet">Google Meet</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end mt-4">
                        <DialogTrigger asChild>
                          <Button type="button" className="bg-gradient-to-r from-primary to-purple-500 w-full md:w-auto">
                            Save Changes
                          </Button>
                        </DialogTrigger>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="w-full bg-gradient-to-r from-primary to-purple-500" size="lg">
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </Button>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
