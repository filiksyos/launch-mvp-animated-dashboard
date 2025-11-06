"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Users, TrendingUp, Activity, Zap, Star, Award, Target } from 'lucide-react';

const stats = [
  {
    title: "Total Users",
    value: "12,543",
    change: "+12.5%",
    icon: <Users className="h-6 w-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Revenue",
    value: "$45,678",
    change: "+23.1%",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Active Sessions",
    value: "3,456",
    change: "+8.3%",
    icon: <Activity className="h-6 w-6" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+1.2%",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "from-orange-500 to-orange-600",
  },
];

const activities = [
  { icon: <Zap className="h-5 w-5" />, title: "New feature launched", time: "2 hours ago", color: "bg-blue-500" },
  { icon: <Star className="h-5 w-5" />, title: "Reached 10k users milestone", time: "5 hours ago", color: "bg-yellow-500" },
  { icon: <Award className="h-5 w-5" />, title: "Featured on Product Hunt", time: "1 day ago", color: "bg-purple-500" },
  { icon: <Target className="h-5 w-5" />, title: "Achieved quarterly goal", time: "2 days ago", color: "bg-green-500" },
];

const quickActions = [
  { title: "New Project", description: "Start a new project", color: "bg-blue-500" },
  { title: "Add Team Member", description: "Invite a colleague", color: "bg-green-500" },
  { title: "View Analytics", description: "Check your stats", color: "bg-purple-500" },
  { title: "Settings", description: "Configure your account", color: "bg-orange-500" },
];

export default function Dashboard() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activityRef, activityInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Here's what's happening with your projects today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white dark:bg-neutral-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            ref={activityRef}
            initial={{ opacity: 0, x: -20 }}
            animate={activityInView ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-2 bg-white dark:bg-neutral-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={activityInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-neutral-darker transition-colors"
                >
                  <div className={`${activity.color} p-2 rounded-lg text-white shrink-0`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={activityInView ? { opacity: 1, x: 0 } : {}}
            className="bg-white dark:bg-neutral-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={activityInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-4 rounded-lg bg-slate-50 dark:bg-neutral-darker hover:bg-slate-100 dark:hover:bg-neutral border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${action.color}`}></div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {action.title}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-white dark:bg-neutral-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Performance Overview
          </h2>
          <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-neutral-darker rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-500 dark:text-slate-400">Chart component placeholder</p>
              <p className="text-sm text-slate-400 dark:text-slate-500">Add your favorite charting library</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}