import { Activity, Brain, TrendingUp, MessageSquare, ScanText, Mic, type LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AIPHAS: Healthcare Data Standardization",
    description:
      "Worked with a Taiwanese healthcare startup on an LLM-powered pipeline that maps each hospital's lab terminology onto one shared vocabulary, so results from different hospitals can finally be compared and used for diagnostic tools.",
    tags: ["Python", "LLMs", "Pipelines", "Healthcare"],
    icon: Activity,
    github: "https://github.com/cbm2001",
    featured: true,
  },
  {
    title: "Podcast Episode Recommendations",
    description:
      "A content-based recommender over 1.1M SPoRC podcast transcripts. It mixes TF-IDF, Sentence-BERT embeddings and metadata, and compares unsupervised ranking with learning-to-rank. The best setup reached nDCG@5 above 0.60.",
    tags: ["Sentence-BERT", "TF-IDF", "Learning to Rank"],
    icon: Mic,
    github: "https://github.com/cbm2001/Content-Based-Podcast-Episode-Recommendation-System",
    featured: true,
  },
  {
    title: "Conversational Insurance Agent",
    description:
      "A customer service agent that follows a strict script: verify the caller, figure out what they need, handle the case, then wrap up. It won't share claim details until at least three identity fields match, remembers hints across turns, and hands off to a human when it's out of its depth.",
    tags: ["Python", "LLM Agents", "State Machine", "Docker"],
    icon: MessageSquare,
    github: "https://github.com/cbm2001/Conversational-Insurance-Agent-",
    featured: true,
  },
  {
    title: "Detecting LLM-Generated Text",
    description:
      "A classifier that tells human writing apart from text written by models like ChatGPT or Claude. Word- and character-level TF-IDF features feed a logistic regression, tuned with grid search on a balanced sample. It scored 0.785 AUC on the test set.",
    tags: ["NLP", "TF-IDF", "Logistic Regression"],
    icon: ScanText,
    github: "https://github.com/cbm2001/Detecting-LLM-Generated-Text",
  },
  {
    title: "Dynamic Pricing Engine",
    description:
      "Pricing for ride-sharing and retail: a Random Forest forecasts demand from time, weather and competitor data, and a gradient boosting model estimates price elasticity. In simulated A/B tests it lifted revenue 18% and cut inventory costs 10%.",
    tags: ["Python", "Random Forest", "Gradient Boosting", "A/B Testing"],
    icon: TrendingUp,
    github: "https://github.com/cbm2001/Price-Optimization",
  },
  {
    title: "Parkinson's Disease Detection",
    description:
      "Uses small changes in someone's voice, like jitter, shimmer and noise ratios, to flag early signs of Parkinson's. Trained on the UCI voice dataset with 10-fold cross-validation, it reached 92% accuracy, and SHAP and LIME show which features drive each prediction.",
    tags: ["Python", "Scikit-learn", "SHAP", "LIME"],
    icon: Brain,
    github: "https://github.com/cbm2001/Parkinson-s-Disease-Detection",
  },
];
