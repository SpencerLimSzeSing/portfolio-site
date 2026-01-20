
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
    title: 'AI & Machine Learning',
    icon: 'fas fa-brain',
    skills: ['NEURAL NETWORKS', 'REINFORCEMENT LEARNING', 'DEEP LEARNING', 'GENERATIVE AI', 'NEURO-SYMBOLIC AI', 'CAUSAL INFERENCE', 'LLM FINE-TUNING']
  },
  {
    title: 'Cloud Architecture & MLOps',
    icon: 'fas fa-cloud',
    skills: ['AWS SAGEMAKER', 'DOCKER/KUBERNETES', 'CLOUDFORMATION', 'VECTOR DBS', 'GPU ACCELERATION', 'CI/CD', 'DOCKER', 'GIT']
  },
  {
    title: 'Programming',
    icon: 'fas fa-code',
    skills: ['PYTHON', 'JAVA', 'TYPESCRIPT', 'TENSORFLOW', 'PYTORCH', 'LANGCHAIN', 'HUGGING FACE TRANSFORMERS', 'SCIKIT-LEARN', 'CUDA', 'PANDAS', 'NUMPY']
  },
  {
    title: 'Data Science',
    icon: 'fas fa-chart-line',
    skills: ['FEATURE ENGINEERING', 'DIMENSIONALITY REDUCTION', 'CLUSTERING', 'STATISTICAL MODELING', 'DATABRICKS', 'PLOTLY DASH']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Quantum Intelligence Lab',
    role: 'Lead AI Research Graduate',
    period: '2023 - Present',
    description: [
      'Architected cloud-native LLM pipelines on AWS SageMaker serving 10k+ requests daily.',
      'Implemented vector database integrations (Pinecone) for RAG systems.',
      'Led research on Neuro-Symbolic AI to improve model reasoning accuracy by 22%.',
      'Orchestrated CI/CD pipelines for ML models using GitHub Actions and Docker.'
    ]
  },
  {
    company: 'University Data Institute',
    role: 'Graduate Research Assistant',
    period: '2022 - 2023',
    description: [
      'Developed distributed training scripts for large-scale GNNs on multi-GPU clusters.',
      'Cleaned and processed 5TB+ of geospatial transit data for urban planning analysis.',
      'Published results in the International Journal of Data Science (IJDS).',
      'Mentored 15 undergrad students in Python and Statistical Modeling fundamentals.'
    ]
  },
  {
    company: 'BioTech Solutions Inc.',
    role: 'Data Analyst Intern',
    period: '2021 - 2022',
    description: [
      'Automated genomic sequence reporting pipelines using Python and Bash scripts.',
      'Created interactive Dashboards in Plotly for clinical trial monitoring.'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'Master of Data Science',
    school: 'Global Tech University',
    year: '2022 - 2024',
    details: 'GPA 3.9/4.0. Focused on Deep Learning, Cloud Computing, and Bayesian Statistics.'
  },
  {
    degree: 'B.S. in Biotechnology',
    school: 'Pacific Science Institute',
    year: '2018 - 2022',
    details: 'Specialized in Bioinformatics and Molecular Modeling.'
  }
];

export const CERTIFICATIONS = [
  'AWS Certified Solutions Architect – Professional',
  'Google Cloud Professional Data Engineer',
  'DeepLearning.AI TensorFlow Developer',
  'Databricks Certified Data Engineer Associate'
];
