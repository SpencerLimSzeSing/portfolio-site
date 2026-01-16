
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Customer Churn Prediction',
    description: 'Developed an end-to-end ML pipeline predicting user attrition for a SaaS platform with 92% accuracy.',
    longDescription: 'This project utilizes XGBoost and Random Forest classifiers to predict customer churn. It includes comprehensive Exploratory Data Analysis (EDA), feature engineering (recursive feature elimination), and model deployment via a FastAPI microservice. I addressed class imbalance using SMOTE techniques.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'FastAPI'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    githubUrl: 'https://github.com/',
    category: 'Machine Learning'
  },
  {
    id: '2',
    title: 'Time Series Sales Forecasting',
    description: 'LSTM-based neural network architecture for multi-step ahead demand forecasting in retail.',
    longDescription: 'Leveraged deep learning to forecast inventory needs across 50+ stores. The model incorporates seasonal trends, holiday effects, and promotional data. Built with TensorFlow/Keras and optimized using Bayesian hyperparameter tuning.',
    tags: ['TensorFlow', 'LSTM', 'Pandas', 'Prophet'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    githubUrl: 'https://github.com/',
    category: 'Deep Learning'
  },
  {
    id: '3',
    title: 'Interactive Crime Data Dashboard',
    description: 'A dynamic geospatial visualization platform built with D3.js and Mapbox to analyze urban trends.',
    longDescription: 'Real-time dashboard visualizing crime statistics across major metropolitan areas. Features include heatmaps, temporal trend analysis, and demographic correlation overlays. Designed for policy makers to identify hotspots.',
    tags: ['D3.js', 'React', 'Mapbox', 'SQL'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    githubUrl: 'https://github.com/',
    category: 'Data Visualization'
  },
  {
    id: '4',
    title: 'Genomics NLP Analysis',
    description: 'Applying Transformer models to identify functional regions in genomic sequences.',
    longDescription: 'Utilized BERT-based architectures for sequence classification tasks on DNA sequences. This project explored biological language modeling to predict promoter regions and transcription factor binding sites.',
    tags: ['HuggingFace', 'PyTorch', 'BioPython', 'NLP'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    githubUrl: 'https://github.com/',
    category: 'Deep Learning'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'R', level: 80, category: 'Programming' },
  { name: 'SQL', level: 90, category: 'Database' },
  { name: 'PyTorch', level: 85, category: 'Frameworks' },
  { name: 'Scikit-learn', level: 95, category: 'Frameworks' },
  { name: 'Tableau/PowerBI', level: 88, category: 'Tools' },
  { name: 'Spark/Hadoop', level: 75, category: 'Big Data' },
  { name: 'D3.js', level: 82, category: 'Visualization' }
];

export const PORTFOLIO_CONTEXT = `
You are an AI assistant representing Alex, a Master's in Data Science graduate.
Alex has expertise in Machine Learning, Deep Learning, and Statistical Modeling.
Key Projects:
1. Customer Churn Prediction: 92% accuracy using XGBoost.
2. Time Series Sales Forecasting: Retail demand forecasting using LSTMs.
3. Interactive Crime Data Dashboard: Geospatial D3.js visualization.
4. Genomics NLP: BERT for DNA sequence classification.

Skills: Python (Expert), SQL, PyTorch, Scikit-learn, Tableau, Spark.
Education: MS in Data Science from a top-tier University.

Answer questions as Alex's AI representative. Be professional, concise, and highlight Alex's analytical mindset.
`;
