import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

const literatureSurvey = [
  {
    title: "Chromatic Variation for Dyslexia",
    content:
      "Studies highlight that dyslexic individuals experience visual stress, making reading traditional black-on-white content difficult. Research recommends chromatic pairings like pale yellow on dark blue for improved readability. While effective, most platforms lack dynamic chromatic adaptation. LexAyudha addresses this gap with real-time, AI-driven chromatic adjustments to minimize visual stress and enhance engagement.",
  },
  {
    title: "Emotion Detection in Learning",
    content:
      "Emotion-aware adaptive systems are crucial in education, especially for learners with dyslexia and dyscalculia who face 20–30% more stress. Research supports facial expression recognition using CNNs like Xception. LexAyudha applies this through real-time emotion detection, adjusting task complexity based on frustration, distraction, or engagement signals, creating a more responsive learning environment.",
  },
  {
    title: "Personalized Speech Pace Adjustment",
    content:
      "Speech comprehension challenges in dyslexic learners are well documented. Existing tools offer manual rate control but lack AI-driven personalization. LexAyudha uses a hybrid CNN-RNN model on mel spectrograms to predict optimal speech pace, delivering tailored audio via Google TTS, enhancing understanding and reducing cognitive load.",
  },
  {
    title: "Multisensory Learning for Dyscalculia (Touch Math)",
    content:
      "Touch Math is a multisensory method proven effective in teaching arithmetic to dyscalculic learners. Digital adaptations are limited and often non-interactive. LexAyudha bridges this with a gamified platform combining visual, tactile, and auditory cues integrating real-time speech feedback and adaptive content for personalized math learning.",
  },
];

const researchGaps = [
  "Lack of Real-Time Visual Personalization: Most tools use fixed or manually chosen color schemes without dynamic chromatic variation tailored to dyslexic readers.",
  "Limited Emotion-Responsive Systems: While emotion detection is advancing, few systems translate emotional data into actionable learning adjustments or reports for parents and educators.",
  "Absence of AI-Driven Speech Pacing: Current TTS tools do not use deep learning to predict optimal speech pace based on individual comprehension needs.",
  "Ineffective Digital Tools for Dyscalculia: Existing platforms rarely combine gamification, real-time speech feedback, and adaptive learning in multisensory math teaching.",
  "Disconnected Cognitive and Emotional Adaptation: Few platforms holistically integrate emotion, visual comfort, and content difficulty into one cohesive, responsive learning experience.",
  "Lack of Guardian Feedback Loops: Current tools often ignore the potential of emotional progress reports to support at-home learning alignment.",
];

const researchObjectives = [
  {
    title: "Chromatic Variation Engine",
    description:
      "Develop a real-time chromatic variation module that adapts font, background, and contrast dynamically to reduce visual stress and enhance readability for dyslexic learners using Chroma.js and visual stress datasets.",
  },
  {
    title: "Emotion-Aware Learning",
    description:
      "Implement real-time facial emotion recognition using MTCNN and Xception to detect frustration, distraction, and engagement. Dynamically adjust learning tasks and generate guardian reports to foster emotionally aware, adaptive learning.",
  },
  {
    title: "Personalized Speech Comprehension",
    description:
      "Use CNN-RNN models on mel spectrograms for speech pace prediction. Integrate with Google TTS to deliver personalized, pace-optimized audio for dyslexic adolescents to improve auditory comprehension.",
  },
  {
    title: "Gamified Multisensory Math Learning",
    description:
      "Design an interactive web platform using the Touch Math method. Combine visual-tactile number interactions with gamification, real-time speech recognition, and adaptive quizzes for dyscalculic students.",
  },
];

export default function ProjectScope() {
  return (
    <section id="project-scope" className="py-12 sm:py-16 md:py-2 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Project Scope
            </h2>
            <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full"></div>
          </div>

          {/* Literature Survey */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <ChartBarIcon className="h-8 w-8 text-blue-400 mr-4" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Literature Survey
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {literatureSurvey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-lg border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* References */}
            <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-blue-400 font-semibold mb-4">References</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>
                  [1] E. M. H. De Saram et al., “Walipilla: Mobile-based
                  screening and refinement system to identify the risk of
                  reading weaknesses due to dyslexia,” in{" "}
                  <em>Int. Conf. Adv. Comput. Technol. Appl. (ICACTA)</em>,
                  2023.
                </p>
                <p>
                  [2] British Dyslexia Association, “About dyscalculia - British
                  Dyslexia Association.” [Online]. Available:
                  https://www.bdadyslexia.org.uk/dyscalculia/how-can-i-identify-dyscalculia
                </p>
                <p>
                  [3] Ministry of Education, Annual School Census Final Report
                  2022, Sri Lanka, Jun. 2024. [Online]. Available:
                  https://moe.gov.lk/wp-content/uploads/2024/06/07/Annual_School_Census_Final_Report_2022_V3.pdf
                </p>
                <p>
                  [4] “COE - Students with Disabilities.” [Online]. Available:
                  https://nces.ed.gov/programs/coe/indicator/cgg/students-with-disabilities
                </p>
                <p>
                  [5] S. Rajapakse et al., “ALEXZA: A mobile application for
                  dyslexics utilizing artificial intelligence and machine
                  learning concepts,” in{" "}
                  <em>3rd Int. Conf. Inf. Technol. Res. (ICITR)</em>, Moratuwa,
                  Sri Lanka, 2018.
                </p>
                <p>
                  [6] J. P. Cardona et al., “Remedial Training with Learning
                  Objects to Reduce Dyslexia in Children,” <em>IEEE</em>, Oct.
                  2019. doi: 10.1109/contie49246.2019.00022.
                </p>
                <p>
                  [7] W. Canfield, “ALEKS: a Web-based intelligent tutoring
                  system,” <em>Int. J. Artif. Intell. Educ.</em>, vol. 35, no.
                  2, pp. 152–158, Jun. 2001.
                </p>
                <p>
                  [8] B. Pinna and K. Deiana, “On the Role of Color in Reading
                  and Comprehension Tasks in Dyslexic Children and Adults,”{" "}
                  <em>i-Perception</em>, vol. 9, no. 3, 2018. doi:
                  10.1177/2041669518779098.
                </p>
                <p>
                  [9] British Dyslexia Association, “British Dyslexia
                  Association.” [Online]. Available:
                  https://www.bdadyslexia.org.uk/
                </p>
              </div>
            </div>
          </div>

          {/* Research Gap */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <ExclamationTriangleIcon className="h-8 w-8 text-orange-400 mr-4" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Research Gap
              </h3>
            </div>
            <div className="bg-white/5 p-6 sm:p-8 rounded-lg border border-white/10">
              <p className="text-gray-300 mb-6 text-lg">
                Following areas are the research gaps found in most of the
                recent environmental monitoring systems:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {researchGaps.map((gap, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{gap}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Problem & Solution */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <LightBulbIcon className="h-8 w-8 text-yellow-400 mr-4" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Research Problem & Solution
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-red-500/10 p-6 sm:p-8 rounded-lg border border-red-500/20">
                <h4 className="text-xl font-bold text-red-400 mb-4">
                  The Problem
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Students with dyslexia and dyscalculia face significant
                  cognitive, sensory, and emotional barriers in traditional
                  educational settings. Visual stress, slow speech
                  comprehension, emotional distress, and a lack of personalized,
                  adaptive support tools hinder their academic performance and
                  engagement. Existing learning platforms often provide static
                  content and fail to address these multifaceted challenges in a
                  cohesive, real-time manner.
                </p>
              </div>
              <div className="bg-green-500/10 p-6 sm:p-8 rounded-lg border border-green-500/20">
                <h4 className="text-xl font-bold text-green-400 mb-4">
                  Our Solution: LexAyudha – An AI-Driven Learning Companion
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  LexAyudha is an intelligent, emotion-aware learning platform
                  that unifies adaptive educational technologies to deliver a
                  personalized, inclusive, and responsive experience for
                  neurodiverse adolescents through these integrated AI-powered
                  components:
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="text-blue-400 font-semibold">
                      <li></li>
                    </span>
                    <span className="text-gray-300">
                      {" "}
                      Chromatic variation module with real-time font and
                      background adjustments to minimize visual stress and
                      improve readability for dyslexic learners
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 font-semibold">
                      <li></li>
                    </span>
                    <span className="text-gray-300">
                      {" "}
                      Emotion detection using MTCNN and Xception models to adapt
                      learning difficulty based on real-time facial expression
                      feedback (frustration, distraction, engagement)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-400 font-semibold">
                      <li></li>
                    </span>
                    <span className="text-gray-300">
                      Hybrid CNN-RNN models analyze mel spectrograms to predict
                      personalized speech pace and generate TTS audio tailored
                      to each learner&apos;s comprehension needs
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-pink-400 font-semibold">
                      <li></li>
                    </span>
                    <span className="text-gray-300">
                      Gamified multisensory learning platform based on the Touch
                      Math method, integrating visual, auditory, and tactile
                      feedback for improving number sense and arithmetic skills
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Objectives */}
          <div>
            <div className="flex items-center mb-8">
              <FlagIcon className="h-8 w-8 text-purple-400 mr-4" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Research Objectives
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-lg border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {objective.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {objective.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
