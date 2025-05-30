import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/cover.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2">
              LEXAYUDHA
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-0"></div>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-400 mb-0 sm:mb-8 font-bold">
            Every Child is Special
          </h2>
          <h3 className="text-lg sm:text-xl text-blue-400 mb-6 font-medium">
            Personalized Rehabilitation Tool For Dyslexic and Dyscalculic
            Students
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Traditional education systems often fall short in supporting
            students with learning disabilities. LexAyudha is a groundbreaking
            AI-driven platform designed to empower adolescents with dyslexia and
            dyscalculia by offering personalized, adaptive, and emotionally
            responsive learning experiences. By seamlessly integrating
            Artificial Intelligence, Emotion Detection, Natural Language
            Processing (NLP), and Multisensory Teaching, LexAyudha delivers
            real-time content customization, visual accessibility enhancements,
            personalized speech pacing, and gamified math learning. This
            holistic approach ensures learners receive the cognitive and
            emotional support they need to thrive. LexAyudha redefines inclusive
            education making learning smarter, more engaging, and truly
            accessible for every student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.a
              href="#project-scope"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
            >
              Learn More
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1tQQSo6TkhGDX9v-aOwO9-CspI1NyBMae/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-sm sm:text-base font-medium rounded-lg text-gray-300 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            >
              <FiPlay className="h-5 w-5 mr-2" />
              View Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
