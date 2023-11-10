export const commands = [
  {
    cmd: "about",
    description: "Learn more about me",
  },
  {
    cmd: "experience",
    description: "Explore my professional background",
  },
  {
    cmd: "projects",
    description: "Browse through my projects",
  },
  {
    cmd: "socials",
    description: "Check out my social media accounts",
  },
  {
    cmd: "education",
    description: "Explore my educational background",
  },
  {
    cmd: "gui",
    description: "Navigate to my portfolio in GUI",
  },
  {
    cmd: "clear",
    description: "Clear the terminal",
  },
  {
    cmd: "print",
    description: "Print out a message",
  },
  {
    cmd: "list -a",
    description: "List all available commands",
  },
  {
    cmd: "history",
    description: "View command history",
  },
  {
    cmd: "welcome",
    description: "Display the hero section",
  },
] as const;

export const portrait = `
⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣻⣯⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣞⣿⣿⣿⣿⣿⠟⢻⣿⡄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⢃⠆⠄⠄⠄⠠⡀⣿⡅⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢹⢣⡽⡽⠋⢻⣛⠄⡸⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡄⠱⠶⡐⠄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢒⢱⢶⠄⠆⣸⣷⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⢰⣽⣿⡟⡖⣽⣿⣿⣷
⠀⠀⠀⣴⣿⣿⣿⣿⣷⣳⣵⣿⣿⣿⣿⣿⣿⣿⣷
⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`;

export const socials = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/syedmazharaliraza/",
  },
  {
    name: "Github",
    link: "https://www.github.com/syedmazharaliraza/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/110Syedmazhar",
  },
  {
    name: "Email",
    link: "mazharali.raza11@gmailcom",
  },
] as const;

export const portfolioLink = "https://mazhar-ali.com";

export const projects = [
  {
    name: "VocaBuild",
    description: "Google Chrome extension for improving vocabulary",
    link: "https://github.com/syedmazharaliraza/VocaBuild",
  },
  {
    name: "Integrated Management System",
    description:
      "Bill management software to digitalize offline billing process",
    link: "https://github.com/syedmazharaliraza/Integrated-Management-System",
  },
  {
    name: "The Book Store",
    description: "E-commerce website with admin dashboard",
    link: "https://github.com/syedmazharaliraza/the-book-store",
  },
  {
    name: "Math Knight",
    description: "Fantasy themed mathematical operations game",
    link: "https://github.com/syedmazharaliraza/MathKnight",
  },
];

export const experience: {
  company: string;
  companyLink: string;
  position: string;
  startDate: Date;
  endDate: Date | "present";
  description: string[];
}[] = [
  {
    company: "Tealfeed",
    companyLink: "https://about.tealfeed.com/",
    position: "Frontend Engineer Intern",
    startDate: new Date("2023-06-01"),
    endDate: "present",
    description: [
      "Designed UI components with ShadCN",
      "Developed workflows for streamlined booking",
    ],
  },
  {
    company: "Markopolo.ai",
    companyLink: "https://www.markopolo.ai/",
    position: "SDE I - Front End Engineer",
    startDate: new Date("2022-10-01"),
    endDate: new Date("2023-03-01"),
    description: [
      "Optimized workflows",
      "Created ad generation workflows",
      "Improved website performance",
    ],
  },
  {
    company: "Markopolo.ai",
    companyLink: "https://www.markopolo.ai/",
    position: "Frontend Developer Intern",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2023-09-01"),
    description: [
      "Diagnosed production issues",
      "Integrated REST APIs",
      "Created functional components from designs",
    ],
  },
  {
    company: "StudentPeeps",
    companyLink: "https://studentpeeps.club/ourstory/",
    position: "Frontend Developer Intern",
    startDate: new Date("2021-10-01"),
    endDate: new Date("2022-03-01"),
    description: [
      "Boosted signups by 30%",
      "Completely revamped UI/UX",
      "Refined components for optimal experience",
    ],
  },
];
