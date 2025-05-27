import { motion } from "framer-motion";
import {
  DocumentMagnifyingGlassIcon,
  PuzzlePieceIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const methodologySteps = [
  {
    title: "Phase 1: Requirements Gathering & System Analysis",
    icon: DocumentMagnifyingGlassIcon,
    description:
      "Conducted literature review, stakeholder interviews (educators, parents), and defined functional requirements. Designed system use cases focusing on adaptive learning for dyslexia and dyscalculia.",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Phase 2: System Design & Technology Selection",
    icon: PuzzlePieceIcon,
    description:
      "Designed modular microservices architecture, wireframes, and selected tech stack including React.js, MongoDB Atlas, Node.js, and NLP APIs. Emphasis on scalability, accessibility, and personalization.",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Phase 3: Implementation & Integration",
    icon: CpuChipIcon,
    description:
      "Built frontend in React.js with SVG-based gamification and dynamic UIs. Backend developed in Node.js with Express.js. Integrated speech modules (TTS/STT), emotion detection (Xception, MTCNN), and AI-based adaptive learning engine.",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Phase 4: Testing, Deployment & Refinement",
    icon: WrenchScrewdriverIcon,
    description:
      "Conducted unit and integration testing (Jest, Selenium), load testing (JMeter), and UAT with dyslexic learners. Hosted on AWS with Docker/Kubernetes. Features refined through SUS surveys and feedback loops.",
    color: "from-orange-500 to-orange-600",
  },
];

const systemComponents = [
  {
    component: "Chromatic Variation Engine",
    description:
      "Dynamic color theme adjustments based on visual stress reduction principles using Chroma.js and real-time personalization. Supports WCAG-compliant themes.",
    technologies: ["Chroma.js", "JavaScript", "React.js", "SVG", "WCAG"],
  },
  {
    component: "Emotion Detection Module",
    description:
      "Real-time face detection with MTCNN and emotion classification with Xception. Custom algorithm translates facial expressions into frustration, distraction, or engagement cues.SendGrid to send Reports to Guardian",
    technologies: [
      "MTCNN",
      "Xception",
      "FER-2013",
      "TensorFlow",
      "Keras",
      "SendGrid",
    ],
  },
  {
    component: "Personalized Speech Pace",
    description:
      "Hybrid CNN-RNN (VGG16 + Wav2Vec 2.0) predicts optimal speech pace from mel spectrograms and raw audio. Integrated with Google TTS API for real-time, user-specific audio output.",
    technologies: [
      "VGG16",
      "Wav2Vec 2.0",
      "Librosa",
      "Google TTS",
      "MongoDB Atlas",
    ],
  },
  {
    component: "Touch Math - Multisensory Learning",
    description:
      "Touch Math-based learning using interactive SVGs, gamified activities, and voice-to-text feedback for arithmetic practice. Adaptive quizzes enhance personalization.",
    technologies: ["React.js", "SVG", "Voice-to-Text", "Gamification"],
  },
  {
    component: "Adaptive Backend Services",
    description:
      "Microservices architecture using Node.js and Express.js with Docker and Kubernetes for scalability. Integrates MongoDB Atlas and NLP-based text generation.",
    technologies: [
      "Node.js",
      "Express.js",
      "Docker",
      "AWS ECS & Fargate",
      "MongoDB Atlas",
    ],
  },
  {
    component: "Interactive Frontend Platform",
    description:
      "Responsive React.js frontend with dynamic dashboards, chromatic variations, and accessibility-first design. Hosted on Vercel for performance.",
    technologies: ["React.js", "Tailwind CSS", "Vercel", "Axios", "Jest"],
  },
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="py-12 sm:py-16 md:py-2 bg-zinc-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Methodology
            </h2>
            <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
          </div>

          {/* System Architecture Overview */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
              Building LexAyudha Systematically
            </h3>
            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                The LexAyudha platform was developed through a rigorous,
                multi-phase methodology, combining academic research,
                stakeholder collaboration, and iterative development. This
                structured approach enabled the seamless integration of
                AI-powered modules for chromatic variation, emotion detection,
                personalized speech pacing, and multisensory learning. By
                prioritizing inclusivity, adaptability, and user engagement,
                LexAyudha delivers a transformative learning experience tailored
                specifically to the cognitive and emotional needs of
                neurodiverse adolescents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-lg blur opacity-25`}
                  ></div>
                  <div className="relative bg-white/5 p-6 rounded-lg border border-white/10 h-full">
                    <div className="flex items-center mb-4">
                      <step.icon className="h-8 w-8 text-white mr-3" />
                      <h4 className="text-lg font-semibold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Components */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
              LEXAYUDHA Component Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-lg border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {component.component}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
              Methodology Achievements
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Development Strategy
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300 text-sm">
                      Agile SDLC with iterative refinement and user-centered
                      feedback loops
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300 text-sm">
                      Microservices architecture enabling modular, scalable
                      backend services
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300 text-sm">
                      Comprehensive testing: unit, integration, performance, and
                      UAT
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  AI-Powered Innovations
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300 text-sm">
                      Real-time emotion detection using Xception and MTCNN for
                      adaptive learning
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300 text-sm">
                      Personalized speech pace prediction via hybrid CNN-RNN and
                      mel spectrogram analysis
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300 text-sm">
                      AI-driven sentence generation using fine-tuned BERT and
                      NLP for content simplification
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300 text-sm">
                      Gamified Touch Math module with speech recognition for
                      dyscalculia support
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-green-500/10 p-6 rounded-lg border border-green-500/20">
              <h4 className="text-green-400 font-semibold mb-2">
                Systematic Impact
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Through rigorous testing, agile iteration, and AI innovation,
                LexAyudha has emerged as a transformative, inclusive platform
                for adolescents with dyslexia and dyscalculia—delivering
                personalized, adaptive, and emotionally intelligent learning
                experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
