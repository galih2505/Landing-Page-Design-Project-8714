import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiCpu, FiGlobe } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols ensure your data is protected with military-level encryption.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: FiTrendingUp,
      title: 'Scalable Growth',
      description: 'Scale seamlessly from startup to enterprise with our flexible, cloud-native architecture.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Empower your team with real-time collaboration tools and integrated workflow management.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FiCpu,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate workflows and make data-driven decisions.',
      color: 'from-indigo-400 to-blue-500',
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Connect with customers worldwide through our global CDN and multi-region deployment.',
      color: 'from-teal-400 to-green-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, scale, and optimize your digital presence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;