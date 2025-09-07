"use client";
import React, { useRef } from "react";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";
import { 
  GraduationCap, 
  Target, 
  Briefcase, 
  Users, 
  Network, 
  Trophy,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const featureData = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description:
        "State-of-the-art lab facilities with High Voltage Lab awarded as Centre of Excellence by Indian Govt. Over 350 computers with 100Mbps Internet facility across departments.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Target,
      title: "Employability Tests",
      description:
        "Regular assessment tests and mock interviews to prepare students for campus placements. Proven track record of improved placement statistics.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: Briefcase,
      title: "Industry Training",
      description:
        "Minimum 45 days of industry exposure through summer internships and vocational training at leading companies across India and abroad.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Expert Sessions",
      description:
        "Regular interaction sessions with industry experts and company representatives to keep students updated with latest trends and technologies.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: Network,
      title: "Alumni Network",
      description:
        "Strong alumni base from around the globe conducting workshops, seminars, and sharing experiences to guide current students.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Trophy,
      title: "Holistic Development",
      description:
        "Students excel in international conferences, Google Summer of Code, top university internships, and national sports championships.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Why Choose JEC
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Excellence in
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Engineering Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 1947, JEC is Central India&apos;s oldest engineering institute. 
            Our TPO team has been providing career-focused training since the 1970s, 
            making students industry-ready with comprehensive development programs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Engineering Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of successful engineers who started their careers at JEC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/sign-up"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

const FeatureCard = ({ icon: Icon, title, description, color, bgColor, iconColor, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Gradient Line */}
        <div className={`mt-6 h-1 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>
    </motion.div>
  );
};
