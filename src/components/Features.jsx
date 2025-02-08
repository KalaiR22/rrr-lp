import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bg1 from '../assets/bg/feature.avif'; // Background image

const Features = () => {
  const features = [
    {
      title: 'World Building',
      description: 'Build and customize your own universe.',
      icon: '🌍',
    },
    {
      title: 'Mini-Games',
      description: 'Play and compete in various games to earn rewards.',
      icon: '🎮',
    },
    {
      title: 'NFT Marketplace',
      description: 'Trade custom-made worlds and rare in-game items.',
      icon: '🛒',
    },
    {
      title: 'AI Companion',
      description: 'Personalized interaction with your AI friend, Sophia.',
      icon: '🤖',
    },
  ];

  // Use Intersection Observer to trigger animation on scroll
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-16 relative overflow-hidden"
      id="features"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        zIndex: 1,
      }}
    >
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-black opacity-90" />

      {/* Cyberpunk Neon Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-purple-500 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500 opacity-30 blur-3xl"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 font-roboto" style={{ padding: "0 5%" }}>
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-10 tracking-wide neon-text">
          Core Features
        </h2>

        {/* Feature Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border bg-[#100a1c] bg-opacity-90 border-[#291e47] shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-neon"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-blue-400">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
