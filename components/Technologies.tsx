import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const technologyCategories = [
  {
    category: "AI & Machine Learning",
    icon: CpuChipIcon,
    technologies: [
      {
        name: "Python",
        icon: FaPython,
        description: "Primary language for AI model development",
      },
      {
        name: "TensorFlow & Keras",
        icon: SiTensorflow,
        description: "Used for CNN and RNN model implementation",
      },
      {
        name: "BERT",
        icon: null,
        description: "Fine-tuned for adaptive sentence generation",
      },
      {
        name: "Xception Model",
        icon: null,
        description:
          "Emotion detection through facial expression classification",
      },
      {
        name: "Hybrid CNN-RNN",
        icon: null,
        description: "Speech pace prediction from mel spectrograms",
      },
      {
        name: "Wav2Vec 2.0",
        icon: null,
        description: "Temporal pattern recognition from audio waveforms",
      },
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    category: "Frontend Development",
    icon: CodeBracketIcon,
    technologies: [
      {
        name: "React.js",
        icon: FaReact,
        description: "Frontend framework for UI rendering",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description: "Utility-first styling for accessibility",
      },
      {
        name: "SVG",
        icon: null,
        description: "Touch point rendering in dyscalculia activities",
      },
      {
        name: "React-voice-visualizer",
        icon: null,
        description: "Visual feedback for speech calibration",
      },
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    category: "Backend & Architecture",
    icon: ServerIcon,
    technologies: [
      {
        name: "Node.js & Express.js",
        icon: FaNodeJs,
        description: "RESTful backend services",
      },
      {
        name: "Python Flask",
        icon: FaPython,
        description: "Microservices for model serving",
      },
      {
        name: "MongoDB Atlas",
        icon: SiMongodb,
        description: "Cloud database for adaptive learning data",
      },
      {
        name: "Docker & Kubernetes",
        icon: FaDocker,
        description: "Microservices containerization and orchestration",
      },
    ],
    color: "from-green-500 to-green-600",
  },
  {
    category: "Data & Audio Processing",
    icon: CommandLineIcon,
    technologies: [
      {
        name: "Librosa",
        icon: null,
        description: "Mel spectrogram generation from audio",
      },
      {
        name: "NLTK & SpaCy",
        icon: null,
        description: "Text simplification and NLP processing",
      },
      {
        name: "Chroma.js",
        icon: null,
        description: "Real-time rendering of chromatic variation themes",
      },
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    category: "Cloud & Deployment",
    icon: CloudIcon,
    technologies: [
      {
        name: "AWS Fargate",
        icon: FaAws,
        description: "Serverless backend container hosting",
      },
      { name: "Vercel", icon: null, description: "Frontend React app hosting" },
      {
        name: "SendGrid",
        icon: null,
        description: "Transactional and notification email service",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        description: "Image storage and real-time sync",
      },
      {
        name: "Google TTS",
        icon: null,
        description: "AI-based text-to-speech audio output",
      },
      {
        name: "RabbitMQ",
        icon: null,
        description: "Microservices messaging queue",
      },
      {
        name: "Docker",
        icon: FaDocker,
        description: "Containerization of backend services",
      },
      {
        name: "GitHub Actions",
        icon: null,
        description: "CI/CD automation and deployment pipeline",
      },
      {
        name: "Git",
        icon: FaGitAlt,
        description: "Version control system for codebase",
      },
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    category: "Testing & Monitoring",
    icon: DevicePhoneMobileIcon,
    technologies: [
      {
        name: "Jest",
        icon: null,
        description: "Unit testing for core modules",
      },
      {
        name: "Selenium & Postman",
        icon: null,
        description: "Integration and API testing",
      },
      {
        name: "Apache JMeter",
        icon: null,
        description: "Performance and load testing",
      },
      {
        name: "Prometheus & Grafana",
        icon: null,
        description: "System monitoring and logging",
      },
    ],
    color: "from-red-500 to-red-600",
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technologies Powering LexAyudha
            </h2>
            <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              LexAyudha is driven by a robust, AI-first technology stack
              designed to deliver personalized, emotionally adaptive, and
              inclusive learning experiences for adolescents with dyslexia and
              dyscalculia. From real-time emotion detection to AI-enhanced
              speech and multisensory interaction, each component ensures
              responsiveness, scalability, and educational impact.
            </p>
          </div>

          {/* Technology Categories */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`}
                  ></div>
                  <div className="relative bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 h-full">
                    <div className="flex items-center mb-4">
                      <category.icon className="h-6 w-6 text-white mr-3" />
                      <h3 className="text-lg font-semibold text-white">
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center">
                          {tech.icon && (
                            <tech.icon className="h-5 w-5 text-gray-300 mr-3" />
                          )}
                          {!tech.icon && (
                            <div className="w-5 h-5 bg-gray-600 rounded mr-3"></div>
                          )}
                          <div>
                            <p className="text-white font-medium text-sm">
                              {tech.name}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
