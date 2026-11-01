export type Experience = [
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
];

export const experiences: Experience = [
  {
    title: `IT Technician I`,
    date: 'Aug 2026 - Present',
    description: `Front-line technical support for Neptune Aviation Services, Inc. providing end-user technical support across the organization to employees by setting up, maintaining, and troubleshooting equipment and software.

- Resolves issues through troubleshooting computers, mobile devices, desk phones, printers, software and other related devices.
- Prepares, and deploys workstations.
- Maintains IT documentation.
- Assists with user onboarding and off-boarding.
- Provides weekend and after hours support as necessary.`,
    tags: [
      ['IT', 'skill'],
      ['Problem Solving', 'skill'],
      ['Service Desk Plus', 'technology'],
      ['Process Improvement', 'skill'],
      ['Hardware Procurement', 'skill'],
      ['Copilot', 'technology'],
      ['Hardware Deployment', 'skill'],
      ['Software Setup', 'skill'],
    ],
  },
  {
    title: `Software Developer Intern`,
    date: `Apr 2025 - May 2026`,
    description: `Developed a dynamic and responsive international web application in TypeScript React. `,
    tags: [
      ['React', 'technology'],
      ['Problem Solving', 'skill'],
    ],
  },
  {
    title: `TA Grader - Software Development & Quality Assurance Techniques, & Programming Practicum`,
    date: `Mar 2024 - Dec 2024`,
    description: `Graded assignments and provided feedback for ABET-accredited Computer Science courses at UW Tacoma.

- Evaluated Java programming assignments and object-oriented programming projects.
- Assessed UML diagrams, Software Development Life Cycle (SDLC), time tracking, and iteration tracking.
- Evaluated team-based development of a five-week game project without a game engine.`,
    tags: [
      ['Java', 'technology'],
      ['Quality Assurance', 'skill'],
      ['Object-Oriented Programming', 'skill'],
      ['UML', 'technology'],
      ['SDLC', 'technology'],
      ['Quality Assessment', 'skill'],
      ['Time Management', 'skill'],
    ],
  },
  {
    title: `IT Student Help Desk Employee`,
    date: `Sep 2021 - May 2022`,
    description: `Provided technical support to students at Green River College.

- Troubleshot accounts, email access, and password resets.
- Resolved software and hardware-related issues.
- Managed hardware loans and escalated unresolved technical issues.
- Delivered customer service and front-line IT support.`,
    tags: [
      ['IT Support', 'skill'],
      ['Troubleshooting', 'skill'],
      ['Customer Service', 'skill'],
      ['Hardware Support', 'skill'],
      ['Technical Support', 'skill'],
      ['Problem Solving', 'skill'],
    ],
  },
];
export type Project = [
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
];

export const projects: Project = [
  {
    title: `Evolving Colors Simulation`,
    date: `May 2024 - Jun 2024`,
    description: `Developed an evolving ecosystem simulation inspired by Chris Marriott's project. Animats consume plants, reproduce, and gradually evolve based on color-based food preferences. Plants mature and reproduce over time, creating an evolving ecosystem.

- [GitHub Repository](https://github.com/calebkrauter/evolving-colors)
- [Live Simulation](https://calebkrauter.github.io/evolving-colors/)`,
    tags: [
      ['JavaScript', 'technology'],
      ['Object-Oriented Programming', 'skill'],
      ['Artificial Intelligence', 'technology'],
      ['Simulation', 'skill'],
    ],
  },
  {
    title: `Conway's Game of Life Simulation`,
    date: `May 2024`,
    description: `Implemented Conway's Game of Life using cellular automata and its four fundamental rules of survival, underpopulation, overpopulation, and reproduction. Built using a modified game engine originally developed by Seth Ladd and Chris Marriott.

- [GitHub Repository](https://github.com/calebkrauter/conways-game-of-life)`,
    tags: [
      ['JavaScript', 'technology'],
      ['HTML', 'technology'],
      ['Object-Oriented Programming', 'skill'],
      ['Game Development', 'skill'],
      ['Artificial Intelligence', 'technology'],
    ],
  },
  {
    title: `The Good, The Bad and Chad`,
    date: `Jan 2024 - Mar 2024`,
    description: `Collaborated in a four-person team to develop a 2D platformer RPG web game over a 10-week project.

- Developed advanced player movement mechanics.
- Co-developed dialogue mechanics.
- Designed and implemented tile maps and a weather system.
- Created sprite artwork and music.

- [Project Repository](https://github.com/GoodBadChad/good-bad-chad-br)
- [My Fork](https://github.com/calebkrauter/good-bad-chad-caleb-krauter/tree/development) · [Play Game](https://brother-studios.itch.io/the-good-the-bad-and-chad)`,
    tags: [
      ['JavaScript', 'technology'],
      ['Game Development', 'skill'],
      ['Front-End Development', 'skill'],
      ['Team Collaboration', 'skill'],
      ['Tile Mapping', 'skill'],
      ['Game Design', 'skill'],
    ],
  },
];

export type Education = [
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
  {
    title: string;
    date: string;
    description: string;
    tags: string[][];
  },
];

export const education: Education = [
  {
    title: `Bachelor's Degree, Computer Science & Systems`,
    date: `Sep 2022 - Dec 2024`,
    description: `University of Washington Tacoma

Grade: 3.46

Activities and Societies:
- Participated in ICPC Pacific Northwest Regional Contest Division 2 in Spring 2024.
- Participated in Puget Sound Programming Competition Fall 2022 and Spring 2023.
- Owner of Discord server with over 150 students.`,
    tags: [
      ['React.js', 'technology'],
      ['Amazon ECS', 'technology'],
      ['Computer Science', 'skill'],
      ['Programming', 'skill'],
    ],
  },
  {
    title: `Associate's Degree, Computer Science`,
    date: `Sep 2019 - Jun 2022`,
    description: `Green River College

Grade: 3.69

Activities and Societies: Honors`,
    tags: [
      ['Computer Science', 'skill'],
      ['Java Swing', 'technology'],
      ['Programming', 'skill'],
    ],
  },
  {
    title: `Associate's Degree, General Studies`,
    date: `Sep 2019 - Jun 2022`,
    description: `Green River College

Grade: 3.76

Activities and Societies: High Honors`,
    tags: [
      ['Java Swing', 'technology'],
      ['Problem Solving', 'skill'],
    ],
  },
];
