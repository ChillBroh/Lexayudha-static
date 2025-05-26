**Empowering Neurodiverse Adolescents through Adaptive Learning**

![LexAyudha Banner](public/images/lexayudha-banner.webp)

## 🧠 Project Overview

**LexAyudha** is an innovative, AI-powered learning platform designed to assist adolescents with **dyslexia** and **dyscalculia**. By combining advanced AI, NLP, emotion detection, and multisensory teaching strategies, LexAyudha provides a truly personalized and inclusive educational experience. The system adapts content dynamically based on each learner’s cognitive and emotional state to improve comprehension, engagement, and confidence.

### 🎯 Core Components

1. **🎨 Chromatic Teaching Module** – Reduces visual stress through real-time contrast and font adjustments.
2. **🧾 Adaptive Content Generator** – Simplifies sentences using a fine-tuned BERT model for individualized reading levels.
3. **😐 Emotion Detection AI** – Real-time facial analysis with Xception and MTCNN to tailor task difficulty based on emotion.
4. **🔊 Speech Pace Optimizer** – CNN-RNN model predicts ideal speech rate and delivers audio via Google TTS.
5. **🧮 Touch Math Platform** – Gamified, multisensory math learning with voice feedback and interaction tracking.

## ✨ Key Features

- **AI-Powered Personalization** – Emotion-aware, content-adaptive learning environment
- **Speech & Audio Feedback** – Real-time pronunciation and pace correction
- **Gamified Math Support** – Touch-point interaction and real-time quizzes
- **Inclusive Design** – WCAG-compliant UI with chromatic variation and font customization
- **Progress Analytics** – Emotional reports and academic insights for guardians and educators

## 🛠️ Technology Stack

### 🧠 AI & Machine Learning

- **Python** – Core language for AI modules
- **TensorFlow & Keras** – Model training for emotion and speech prediction
- **BERT (fine-tuned)** – Sentence simplification and level adaptation
- **Xception Model + MTCNN** – Real-time emotion classification
- **Hybrid CNN-RNN** – Speech pace prediction from mel spectrograms
- **Wav2Vec 2.0** – Audio temporal pattern recognition

### 🧩 Frontend Development

- **React.js** – Component-based UI
- **Tailwind CSS** – Utility-first responsive styling
- **SVG + Canvas** – Touch point math visualizations
- **React-voice-visualizer** – Speech calibration feedback

### 🧪 Backend & Architecture

- **Node.js & Express.js** – API-driven services
- **Python Flask** – ML microservices
- **MongoDB Atlas** – NoSQL cloud database
- **RabbitMQ** – Messaging queue for microservice communication
- **Docker & Kubernetes** – Containerization and orchestration

### 🔉 Data & Audio Processing

- **Librosa** – Audio processing and mel spectrogram generation
- **NLTK & SpaCy** – NLP for sentence restructuring
- **Chroma.js** – Real-time visual theme rendering

### ☁️ Cloud & DevOps

- **AWS Fargate** – Serverless backend container hosting
- **Vercel** – Frontend deployment platform
- **Firebase** – Image storage and real-time data
- **SendGrid** – Transactional and notification emails
- **Google TTS API** – Custom speech playback
- **GitHub Actions** – CI/CD pipeline
- **Git** – Version control

## 📊 Testing & Monitoring

- **Jest** – Unit testing
- **Postman & Selenium** – API and integration testing
- **Apache JMeter** – Performance and load testing
- **Prometheus & Grafana** – Monitoring and visualization

---

> Developed as part of a BSc (Hons) Software Engineering final year project at the Sri Lanka Institute of Information Technology – 2025.
> EOF

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IsuruX98/Intelligent-Eco-Urban-Monitoring-System.git
   cd Intelligent-Eco-Urban-Monitoring-System
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables in `.env.local`:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Add required assets**

   - Place team member images in `public/images/`
   - Add document PDFs in `public/documents/`
   - Add presentation PDFs in `public/presentations/`

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
IEMS-Static/
├── components/           # React components
│   ├── About.tsx        # Team information
│   ├── Contact.tsx      # Contact form and information
│   ├── Downloads.tsx    # Documents and presentations
│   ├── Hero.tsx         # Landing section
│   ├── Methodology.tsx  # Project methodology
│   ├── Milestones.tsx   # Project timeline
│   ├── Navbar.tsx       # Navigation component
│   ├── ProjectScope.tsx # Literature survey and objectives
│   └── Technologies.tsx # Technology stack
├── pages/               # Next.js pages
│   ├── _app.tsx        # App configuration
│   ├── _document.tsx   # Document structure
│   └── index.tsx       # Main page
├── public/              # Static assets
│   ├── documents/      # PDF documents
│   ├── images/         # Images and photos
│   └── presentations/  # Presentation files
├── styles/             # CSS styles
└── README.md           # Project documentation
```

## 📊 Project Milestones

- ✅ **Project Proposal** - August 23, 2024
- ✅ **Progress Presentation I** - December 8, 2024
- 🔄 **Research Paper** - February 2025
- ⏳ **Progress Presentation II** - March 2025
- ⏳ **Website Assessment** - April 2025
- ⏳ **Logbook** - April 2025
- ⏳ **Final Report** - May 2025
- ⏳ **Final Presentation & Viva** - May 26, 2025

## 👥 Team

### Supervisors

- **Rajapaksha. S.K.** - Supervisor, Department of Information Technology, SLIIT
- **Kaushika Kahatapitiya** - Co-Supervisor, Department of Information Technology, SLIIT

### Students

- **Thuduwage I.M.H.G** - Group Leader (IT21169380)
- **Kodithuwakku C.K.** - Group Member (IT21156960)
- **Arandara S.D.** - Group Member (IT21164330)
- **Karunarathne R.Y.D** - Group Member (IT21169144)

_Department of Computer Science and Software Engineering, SLIIT_

## 📚 Research Foundation

IEMS is built on comprehensive academic research covering:

- **Urban Air Quality Monitoring** - IoT-based sensor networks and ML prediction models
- **Green Space Analysis** - Remote sensing and deep learning for vegetation monitoring
- **Noise Classification** - AI-powered urban soundscape analysis
- **Vehicle Emission Reduction** - Ensemble ML models and decision-making algorithms

### Key Research Gaps Addressed

- Integrated multi-pollutant monitoring
- Actionable intelligence from complex data
- Personalized and context-aware guidance
- Real-time dynamic adaptation
- Comprehensive green space forecasting
- Behavioral change enablement for CO₂ reduction

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

### Code Quality

The project follows strict linting rules and TypeScript standards:

- ESLint configuration for React and TypeScript
- Proper entity escaping for accessibility
- Unused import detection and removal
- Consistent code formatting

## 📄 Documentation

### Available Downloads

- **Topic Assessment** - Research area and scope definition
- **Project Proposal** - Individual proposals (Google Drive)
- **Research Paper** - Academic publication (Coming Soon)
- **Final Report** - Individual project reports (Google Drive)

### Presentations

- **Project Proposal** - Initial concept presentation
- **Progress Presentation I** - Development progress showcase
- **Progress Presentation II** - Advanced functionality demo (Coming Soon)
- **Final Presentation** - Complete implementation overview (Coming Soon)

## 🤝 Contributing

We welcome collaboration opportunities, research partnerships, and inquiries about IEMS. Whether you're a researcher, environmental agency, or technology partner, we'd love to hear from you.

### Contact Information

- **Email**: isurusanju98@gmail.com
- **Phone**: +94 77 188 6641
- **Institution**: Sri Lanka Institute of Information Technology, Malabe, Sri Lanka

### Project Links

- **GitHub Repository**: [IEMS GitHub](https://github.com/IsuruX98/Intelligent-Eco-Urban-Monitoring-System)
- **Live Application**: Coming Soon

## 📜 License

This project is developed as part of academic research at Sri Lanka Institute of Information Technology (SLIIT). All documents and presentations are provided for educational and research purposes.

## 🙏 Acknowledgments

- Sri Lanka Institute of Information Technology (SLIIT)
- Department of Information Technology
- Department of Computer Science and Software Engineering
- Research supervisors and academic staff
- Environmental monitoring research community

---

**IEMS - Intelligent EcoUrban Monitoring System**  
_Pioneering a Greener, Smarter Urban Future_

For more information, visit our [project website](http://localhost:3000) or contact our team.

# Lexayudha-static
