
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FloatingShapes from "@/components/FloatingShapes";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, Briefcase, Users, Building, TrendingUp, Save, MapPin, Phone, Mail, Globe, Moon, Sun, ArrowLeft, Edit } from "lucide-react";
import { motion } from "framer-motion";
import NotificationsPopover from "@/components/NotificationsPopover";

export default function CompanyProfile() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

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
              <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/10 text-primary">
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
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Company Profile</h1>
                  <p className="text-muted-foreground">Manage your company information</p>
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
                  <Building className="w-5 h-5" />
                  Company Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Tech Corp" />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" defaultValue="Technology & Software" />
                  </div>
                  <div>
                    <Label htmlFor="founded">Founded Year</Label>
                    <Input id="founded" defaultValue="2010" />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="website" className="pl-10" defaultValue="www.techcorp.com" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description">Company Description</Label>
                    <Textarea
                      id="description"
                      defaultValue="We are a leading technology company specializing in innovative software solutions. Our mission is to empower businesses through cutting-edge technology and exceptional talent."
                      className="min-h-24"
                      maxLength={500}
                    />
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
                  <MapPin className="w-5 h-5" />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Company Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" className="pl-10" defaultValue="info@techcorp.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" className="pl-10" defaultValue="+20 2 1234 5678" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Office Address</Label>
                    <Input id="address" defaultValue="123 Tech Street, Smart Village, Cairo, Egypt" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="Cairo" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" defaultValue="Egypt" />
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-background/80">
                <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input id="linkedin" defaultValue="linkedin.com/company/techcorp" />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input id="twitter" defaultValue="twitter.com/techcorp" />
                  </div>
                  <div>
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input id="facebook" defaultValue="facebook.com/techcorp" />
                  </div>
                  <div>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input id="instagram" defaultValue="instagram.com/techcorp" />
                  </div>
                </div>
              </Card>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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
