import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageProvider";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import StudentDashboard from "@/pages/StudentDashboard";
import StudentProfile from "@/pages/StudentProfile";
import StudentInternships from "@/pages/StudentInternships";
import StudentMentorships from "@/pages/StudentMentorships";
import StudentMentorProfile from "@/pages/StudentMentorProfile";
import StudentSessions from "@/pages/StudentSessions";
import MentorDashboard from "@/pages/MentorDashboard";
import MentorSessions from "@/pages/MentorSessions";
import MentorMentees from "@/pages/MentorMentees";
import MentorProfile from "@/pages/MentorProfile";
import CompanyDashboard from "@/pages/CompanyDashboard";
import CompanyInternships from "@/pages/CompanyInternships";
import CompanyInternshipApplicants from "@/pages/CompanyInternshipApplicants";
import PostInternship from "@/pages/PostInternship";
import CompanyApplications from "@/pages/CompanyApplications";
import CompanyProfile from "@/pages/CompanyProfile";
import AboutUs from "@/pages/AboutUs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutUs} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/student/dashboard" component={StudentDashboard} />
      <Route path="/student/profile" component={StudentProfile} />
      <Route path="/student/internships" component={StudentInternships} />
      <Route path="/student/mentorships" component={StudentMentorships} />
      <Route path="/student/mentorships/:id" component={StudentMentorProfile} />
      <Route path="/student/sessions" component={StudentSessions} />
      <Route path="/mentor/dashboard" component={MentorDashboard} />
      <Route path="/mentor/sessions" component={MentorSessions} />
      <Route path="/mentor/mentees" component={MentorMentees} />
      <Route path="/mentor/profile" component={MentorProfile} />
      <Route path="/company/dashboard" component={CompanyDashboard} />
      <Route path="/company/internships" component={CompanyInternships} />
      <Route path="/company/internships/new" component={PostInternship} />
      <Route path="/company/internships/:id/applicants" component={CompanyInternshipApplicants} />
      <Route path="/company/applications" component={CompanyApplications} />
      <Route path="/company/profile" component={CompanyProfile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <div className="min-h-screen">
              <Route path="/" component={Navbar} />
              <Toaster />
              <Router />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;