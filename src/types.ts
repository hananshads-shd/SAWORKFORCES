export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  benefits: string[];
  features: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract" | "Temporary";
  salaryRange: string;
  experienceRequired: string;
  description: string;
  requirements: string[];
  postedDate: string;
  isHot?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ProcessStage {
  step: number;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  rolesAvailable: string[];
}

export interface ComparisonBenefit {
  title: string;
  traditional: string;
  saWorkforce: string;
  isPositive: boolean;
}
