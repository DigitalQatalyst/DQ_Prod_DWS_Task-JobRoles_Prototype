export interface Sector {
  id: string;
  name: string;
  coverClass: string;
  description: string;
  active: boolean;
  teams?: Team[];
}

export interface Team {
  id: string;
  name: string;
  fullName: string;
  coverClass: string;
  description: string;
  chips: string[];
  meta: string;
  active: boolean;
}

export const sectors: Sector[] = [
  {
    id: 'coe',
    name: 'CoE',
    coverClass: 'ghc-cover-coe',
    description: 'Centre of Excellence — Quality governance, performance intelligence and capability building across DQ.',
    active: true,
    teams: [
      {
        id: 'evmo',
        name: 'EVMO',
        fullName: 'Excellence & Value Management Office',
        coverClass: 'ghc-cover-evmo',
        description: 'The quality and intelligence engine of DQ CoE — governing unified standards, performance and capability.',
        chips: ['S00 L&D', 'S01 Practices', 'S02 Products', 'S03 Projects'],
        meta: '4 Workstream Templates · Active',
        active: true,
      },
      {
        id: 'simo',
        name: 'SIMO',
        fullName: 'Strategic Initiative Management Office',
        coverClass: 'ghc-cover-simo',
        description: 'Driving strategic initiatives and transformation programs across DigitalQatalyst.',
        chips: [],
        meta: 'Coming Soon',
        active: false,
      },
      {
        id: 'dpmo',
        name: 'DPMO',
        fullName: 'Delivery & Performance Management Office',
        coverClass: 'ghc-cover-dpmo',
        description: 'Overseeing delivery excellence and performance metrics across all DQ operations.',
        chips: [],
        meta: 'Coming Soon',
        active: false,
      },
      {
        id: 'pcmo',
        name: 'PCMO',
        fullName: 'People & Competency Management Office',
        coverClass: 'ghc-cover-pcmo',
        description: 'Building and nurturing talent, competencies and people development across DQ.',
        chips: [],
        meta: 'Coming Soon',
        active: false,
      },
    ],
  },
  {
    id: 'ceo',
    name: 'CEO',
    coverClass: 'ghc-cover-ceo',
    description: 'Chief Executive Office — Strategic direction and executive governance.',
    active: false,
  },
  {
    id: 'dco',
    name: 'DCO Operations',
    coverClass: 'ghc-cover-dco',
    description: 'Digital Core Operations — HRA Factory, Finance Factory, Deals Factory, Stories Factory.',
    active: false,
  },
  {
    id: 'dbp-platform',
    name: 'DBP Platform',
    coverClass: 'ghc-cover-dbp-platform',
    description: 'Digital Business Platform — Intelligence, Solutions, SecDevOps, Products.',
    active: false,
  },
  {
    id: 'dbp-delivery',
    name: 'DBP Delivery',
    coverClass: 'ghc-cover-dbp-delivery',
    description: 'Digital Business Platform Delivery — Deploys, Designs, Accounts.',
    active: false,
  },
];

export const sectorFilterGroups = [
  { id: 'ceo', label: 'CEO', expandable: false },
  {
    id: 'coe',
    label: 'CoE',
    expandable: true,
    children: [
      { id: 'coe-all', label: 'All Teams', count: 4 },
      { id: 'evmo', label: 'EVMO' },
      { id: 'simo', label: 'SIMO' },
      { id: 'dpmo', label: 'DPMO' },
      { id: 'pcmo', label: 'PCMO' },
    ],
  },
  {
    id: 'dco',
    label: 'DCO Operations',
    expandable: true,
    children: [
      { id: 'hra', label: 'HRA Factory' },
      { id: 'finance', label: 'Finance Factory' },
      { id: 'deals', label: 'Deals Factory' },
      { id: 'stories', label: 'Stories Factory' },
    ],
  },
  {
    id: 'dbp-platform',
    label: 'DBP Platform',
    expandable: true,
    children: [
      { id: 'intelligence', label: 'Intelligence' },
      { id: 'solutions', label: 'Solutions' },
      { id: 'secdevops', label: 'SecDevOps' },
      { id: 'products', label: 'Products' },
    ],
  },
  {
    id: 'dbp-delivery',
    label: 'DBP Delivery',
    expandable: true,
    children: [
      { id: 'deploys', label: 'Deploys' },
      { id: 'designs', label: 'Designs' },
      { id: 'accounts', label: 'Accounts' },
    ],
  },
];
