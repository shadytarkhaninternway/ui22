import NotificationsPopover from "@/components/NotificationsPopover";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Bell, LogOut, Briefcase, Users, Building, TrendingUp, Moon, Sun, Globe, ArrowLeft, PlusCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PostInternship() {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    const [requirements, setRequirements] = useState<string[]>([]);
    const [newRequirement, setNewRequirement] = useState("");

    const [skills, setSkills] = useState<string[]>([]);
    const [newSkill, setNewSkill] = useState("");

    const addRequirement = () => {
        if (newRequirement.trim()) {
            setRequirements([...requirements, newRequirement.trim()]);
            setNewRequirement("");
        }
    };

    const removeRequirement = (index: number) => {
        setRequirements(requirements.filter((_, i) => i !== index));
    };

    const addSkill = () => {
        if (newSkill.trim()) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const removeSkill = (index: number) => {
        setSkills(skills.filter((_, i) => i !== index));
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
                    <div className="max-w-4xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-3xl font-bold mb-2">Post New Internship</h1>
                            <p className="text-muted-foreground">Create a new internship opportunity for students</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="p-8 backdrop-blur-lg bg-background/80 border-none shadow-sm shadow-[#e2e8f0]/50 dark:shadow-none bg-white dark:bg-card">
                                <div className="space-y-8">
                                    
                                    {/* Row 1: Title and Work Type */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="title" className="font-semibold text-sm mb-2 block">Internship Title</Label>
                                            <Input id="title" placeholder="e.g., Frontend Developer Intern" className="bg-white dark:bg-background" />
                                        </div>
                                        <div>
                                            <Label htmlFor="workType" className="font-semibold text-sm mb-2 block">Work Type</Label>
                                            <Select>
                                                <SelectTrigger className="bg-white dark:bg-background">
                                                    <SelectValue placeholder="Onsite" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="onsite">Onsite</SelectItem>
                                                    <SelectItem value="remote">Remote</SelectItem>
                                                    <SelectItem value="hybrid">Hybrid</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Row 2: Description */}
                                    <div>
                                        <Label htmlFor="description" className="font-semibold text-sm mb-2 block">Description</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Describe the internship role, responsibilities, and what the intern will learn"
                                            className="min-h-[120px] bg-white dark:bg-background resize-y"
                                        />
                                    </div>

                                    {/* Row 3: Location (Governorate), Duration, Stipend */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <Label htmlFor="location" className="font-semibold text-sm mb-2 block">Location</Label>
                                            <Select>
                                                <SelectTrigger className="bg-white dark:bg-background">
                                                    <SelectValue placeholder="Select Governorate" />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-60 overflow-y-auto">
                                                    <SelectItem value="cairo">Cairo</SelectItem>
                                                    <SelectItem value="alexandria">Alexandria</SelectItem>
                                                    <SelectItem value="giza">Giza</SelectItem>
                                                    <SelectItem value="qalyubia">Qalyubia</SelectItem>
                                                    <SelectItem value="port-said">Port Said</SelectItem>
                                                    <SelectItem value="suez">Suez</SelectItem>
                                                    <SelectItem value="gharbia">Gharbia</SelectItem>
                                                    <SelectItem value="dakahlia">Dakahlia</SelectItem>
                                                    <SelectItem value="ismailia">Ismailia</SelectItem>
                                                    <SelectItem value="asyut">Asyut</SelectItem>
                                                    <SelectItem value="sharqia">Sharqia</SelectItem>
                                                    <SelectItem value="damietta">Damietta</SelectItem>
                                                    <SelectItem value="kafr-el-sheikh">Kafr El Sheikh</SelectItem>
                                                    <SelectItem value="monufia">Monufia</SelectItem>
                                                    <SelectItem value="beheira">Beheira</SelectItem>
                                                    <SelectItem value="north-sinai">North Sinai</SelectItem>
                                                    <SelectItem value="south-sinai">South Sinai</SelectItem>
                                                    <SelectItem value="fayoum">Fayoum</SelectItem>
                                                    <SelectItem value="beni-suef">Beni Suef</SelectItem>
                                                    <SelectItem value="minya">Minya</SelectItem>
                                                    <SelectItem value="sohag">Sohag</SelectItem>
                                                    <SelectItem value="qena">Qena</SelectItem>
                                                    <SelectItem value="luxor">Luxor</SelectItem>
                                                    <SelectItem value="aswan">Aswan</SelectItem>
                                                    <SelectItem value="red-sea">Red Sea</SelectItem>
                                                    <SelectItem value="new-valley">New Valley</SelectItem>
                                                    <SelectItem value="matrouh">Matrouh</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="duration" className="font-semibold text-sm mb-2 block">Duration</Label>
                                            <Input id="duration" placeholder="e.g., 3 months" className="bg-white dark:bg-background" />
                                        </div>
                                        <div>
                                            <Label htmlFor="stipend" className="font-semibold text-sm mb-2 block">Stipend (optional)</Label>
                                            <Input id="stipend" placeholder="e.g., $2000/month" className="bg-white dark:bg-background" />
                                        </div>
                                    </div>

                                    {/* Row 4: Application Deadline */}
                                    <div>
                                        <Label htmlFor="deadline" className="font-semibold text-sm mb-2 block">Application Deadline</Label>
                                        <Input id="deadline" type="date" className="bg-white dark:bg-background" />
                                    </div>

                                    {/* Row 5: Requirements */}
                                    <div>
                                        <Label htmlFor="requirements" className="font-semibold text-sm mb-2 block">Requirements</Label>
                                        <div className="space-y-3">
                                            {requirements.map((req, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-md border border-border">
                                                    <span className="text-sm">{req}</span>
                                                    <Button variant="ghost" size="icon" onClick={() => removeRequirement(idx)} className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                            <div className="flex gap-2">
                                                <Input 
                                                    placeholder="Enter a requirement" 
                                                    className="bg-white dark:bg-background" 
                                                    value={newRequirement}
                                                    onChange={(e) => setNewRequirement(e.target.value)}
                                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                                                />
                                            </div>
                                            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-transparent p-0 h-auto font-medium" onClick={addRequirement}>
                                                <PlusCircle className="h-4 w-4 mr-2" /> Add requirement
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Row 6: Required Skills */}
                                    <div>
                                        <Label htmlFor="skills" className="font-semibold text-sm mb-2 block">Required Skills</Label>
                                        <div className="space-y-3">
                                            {skills.map((skill, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-md border border-border">
                                                    <span className="text-sm">{skill}</span>
                                                    <Button variant="ghost" size="icon" onClick={() => removeSkill(idx)} className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                            <div className="flex gap-2">
                                                <Input 
                                                    placeholder="Enter a skill" 
                                                    className="bg-white dark:bg-background" 
                                                    value={newSkill}
                                                    onChange={(e) => setNewSkill(e.target.value)}
                                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                                                />
                                            </div>
                                            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-transparent p-0 h-auto font-medium" onClick={addSkill}>
                                                <PlusCircle className="h-4 w-4 mr-2" /> Add skill
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end pt-4 mt-8">
                                        <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8">
                                            Post Internship
                                        </Button>
                                    </div>
                                    
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
}
