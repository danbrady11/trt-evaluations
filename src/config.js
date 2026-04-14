// ─── Edit these to match your program ───────────────────────────────────────
export const TRAINING_TYPES = [
  'Rope Rescue — Low Angle',
  'Rope Rescue — High Angle',
  'Confined Space Rescue',
  'Trench Rescue',
  'Structural Collapse',
  'Vehicle & Machinery Rescue',
  'Water Rescue',
  'Tabletop / ICS Exercise',
  'Multi-Discipline Drill',
];

export const ROLES = [
  'Firefighter',
  'Engineer',
  'Company Officer',
  'Battalion Chief',
  'TRT Technician',
  'TRT Specialist',
  'Non-tech / Observer',
];

// ─── Eval questions ──────────────────────────────────────────────────────────
export const QUESTIONS = [
  {
    id: 'q1',
    label: 'Training objectives were clearly communicated.',
    short: 'Clear objectives',
  },
  {
    id: 'q2',
    label: 'Content was relevant to real-world rescue operations.',
    short: 'Operational relevance',
  },
  {
    id: 'q3',
    label: 'The instructor presented the material effectively.',
    short: 'Instructor effectiveness',
  },
  {
    id: 'q4',
    label: 'I feel better prepared to execute rescue operations after this training.',
    short: 'Preparedness gain',
  },
  {
    id: 'q5',
    label: 'I would recommend this training to others on the team.',
    short: 'Would recommend',
  },
];

export const SCALE_LABELS = {
  1: 'Strongly disagree',
  2: 'Disagree',
  3: 'Neutral',
  4: 'Agree',
  5: 'Strongly agree',
};

// ─── Admin ───────────────────────────────────────────────────────────────────
export const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'trt2024';
