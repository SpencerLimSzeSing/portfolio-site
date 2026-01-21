
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'crop-yield',
    title: 'Crop Yield Prediction',
    description: 'Machine learning model to identify key drivers of global crop yield and to forecast yields across different locations and crop types.',
    tags: ['Python', 'Machine Learning', 'Crop Yield', 'Scikit-Learn'],
    category: 'MACHINE LEARNING',
    image: 'https://plus.unsplash.com/premium_photo-1722899516572-409bf979e5d6?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stars: 124,
    forks: 32,
    language: 'Python',
    color: '#3572A5',
    detailedInsights: 'Built a predictive model using environmental factors such as rainfall, and temperature indicators to estimate crop yield, enabling early assessment of climate impact and supporting proactive decision-making for food security.',
    repoUrl: 'https://github.com/SpencerLimSzeSing/crop-yield-predition'
  },
  {
    id: 'fraud-job',
    title: 'Fraudulent Job Prediction',
    description: 'Machine learning and NLP-based system to detect fraudulent online job postings using structured metadata and text analysis.',
    tags: [
      'Python',
      'Scikit-learn',
      'NLP',
      'TF-IDF',
      'Random Forest',
      'Streamlit'
    ],
    category: 'MACHINE LEARNING',
    image: 'https://images.unsplash.com/photo-1702918883534-9b26c19904ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stars: 89,
    forks: 15,
    language: 'Python',
    color: '#3572A5',
    detailedInsights: 'Achieved 99.95% accuracy in detecting fraudulent job postings by combining TF-IDF text features with structured job metadata. Tree-based models significantly outperformed linear classifiers, demonstrating strong non-linear relationships in recruitment fraud patterns. The final Random Forest model was deployed via Streamlit for real-time prediction.',
    repoUrl: 'https://github.com/SpencerLimSzeSing/fraudulent-job-prediction'
  },
  {
    id: 'rainfall-prediction',
    title: 'Daily Rainfall Prediction Using Deep Learning',
    description: 'ANN and ensemble learning–based model for predicting daily rainfall categories using meteorological data in arid regions.',
    tags: [
      'Python',
      'Keras',
      'TensorFlow',
      'ANN',
      'Ensemble Learning',
      'Stacking',
      'Scikit-learn'
    ],
    category: 'DEEP LEARNING',
    image: 'https://images.unsplash.com/photo-1622987857832-a31ceda6ad0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stars: 210,
    forks: 45,
    language: 'Python',
    color: '#3572A5',
    detailedInsights:
      'Developed an ANN-based stacking ensemble to classify daily rainfall intensity in arid regions. Addressed severe class imbalance using SMOTE and improved predictive robustness by combining KNN-ANN, RF-ANN, and XGB-ANN models, achieving strong performance across minority rainfall classes.',
    repoUrl: 'https://github.com/spencer-lim/daily-rainfall-prediction'
  },
  {
    id: 'montage-image',
    title: 'Astronomical Image Montage Pipeline',
    description: 'Automated image mosaicking pipeline for generating high-quality astronomical montages using workflow scripting.',
    tags: [
      'Python',
      'Bash',
      'Image Processing',
      'Workflow Automation',
      'Montage',
      'Scientific Computing'
    ],
    category: 'DATA ENGINEERING',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop',
    stars: 120,
    forks: 28,
    language: 'Python',
    color: '#3572A5',
    detailedInsights:
      'Built an automated end-to-end montage workflow to reproject, align, and merge astronomical FITS images into seamless mosaics. The pipeline modularized preprocessing, reprojection, and color composition steps, improving reproducibility and reducing manual processing effort for large-scale scientific imaging tasks.',
    repoUrl: 'https://github.com/spencer-lim/montage-image-pipeline'
  }
];

export const SKILL_GROUPS = [
  {
    title: 'Machine Learning & Data Analytics',
    icon: 'fas fa-brain',
    skills: [
      'Feature Engineering',
      'Dimensionality Reduction',
      'Clustering',
      'Statistical Modeling', 
      'Data Visualization',
      'Artificial Neural Networks (ANN)',
      'Ensemble Learning'

    ]
  },
  {
    title: 'Programming',
    icon: 'fas fa-code',
    skills: [
      'Python',
      'SQL',
      'R',
      'HTML & CSS',
      'CI/CD with GitHub Actions'

    ]
  },
  {
    title: 'Tools',
    icon: 'fas fa-flask',
    skills: [
      'Git',
      'Tableau',
      'Power BI',
      'Streamlit'
    ]
  },
  {
    title: 'Project & Communication Skills',
    icon: 'fas fa-users',
    skills: [
      'Data-Driven Stakeholder Reporting',
      'Cross-Functional Collaboration',
      'Project Planning & Execution',
      'Multilingual Communication'
    ]
  }
];


export const EXPERIENCES: Experience[] = [
  {
    company: 'Accenture PLC',
    role: 'Business Advisory Associate',
    period: 'July 2024 – Present',
    description: [
      'Processed 40+ daily content pieces in English and Mandarin, maintaining a 98%+ accuracy rate per Trust & Safety guidelines.',
      'Ensured 100% compliance with evolving community policies and workflows.',
      'Identified and addressed sensitive or policy-violating content to maintain platform integrity.',
      'Contributed to process improvements by identifying workflow gaps and proposing solutions.',
      'Led team bonding and wellness activities to strengthen collaboration and team culture.'
    ]
  },
  {
    company: 'Freelance',
    role: 'Swimming Instructor',
    period: 'Jan 2025 – Present',
    description: [
      'Designed and delivered customized 1-on-1 and group swimming lessons for children and adults.',
      'Developed lesson plans to improve client skill proficiency and water safety awareness.',
      'Monitored student progress and provided actionable feedback to ensure consistent improvement.',
      'Managed client acquisition and scheduling independently while maintaining safety protocols.'
    ]
  },
  {
    company: 'Hartalega Sdn Bhd',
    role: 'R&D Microbiologist',
    period: 'Jan 2021 – Dec 2023',
    description: [
      'Managed complex R&D projects, ensuring 95% milestone adherence and timely data delivery for scale-up trials.',
      'Performed root cause analysis (PDCA, 5 Whys) to resolve critical manufacturing and quality inconsistencies.',
      'Streamlined FDA submission workflows by coordinating data interpretation across R&D, QA, and Production.',
      'Developed and validated 3 new microbiological testing methods, reducing reliance on external labs and cutting costs.',
      'Provided technical support to sales teams for customer inquiries and complaint resolution.'
    ]
  },
  {
    company: 'FC-BIOS Sdn Bhd',
    role: 'Technical Sales Specialist',
    period: 'Jan 2020 – Dec 2020',
    description: [
      'Managed a sales portfolio of 20+ life science products for Central & Perak regions.',
      'Exceeded territory sales targets by 20% through business development and account management.',
      'Provided on-site technical advice, training, and after-sales support to clients.',
      'Identified new business opportunities in the cold chain and glove industry through market analysis.'
    ]
  },
  {
    company: 'Chemsil (Air & Water) Sdn Bhd',
    role: 'Microbiologist',
    period: 'Jan 2019 – Dec 2019',
    description: [
      'Led daily lab operations, equipment maintenance, and certificate of analysis generation per GMP/GLP standards.',
      'Performed microbiological testing of food, water, and pharmaceutical samples in accordance with USP, BP, and APHA standards.',
      'Processed 30+ samples daily with zero critical errors, ensuring quality and compliance.'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'Master of Data Science (With Distinction)',
    school: 'University of Malaya',
    year: '2023 – 2025',
    details: 'CGPA: 3.86/4.00. Research: Meteorological Variable-Based Daily Rainfall Prediction using Ensemble Learning & ANN.'
  },
  {
    degree: 'Bachelor of Biotechnology (First Class Honours)',
    school: 'INTI International University',
    year: '2017 – 2020',
    details: 'CGPA: 3.59/4.00. Research: Bioremediation Potential of Indigenous Soil Fungi for Detoxification of Hexavalent Chromium [Cr(VI)].'
  }
];

export const CERTIFICATIONS = [
  'Python for Data Science',
  'SQL for Data Analytics',
];
