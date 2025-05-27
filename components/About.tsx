import { motion } from "framer-motion";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const teamMembers = [
  {
    name: "Prof Samantha Thelijjagoda",
    role: "Supervisor",
    department: "Department of Computer Systems and Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "samantha.r@sliit.lk",
    image: "/images/samantha.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Dr. Junius Anjana",
    role: "Co-Supervisor",
    department: "Department of Information Technology",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "kaushika.k@sliit.lk",
    image: "/images/anjana.png",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Silva T.U.D",
    role: "Group Leader",
    department: "Dept. of Computer Science and Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "it21318320@my.sliit.lk",
    image: "/images/umesha.png",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Madusanka G.K.I",
    role: "Group Member",
    department: "Dept. of Computer Science and Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "it211899440@my.sliit.lk",
    image: "/images/ishara.png",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Thalangama T.P",
    role: "Group Member",
    department: "Dept. of Computer Science and Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "it21223594@my.sliit.lk",
    image: "/images/thathsara.png",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Dissanayake M.G.T.W",
    role: "Group Member",
    department: "Dept. of Computer Science and Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "it21319174@my.sliit.lk",
    image: "/images/tharushi.png",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About Us
            </h2>
            <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
          </div>

          {/* Project Overview */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
                Meet Our Team!
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-center">
                LexAyudha is developed by a multidisciplinary team from the Sri
                Lanka Institute of Information Technology (SLIIT), specializing
                in Software Engineering, Artificial Intelligence, and
                Human-Centered Computing. Our team is driven by a shared vision
                to enhance inclusive education through the integration of
                advanced technologies and empathetic design. Under the
                mentorship of leading academic supervisors and driven by a
                passion for social impact, we have designed and developed an
                AI-powered personalized learning platform aimed at supporting
                adolescents with dyslexia and dyscalculia. By combining
                cutting-edge innovations in AI, emotion recognition, NLP, and
                multisensory learning, LexAyudha provides real-time, adaptive
                educational support that fosters both cognitive development and
                emotional well-being. Our goal is to bridge the learning gap for
                neurodiverse students, promoting accessibility, engagement, and
                academic growth in diverse educational environments.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center">
                Under the guidance of experienced supervisors and led by
                passionate students, we are developing cutting-edge technology
                that enables real-time environmental monitoring, predictive
                analytics, and intelligent decision-making systems for
                sustainable urban development.
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
              Our Team
            </h3>
            <div className="space-y-8">
              {/* First row - Supervisors (2 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
                {teamMembers.slice(0, 2).map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`}
                    ></div>
                    <div className="relative bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 h-full">
                      <div className="text-center mb-4">
                        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-white/20 mb-4">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              target.nextElementSibling?.classList.remove(
                                "hidden"
                              );
                            }}
                          />
                          <div className="hidden w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                            <UserGroupIcon className="h-10 w-10 text-gray-400" />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-white">
                          {member.name}
                        </h4>
                        <p className="text-sm text-blue-400 mb-1">
                          {member.role}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {member.department}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {member.institution}
                        </p>
                        <p className="text-xs text-gray-400 mb-2">
                          {member.location}
                        </p>
                        <p className="text-xs text-blue-300 break-all">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Second row - Students (4 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.slice(2).map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300`}
                    ></div>
                    <div className="relative bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 h-full">
                      <div className="text-center mb-4">
                        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-white/20 mb-4">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              target.nextElementSibling?.classList.remove(
                                "hidden"
                              );
                            }}
                          />
                          <div className="hidden w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                            <UserGroupIcon className="h-10 w-10 text-gray-400" />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-white">
                          {member.name}
                        </h4>
                        <p className="text-sm text-blue-400 mb-1">
                          {member.role}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {member.department}
                        </p>
                        <p className="text-xs text-gray-400 mb-1">
                          {member.institution}
                        </p>
                        <p className="text-xs text-gray-400 mb-2">
                          {member.location}
                        </p>
                        <p className="text-xs text-blue-300 break-all">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          {/* <div>
            <div className="flex items-center justify-center mb-8">
              <AcademicCapIcon className="h-8 w-8 text-yellow-400 mr-4" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Achievements
              </h3>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-lg border border-white/10">
              <p className="text-gray-300 mb-6 text-center text-lg">
                We are proud of our academic achievements and technical
                contributions to environmental monitoring:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
