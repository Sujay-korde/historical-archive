export interface HistoricalRecord {
  id: string;
  title: string;
  documentType: 'Manuscript' | 'Report' | 'Research document';
  era: string;
  date: string;
  location: string;
  classification: 'Ancient knowledge' | 'Scientific knowledge' | 'Heritage knowledge';
  confidenceScore: number;
  source: string;
  sourceUrl: string;
  matchReason: string;
  description: string;
}

export const records: HistoricalRecord[] = [
  {
    id: 'ain-i-akbari',
    title: 'Ain-i-Akbari',
    documentType: 'Manuscript',
    era: 'Medieval',
    date: '1590 CE',
    location: 'Agra, India',
    classification: 'Ancient knowledge',
    confidenceScore: 0.94,
    source: 'Internet Archive',
    sourceUrl: 'https://archive.org',
    matchReason: 'Matched on era classification and administrative record taxonomy. The Ain-i-Akbari is a detailed document recording the administration of the Mughal Empire under Emperor Akbar.',
    description: 'A comprehensive administrative document by Abu\'l-Fazl ibn Mubarak, chronicling the governance, culture, and geography of Akbar\'s Mughal Empire. One of the most detailed records of medieval Indian administration.',
  },
  {
    id: 'aryabhatiya',
    title: 'Aryabhatiya',
    documentType: 'Manuscript',
    era: 'Ancient',
    date: '499 CE',
    location: 'Kusumapura (Patna)',
    classification: 'Scientific knowledge',
    confidenceScore: 0.91,
    source: 'Wikimedia',
    sourceUrl: 'https://commons.wikimedia.org',
    matchReason: 'Matched on scientific classification and mathematical content analysis. Contains foundational work in algebra, trigonometry, and astronomical calculation.',
    description: 'A seminal mathematical and astronomical treatise by Aryabhata, covering arithmetic, algebra, plane and spherical trigonometry, and astronomical constants. A cornerstone of Indian scientific heritage.',
  },
  {
    id: 'gazetteer-bombay',
    title: 'Gazetteer of the Bombay Presidency',
    documentType: 'Report',
    era: 'Colonial',
    date: '1877',
    location: 'Bombay',
    classification: 'Heritage knowledge',
    confidenceScore: 0.88,
    source: 'data.gov.in',
    sourceUrl: 'https://data.gov.in',
    matchReason: 'Matched on colonial-era administrative records and regional heritage documentation. Provides detailed geographical, historical, and social data.',
    description: 'A multi-volume administrative reference documenting the geography, history, demographics, and economy of the Bombay Presidency under British colonial rule.',
  },
  {
    id: 'ajanta-survey',
    title: 'Survey of Buddhist Cave Temples, Ajanta',
    documentType: 'Research document',
    era: 'Colonial',
    date: '1920s',
    location: 'Maharashtra',
    classification: 'Heritage knowledge',
    confidenceScore: 0.93,
    source: 'Internet Archive',
    sourceUrl: 'https://archive.org',
    matchReason: 'Matched on heritage site documentation and archaeological survey classification. Detailed photographic and written records of the Ajanta caves.',
    description: 'An archaeological survey documenting the Buddhist cave temples at Ajanta, including detailed descriptions of murals, sculptures, and architectural features spanning the 2nd century BCE to 6th century CE.',
  },
  {
    id: 'panchatantra',
    title: 'Panchatantra Manuscript Fragment',
    documentType: 'Manuscript',
    era: 'Ancient',
    date: 'c. 300 CE',
    location: 'North India',
    classification: 'Ancient knowledge',
    confidenceScore: 0.87,
    source: 'Wikimedia',
    sourceUrl: 'https://commons.wikimedia.org',
    matchReason: 'Matched on literary manuscript classification and ancient text fragment analysis. One of the most widely translated non-religious works in history.',
    description: 'A fragment of the ancient Indian collection of interrelated animal fables in Sanskrit verse and prose, attributed to Vishnu Sharma. The work has influenced storytelling traditions worldwide.',
  },
  {
    id: 'census-bengal-1901',
    title: 'Census of India Report, 1901 — Bengal Presidency',
    documentType: 'Report',
    era: 'Colonial',
    date: '1901',
    location: 'Bengal',
    classification: 'Heritage knowledge',
    confidenceScore: 0.91,
    source: 'data.gov.in',
    sourceUrl: 'https://data.gov.in',
    matchReason: 'Matched on demographic survey records and colonial census classification. Comprehensive population and social data for the Bengal region.',
    description: 'A detailed census report documenting the population, languages, occupations, religions, and social structures of the Bengal Presidency at the turn of the 20th century.',
  },
];

