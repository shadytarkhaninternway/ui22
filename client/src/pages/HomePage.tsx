import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";
import { Brain, FileSearch, Calendar, Briefcase, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("smartMatching"),
      description: t("smartMatchingDesc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileSearch,
      title: t("cvAnalysis"),
      description: t("cvAnalysisDesc"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      title: t("mentorship"),
      description: t("mentorshipDesc"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: t("opportunities"),
      description: t("opportunitiesDesc"),
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("step1"),
      description: t("step1Desc"),
    },
    {
      number: "02",
      title: t("step2"),
      description: t("step2Desc"),
    },
    {
      number: "03",
      title: t("step3"),
      description: t("step3Desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10"
          style={{ backdropFilter: "blur(100px)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              {t("heroTitle")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8" data-testid="button-get-started">
                {t("getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-learn-more">
                {t("learnMore")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t("features")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes InternWay the perfect platform for your internship journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-xl border border-border bg-card hover-elevate transition-all">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t("howItWorks")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-3xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">IW</span>
              </div>
              <span className="font-semibold text-lg">InternWay</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 InternWay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
