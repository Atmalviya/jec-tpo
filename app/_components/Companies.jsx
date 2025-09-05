"use client";
import InfiniteSlider from "@/components/ui/InfiniteSlider";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const Companies = () => {
  // Mock company data - in a real app, this would come from an API
  const companies = [
    { name: "TCS", logo: "/building.jpg" },
    { name: "Infosys", logo: "/building.jpg" },
    { name: "Wipro", logo: "/building.jpg" },
    { name: "Accenture", logo: "/building.jpg" },
    { name: "Cognizant", logo: "/building.jpg" },
    { name: "IBM", logo: "/building.jpg" },
    { name: "Microsoft", logo: "/building.jpg" },
    { name: "Google", logo: "/building.jpg" },
    { name: "Amazon", logo: "/building.jpg" },
    { name: "Adobe", logo: "/building.jpg" },
  ];

  const stats = [
    { icon: Building2, value: "125+", label: "Companies Visited" },
    { icon: Users, value: "150+", label: "Students Placed" },
    { icon: TrendingUp, value: "95%", label: "Placement Rate" },
    { icon: Award, value: "₹12L", label: "Highest Package" },
  ];

  return (
    <section className="py-20 bg-white" id="companies">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Our Partners
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 125+ top-tier companies have visited our campus for placements, 
            recognizing the quality of our engineering graduates and the comprehensive 
            training provided by our TPO team.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Our Recruiting Partners
            </h3>
            
            {/* First Row */}
            <InfiniteSlider gap={32} reverse className="mb-8">
              {companies.slice(0, 6).map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <Image
                      height={80}
                      width={120}
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            {/* Second Row */}
            <InfiniteSlider gap={32} className="opacity-75">
              {companies.slice(6).map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <Image
                      height={80}
                      width={120}
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Recruit from JEC?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our network of recruiting partners and discover exceptional engineering talent
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Partner with Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
