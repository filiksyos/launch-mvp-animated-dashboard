"use client";

import { TypewriterEffect } from '@/components/TypewriterEffect';
import { PricingSection } from '@/components/PricingSection';
import { FaGithub, FaDiscord, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Lock, CreditCard, Moon, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Link as ScrollLink } from 'react-scroll';

const workflowSteps = [
  {
    title: "Modern Design",
    description: "Beautiful, responsive UI components",
  },
  {
    title: "Dark Mode",
    description: "Seamless theme switching",
  },
  {
    title: "Animations",
    description: "Smooth Framer Motion effects",
  },
  {
    title: "Dashboard",
    description: "Feature-rich user dashboard",
  }
];

const workflowSections = [
  {
    id: "overview",
    title: "Overview",
    description: "Everything you need to build modern web applications",
  },
  {
    id: "features",
    title: "Features",
    description: "Powerful features for your next project",
    metrics: [
      { label: "Components", value: "15+" },
      { label: "Setup Time", value: "5min" },
      { label: "TypeScript", value: "100%" }
    ]
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Simple, transparent pricing",
  }
];

const featureCards = [
  {
    title: "Beautiful UI",
    description: "Modern, responsive design components",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    bgGradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "Dark Mode",
    description: "Built-in theme management",
    icon: <Moon className="h-6 w-6 text-primary" />,
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "Animations",
    description: "Smooth Framer Motion effects",
    icon: <Zap className="h-6 w-6 text-primary" />,
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    title: "Type Safe",
    description: "Full TypeScript support",
    icon: <Shield className="h-6 w-6 text-primary" />,
    bgGradient: "from-green-500/10 to-emerald-500/10"
  }
];

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const router = useRouter();
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] relative">
      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-40 bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 overflow-x-auto hide-scrollbar">
            {workflowSections.map((section, index) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
                className="flex items-center cursor-pointer group min-w-fit mx-4 first:ml-0 last:mr-0"
              >
                <div className="relative">
                  <span 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 transition-all duration-300
                      ${activeSection === section.id 
                      ? 'bg-primary dark:bg-primary-light text-white' 
                      : 'bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20'}`}
                  >
                    {index + 1}
                  </span>
                </div>
                <span 
                  className={`text-sm font-medium transition-colors duration-300 hidden md:block whitespace-nowrap
                    ${activeSection === section.id 
                    ? 'text-primary dark:text-primary-light' 
                    : 'text-slate-600 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-primary-light'}`}
                >
                  {section.title}
                </span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-20 pb-16 sm:pb-24">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white"
              >
                <span className="block">Next.js Animated Dashboard</span>
                <span className="block text-primary dark:text-primary-light">MVP Template</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
              >
                Start building with beautiful animations and dark mode in minutes.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 flex gap-4 justify-center"
              >
                <button 
                  onClick={() => router.push('/dashboard')} 
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Dashboard
                </button>
                <a
                  href="https://github.com/filiksyos/launch-mvp-animated-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <FaGithub /> View on GitHub
                </a>
              </motion.div>
            </div>

            {/* Combined Preview */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Code Preview */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <pre className="relative rounded-xl bg-slate-900 p-8 shadow-2xl overflow-x-auto">
                  <code className="text-sm sm:text-base text-slate-100">
                    <TypewriterEffect text={`// 🚀 Quick Start Example
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="dark:bg-slate-900"
    >
      <h1>Welcome! 🎉</h1>
    </motion.div>
  );
}`} />
                  </code>
                </pre>
              </motion.div>

              {/* Workflow Steps */}
              <div className="grid grid-cols-1 gap-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative p-4 bg-white/5 dark:bg-neutral-dark border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary dark:bg-primary-light text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="ml-8">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        id="features"
        ref={featuresRef}
        className="py-20 bg-white dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("features")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Features
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Powerful features for your next project
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featureCards.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-xl bg-gradient-to-br ${feature.bgGradient} border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {workflowSections[1].metrics?.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="py-20 bg-slate-50 dark:bg-[#0B1120]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        onViewportEnter={() => setActiveSection("pricing")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Simple, transparent pricing
            </p>
          </div>
          <PricingSection />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-neutral-dark rounded-xl shadow-xl p-12 border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Build your next project with our beautiful template
              </p>
              
              <div className="mt-10 flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/dashboard')}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Dashboard
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://github.com/filiksyos/launch-mvp-animated-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <FaGithub /> Star on GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}