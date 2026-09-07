import {
  BookOpen,
  Compass,
  FileText,
  Layers,
  Sparkles,
  Building,
} from "lucide-react";
import type { ElementType } from "react";

export interface FeatureItem {
  id: string;
  label: string;
  category: string;
  date: string;
  location: string;
  icon: ElementType;
  image: string;
  description: string;
  confidence: number;
}

export const HISTORICAL_FEATURES: FeatureItem[] = [
  {
    id: "aryabhatiya",
    label: "Aryabhatiya (499 CE)",
    category: "Mathematical Astronomy",
    date: "499 CE",
    location: "Kusumapura (Patna)",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200",
    description:
      "Seminal mathematical and astronomical treatise by Aryabhata covering trigonometry, algebra, and planetary orbits.",
    confidence: 94,
  },
  {
    id: "ain-i-akbari",
    label: "Ain-i-Akbari (1590 CE)",
    category: "Imperial Administration",
    date: "1590 CE",
    location: "Agra, Mughal Empire",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200",
    description:
      "Detailed administrative and statistical record of Emperor Akbar's governance, revenue laws, and geography by Abu'l-Fazl.",
    confidence: 96,
  },
  {
    id: "ajanta",
    label: "Ajanta Cave Surveys (1920s)",
    category: "Archaeological Epigraphy",
    date: "1920s",
    location: "Aurangabad, Maharashtra",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1600100397608-f010f443a968?q=80&w=1200",
    description:
      "First systematic photographic and architectural records of the 2nd century BCE Buddhist rock-cut mural frescoes.",
    confidence: 92,
  },
  {
    id: "panchatantra",
    label: "Panchatantra Codices",
    category: "Classical Literature",
    date: "c. 300 CE",
    location: "North India",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1200",
    description:
      "Interrelated Sanskrit animal fables illustrating political statecraft, diplomacy, and moral philosophy across centuries.",
    confidence: 89,
  },
  {
    id: "bombay-gazetteer",
    label: "Bombay Gazetteer (1877)",
    category: "Colonial Regional Surveys",
    date: "1877",
    location: "Bombay Presidency",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200",
    description:
      "Exhaustive geographical, trade, and demographic documentation of western India during the nineteenth century.",
    confidence: 91,
  },
  {
    id: "bengal-census",
    label: "Bengal Census Report (1901)",
    category: "Demographic Intelligence",
    date: "1901",
    location: "Calcutta, Bengal",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200",
    description:
      "Pivotal colonial statistical census recording population dynamics, linguistic diversity, and craft occupations.",
    confidence: 93,
  },
];

