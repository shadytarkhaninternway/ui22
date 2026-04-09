import { createContext, useContext, useState } from "react";

type Language = "en" | "ar";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    login: "Login",
    signUp: "Sign Up",
    welcomeBack: "Welcome Back",
    createAccount: "Create Your Account",
    email: "Email",
    password: "Password",
    rememberMe: "Remember Me",
    forgotPassword: "Forgot Password?",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    student: "Student",
    mentor: "Mentor",
    company: "Company",
    selectRole: "Select Your Role",
    continue: "Continue",
    heroTitle: "Find Your Perfect Internship Match",
    heroSubtitle: "Connect with mentors and companies through AI-powered matching",
    getStarted: "Get Started",
    learnMore: "Learn More",
    features: "Features",
    howItWorks: "How It Works",
    smartMatching: "Smart Matching with AI",
    smartMatchingDesc: "Our AI algorithm matches you with the best opportunities",
    cvAnalysis: "CV Analysis",
    cvAnalysisDesc: "Get instant feedback on your CV to improve your chances",
    mentorship: "Mentorship Booking",
    mentorshipDesc: "Book sessions with experienced mentors in your field",
    opportunities: "Quality Opportunities",
    opportunitiesDesc: "Access curated internships from top companies",
    step1: "Create Your Profile",
    step1Desc: "Sign up and complete your profile with your skills and interests",
    step2: "Get Matched",
    step2Desc: "Our AI finds the best opportunities tailored for you",
    step3: "Start Your Journey",
    step3Desc: "Connect with mentors and apply to internships",
    fullName: "Full Name",
    confirmPassword: "Confirm Password",
    university: "University",
    college: "College",
    degree: "Degree",
    major: "Major",
    graduationYear: "Graduation Year",
    uploadCV: "Upload Your CV",
    dragDrop: "Drag and drop your CV here, or click to browse",
    experience: "Years of Experience",
    jobTitle: "Job Title",
    linkedIn: "LinkedIn/Profile URL",
    companyName: "Company Name",
    industry: "Industry",
    location: "Location",
    phone: "Phone Number",
    address: "Address",
    description: "Company Description",
  },
  ar: {
    home: "الرئيسية",
    aboutUs: "من نحن",
    login: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    welcomeBack: "مرحباً بعودتك",
    createAccount: "إنشاء حسابك",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    rememberMe: "تذكرني",
    forgotPassword: "نسيت كلمة المرور؟",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    student: "طالب",
    mentor: "مرشد",
    company: "شركة",
    selectRole: "اختر دورك",
    continue: "متابعة",
    heroTitle: "اعثر على فرصة التدريب المثالية",
    heroSubtitle: "تواصل مع المرشدين والشركات من خلال المطابقة الذكية",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",
    features: "المميزات",
    howItWorks: "كيف يعمل",
    smartMatching: "مطابقة ذكية بالذكاء الاصطناعي",
    smartMatchingDesc: "خوارزميتنا الذكية تطابقك مع أفضل الفرص",
    cvAnalysis: "تحليل السيرة الذاتية",
    cvAnalysisDesc: "احصل على ملاحظات فورية على سيرتك الذاتية",
    mentorship: "حجز جلسات الإرشاد",
    mentorshipDesc: "احجز جلسات مع مرشدين ذوي خبرة في مجالك",
    opportunities: "فرص عالية الجودة",
    opportunitiesDesc: "وصول لتدريبات منتقاة من أفضل الشركات",
    step1: "أنشئ ملفك الشخصي",
    step1Desc: "سجل وأكمل ملفك بمهاراتك واهتماماتك",
    step2: "احصل على المطابقة",
    step2Desc: "ذكاؤنا الاصطناعي يجد أفضل الفرص لك",
    step3: "ابدأ رحلتك",
    step3Desc: "تواصل مع المرشدين وقدم على التدريبات",
    fullName: "الاسم الكامل",
    confirmPassword: "تأكيد كلمة المرور",
    university: "الجامعة",
    college: "الكلية",
    degree: "الدرجة العلمية",
    major: "التخصص",
    graduationYear: "سنة التخرج",
    uploadCV: "رفع السيرة الذاتية",
    dragDrop: "اسحب وأفلت سيرتك الذاتية هنا، أو اضغط للتصفح",
    experience: "سنوات الخبرة",
    jobTitle: "المسمى الوظيفي",
    linkedIn: "رابط LinkedIn/الملف الشخصي",
    companyName: "اسم الشركة",
    industry: "الصناعة",
    location: "الموقع",
    phone: "رقم الهاتف",
    address: "العنوان",
    description: "وصف الشركة",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
