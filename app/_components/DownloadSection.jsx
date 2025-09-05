"use client";
import { Facebook, Linkedin, Download, MapPin, Mail, ExternalLink, FileText, UserCheck, FileCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DownloadsSection = () => {
  const downloads = [
    {
      icon: FileText,
      title: "Official Brochure",
      description: "JEC Placement Brochure 2024-25",
      link: "assets/pdf/NEW JEC Placement Brochure 2020-21.pdf",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: UserCheck,
      title: "Registration Guide",
      description: "Step-by-step registration procedure",
      link: "assets/pdf/tpo_registration_guide.pdf",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: FileCheck,
      title: "Verification Form",
      description: "Sample verification form template",
      link: "assets/pdf/sample_verification_form.pdf",
      color: "from-blue-600 to-blue-700"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/JECJabalpur",
      color: "hover:bg-blue-600",
      iconColor: "text-blue-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/school/jabalpur-engineering-college/",
      color: "hover:bg-blue-700",
      iconColor: "text-blue-700"
    },
    {
      icon: ExternalLink,
      name: "Website",
      url: "https://www.jecjabalpur.ac.in/",
      color: "hover:bg-gray-600",
      iconColor: "text-gray-600"
    }
  ];

  return (
    <section className="py-20 bg-white" id="contact">
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
            <Download className="w-4 h-4 mr-2" />
            Resources & Contact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Downloads &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Contact Info
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access important documents, forms, and get in touch with our TPO team. 
            We're here to help you with your placement journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Downloads Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Download className="w-6 h-6 mr-3 text-blue-600" />
                Important Downloads
              </h3>
              
              <div className="space-y-6">
                {downloads.map((download, index) => (
                  <motion.a
                    key={index}
                    href={download.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group block"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-transparent">
                      <div className="flex items-center gap-4">
                        <div className={`bg-gradient-to-r ${download.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                          <download.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {download.title}
                          </h4>
                          <p className="text-sm text-gray-600">{download.description}</p>
                        </div>
                        <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact & Social Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                Visit Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-lg p-2 mt-1">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jabalpur Engineering College</h4>
                    <p className="text-gray-600">Gokalpur, Jabalpur</p>
                    <p className="text-gray-600">Madhya Pradesh, India 482011</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ExternalLink className="w-6 h-6 mr-3 text-cyan-600" />
                Connect With Us
              </h3>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${social.color} group`}
                  >
                    <div className="bg-gray-100 rounded-lg p-2 group-hover:bg-white transition-colors duration-300">
                      <social.icon className={`w-5 h-5 ${social.iconColor}`} />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300 ml-auto" />
                  </motion.a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-100 rounded-lg p-2">
                    <Mail className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Student Helpline</h4>
                    <a
                      href="mailto:tpo.student@jecjabalpur.ac.in"
                      className="text-cyan-600 hover:text-cyan-700 transition-colors duration-300"
                    >
                      tpo.student@jecjabalpur.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
