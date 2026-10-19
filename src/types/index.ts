export type EtiquetteType = 'DO' | 'DONT';

export type CategoryId =
  | 'transit'
  | 'cinema_theater'
  | 'hospital'
  | 'street_park'
  | 'elevator'
  | 'dining'
  | 'library'
  | 'heritage_sacred'
  | 'administrative';

export interface EtiquetteItem {
  id: string;
  categoryId: CategoryId;
  type: EtiquetteType;
  title: string;
  summary: string;
  reason: string;
  practicalTip: string;
  legalReference?: string;
  priority: 'mandatory' | 'courtesy' | 'recommended';
  tags: string[];
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  shortDesc: string;
  iconName: string;
  accentColor: string;
  badgeCount?: number;
}

export interface SituationScenario {
  id: string;
  title: string;
  location: string;
  description: string;
  context: string;
  suggestedSteps: {
    step: number;
    title: string;
    action: string;
    tone: string;
  }[];
  sampleQuotes: string[];
  mistakesToAvoid: string[];
  civicNote: string;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  location: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface LegalRegulation {
  id: string;
  behavior: string;
  lawDoc: string;
  penaltyRange: string;
  note: string;
  category: string;
}

export interface AdvisoryResponse {
  analysis: string;
  dos: string[];
  donts: string[];
  suggestedPhrases: string[];
  legalOrCivicNote: string;
  isOfflineGuidance?: boolean;
}
