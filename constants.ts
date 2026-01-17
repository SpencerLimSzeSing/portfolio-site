
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'churn-risk',
    title: 'Churn Risk Architecture',
    description: 'Predictive pipeline for SaaS retention using XGBoost and SHAP explainability.',
    tags: ['Python', 'XGBoost', 'SHAP', 'Scikit-Learn'],
    category: 'MACHINE LEARNING',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop',
    stars: 124,
    forks: 32,
    language: 'Python',
    color: '#3572A5',
    detailedInsights: 'Integrated SHAP to provide business stakeholders with local explanations for individual customer churn risks.'
  },
  {
    id: 'lstm-temporal',
    title: 'LSTM Temporal Forecasting',
    description: 'Neural network architecture for multi-region retail inventory optimization.',
    tags: ['TensorFlow', 'LSTM', 'Keras', 'Pandas'],
    category: 'DEEP LEARNING',
    image: 'https://images.unsplash.com/photo-1518186239717-2e9b1bd670c3?q=80&w=800&auto=format&fit=crop',
    stars: 89,
    forks: 15,
    language: 'Python',
    color: '#3572A5',
    detailedInsights: 'Achieved a 15% reduction in overstock by capturing seasonal lag patterns in supply chain data.'
  },
  {
    id: 'urban-crime',
    title: 'Urban Crime Dynamics',
    description: 'Geospatial visualization platform analyzing transit-crime correlations.',
    tags: ['D3.js', 'React', 'Mapbox', 'PostgreSQL'],
    category: 'DATA VISUALIZATION',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop',
    stars: 210,
    forks: 45,
    language: 'TypeScript',
    color: '#3178c6',
    detailedInsights: 'Mapped 5 years of municipal data to identify "hotspot" corridors near public transit hubs.'
  },
  {
    id: 'genomic-transformer',
    title: 'Genomic Sequence Transformer',
    description: 'BERT-based NLP models for identifying functional biological DNA regions.',
    tags: ['PyTorch', 'Transformers', 'BioPython', 'HuggingFace'],
    category: 'DEEP LEARNING',
    image: 'https://images.unsplash.com/photo-1532187875605-2fe3587b1508?q=80&w=800&auto=format&fit=crop',
    stars: 56,
    forks: 12,
    language: 'Python',
    color: '#3572A5',
    detailedInsights: 'Custom tokenization strategy for non-coding DNA sequences, improving motif recognition accuracy.'
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
