import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";
import { Target, Users, Shield, ArrowRight, HeartHandshake, Lightbulb, TrendingUp, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { motion } from "framer-motion";

export default function AboutUs() {
    const { language } = useLanguage();

    // Custom text depending on language
    const isArabic = language === "ar";

    const content = {
        title: isArabic ? "عن InternWay" : "About InternWay",
        subtitle: isArabic
            ? "مهمتنا هي تمكين الشباب وربطهم بأفضل الفرص المهنية لبداية مسار ناجح وملهم."
            : "Our mission is to empower youth and connect them with the best career opportunities to start a successful and inspiring journey.",
        missionTitle: isArabic ? "رؤيتنا ومهمتنا" : "Our Vision & Mission",
        missionText: isArabic
            ? "نسعى في InternWay لبناء بيئة متكاملة تدمج بين التعليم العملي وفرص التدريب الحقيقية. نؤمن بأن كل طالب وخريج يستحق فرصة لإثبات مهاراته وتطويرها من خلال الاحتكاك المباشر مع سوق العمل والإرشاد المهني الصادق."
            : "At InternWay, we strive to build an integrated environment that merges practical education with real training opportunities. We believe every student and graduate deserves a chance to prove and develop their skills through direct interaction with the job market and sincere professional guidance.",
        whyUsTitle: isArabic ? "لماذا تختارنا؟" : "Why Choose Us?",
    };

    const values = [
        {
            icon: Target,
            title: isArabic ? "أهداف واضحة" : "Clear Goals",
            description: isArabic
                ? "نوفر فرص تدريب حقيقية وموثوقة تتناسب مع تخصصات الطلاب وأهدافهم."
                : "We provide real and reliable internship opportunities tailored to students' majors and goals.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: HeartHandshake,
            title: isArabic ? "توجيه وإرشاد" : "Guidance & Mentorship",
            description: isArabic
                ? "نربطك بنخبة من الموجهين والخبراء لمساعدتك في اتخاذ قراراتك المهنية بثقة."
                : "We connect you with top mentors and experts to help you make career decisions with confidence.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Lightbulb,
            title: isArabic ? "ابتكار مستمر" : "Continuous Innovation",
            description: isArabic
                ? "نستخدم أحدث التقنيات لتحليل السير الذاتية ومطابقتها بذكاء مع أنسب الشركات."
                : "We use the latest technologies to analyze CVs and smartly match them with the most suitable companies.",
            color: "from-orange-500 to-red-500",
        },
        {
            icon: TrendingUp,
            title: isArabic ? "نمو مستدام" : "Sustainable Growth",
            description: isArabic
                ? "نركز على التطوير المهني المستدام لضمان نجاحك على المدى الطويل وليس فقط فرصة مؤقتة."
                : "We focus on sustainable professional development to ensure long-term success, not just a temporary opportunity.",
            color: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <div className="min-h-screen">
            <FloatingShapes />

            {/* Navbar Integration (Simplified for About page) */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">IW</span>
                                </div>
                                <span className="font-semibold text-lg">InternWay</span>
                            </div>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/">
                                <Button variant="ghost">{isArabic ? "الرئيسية" : "Home"}</Button>
                            </Link>
                            <Link href="/signup">
                                <Button className="bg-gradient-to-r from-primary to-purple-500">
                                    {isArabic ? "سجل الآن" : "Sign Up"}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                            {content.title}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {content.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-muted/30 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-2">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">{content.missionTitle}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {content.missionText}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden border border-border bg-background/50 backdrop-blur-sm p-8 flex items-center justify-center min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-50" />
                            <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                                <div className="bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-border shadow-lg flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                                    <Users className="w-10 h-10 text-primary mb-3" />
                                    <span className="font-semibold">{isArabic ? "+10,000 طالب" : "10k+ Students"}</span>
                                </div>
                                <div className="bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-border shadow-lg flex flex-col items-center text-center hover:-translate-y-1 transition-transform translate-y-4">
                                    <Briefcase className="w-10 h-10 text-purple-500 mb-3" />
                                    <span className="font-semibold">{isArabic ? "+500 شركة" : "500+ Companies"}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.whyUsTitle}</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full p-6 rounded-2xl border border-border bg-card hover-elevate transition-all relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                        <div
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform relative z-10 shadow-lg`}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 relative z-10">{value.title}</h3>
                                        <p className="text-muted-foreground relative z-10 leading-relaxed">{value.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {isArabic ? "جاهز لتبدأ رحلتك؟" : "Ready to start your journey?"}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        {isArabic
                            ? "انضم الآن لمجتمعنا وكن جزءاً من مستقبل التوظيف الذكي."
                            : "Join our community now and be part of the future of smart hiring."}
                    </p>
                    <Link href="/signup">
                        <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity rounded-full shadow-lg hover:shadow-primary/25">
                            {isArabic ? "انضم إلينا الآن" : "Join Us Now"}
                            <ArrowRight className="ml-2 w-5 h-5 rtl:hidden" />
                            <ArrowRight className="mr-2 w-5 h-5 hidden rtl:block rotate-180" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-border bg-background">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} InternWay. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
                    </p>
                </div>
            </footer>
        </div>
    );
}
