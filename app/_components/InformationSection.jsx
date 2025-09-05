"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedNumberInView from "@/components/ui/AnimatedNumberInView";
import { Users, Building2, GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const InformationSection = () => {
  const stats = [
    { icon: Users, value: "2000+", label: "Total Students", color: "from-blue-600 to-blue-700" },
    { icon: Building2, value: "125+", label: "Companies Visited", color: "from-cyan-500 to-cyan-600" },
    { icon: GraduationCap, value: "150+", label: "Students Placed", color: "from-blue-600 to-blue-700" },
    { icon: Award, value: "95%", label: "Placement Rate", color: "from-cyan-500 to-cyan-600" },
  ];

  const programs = [
    { icon: BookOpen, title: "B.Tech Programs", count: "8 Disciplines", description: "Comprehensive undergraduate engineering programs" },
    { icon: GraduationCap, title: "Postgraduate", count: "9 Courses", description: "Advanced engineering and applied sciences" },
    { icon: Award, title: "MCA Program", count: "1 Course", description: "Master of Computer Applications" },
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
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
            <Calendar className="w-4 h-4 mr-2" />
            Since 1947
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Jabalpur Engineering College
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established on July 7, 1947, JEC is Central India's oldest engineering institution. 
            We offer comprehensive B.Tech programs across eight disciplines, nine postgraduate 
            engineering courses, and MCA program, maintaining our legacy of academic excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/building.jpg"
                alt="JEC Campus"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    <AnimatedNumberInView />
                  </div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Legacy & Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As one of India's oldest engineering institutions, JEC has been at the forefront 
                of technical education for over seven decades. Our vision is to continue producing 
                world-class engineers who contribute to technological advancement and innovation.
              </p>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Academic Programs</h4>
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-2">
                    <program.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-gray-900">{program.title}</h5>
                      <span className="text-sm font-medium text-blue-600">{program.count}</span>
                    </div>
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-transparent">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InformationSection;
