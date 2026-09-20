export const personalData = {
  name: "Rishi Gudigar",
  displayName: "RISHI",
  role: "Engineering student · Artist · Maker",
  location: "Karnataka, India",
  graduation: "2028",
  college: "Sri Dharmasthala Manjunatheshwara Institute of Technology (SDMIT), Ujire",
  tagline: "Somewhere between code, emotions and sawdust.",
  microText: "Currently learning. Constantly building. Occasionally breaking things.",

  heroHeading: {
    line1: "I BUILD.",
    line2: "I DRAW.",
    line3: "I CREATE.",
  },

  heroDescription:
    "I’m Rishi — an engineering student figuring things out one project at a time. I build things with code, create art when I feel like it, and somehow spend a lot of time turning wood into things people actually want.",

  heroSkills: [
    "CODE",
    "ART",
    "CRAFT",
  ],

  aboutMainText:
    "I’m Rishi — an Information Science Engineering student who likes learning by actually building things. I work across software, art and digital fabrication. Some days I'm writing code, some days I'm drawing, and some days I'm standing next to a CNC machine wondering how a digital design turned into sawdust.",

  education: {
    degree: "B.E. Information Science & Engineering",
    institution: "SDMIT, Ujire",
    expectedGraduation: "Expected Graduation: 2028",
    location: "Karnataka, India",
  },

  whatIDo: [
    {
      num: "01",
      title: "BUILD",
      description: "Software, web applications and real-time systems.",
      tags: ["React", "Node.js", "Express", "TypeScript", "JavaScript", "Python", "Tailwind CSS"],
    },
    {
      num: "02",
      title: "DRAW",
      description: "Digital art, sketches, anime-inspired artwork and visual experiments.",
      tags: ["Sketches", "Anime Art", "Illustrations", "Visual Design", "Concept Art"],
    },
    {
      num: "03",
      title: "MAKE",
      description: "CNC relief designs, wood carving and custom physical pieces.",
      tags: ["ArtCAM", "CNC Machining", "3D Wood-Relief", "Digital Fabrication", "Custom Carving"],
    },
  ],

  email: "rishigudigar18@gmail.com",
  github: "https://github.com/rishigudigar18",
  githubUsername: "rishigudigar18",
  linkedin: "https://www.linkedin.com/in/risshhiii",
  linkedinUsername: "risshhiii",
  instagramPersonal: "https://www.instagram.com/risshhiii12",
  instagramPersonalHandle: "@risshhiii12",
  instagramArt: "https://www.instagram.com/risshhiiidrawss",
  instagramArtHandle: "@risshhiiidrawss",
  instagramCnc: "https://www.instagram.com/risshhiiicreates",
  instagramCncHandle: "@risshhiiicreates",

  logos: ["ENGINEER", "ARTIST", "MAKER", "RISSHHIIIDRAWSS", "RISSHHIIICREATES"],
};

export interface WorkAreaItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tagline?: string;
  categoryTag: string;
  description: string;
  paragraphs?: string[];
  techOrMedia: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  buttonText?: string;
  imageUrl: string;
  galleryImages?: { url: string; title: string; caption: string }[];
  type: "tech" | "art" | "craft";
}

export const mainWorkAreas: WorkAreaItem[] = [
  {
    id: "rishidraws",
    num: "01",
    title: "risshhiiidrawss",
    subtitle: "EMOTIONS, TURNED INTO ART.",
    tagline: "Some feelings are easier to draw than explain.",
    categoryTag: "PERSONAL ART SPACE & VISUAL STORIES",
    description:
      "I draw what I can't always put into words. RishiDraws is my personal art space where I turn emotions, thoughts, memories, loneliness, and random moments into sketches and visual stories.",
    paragraphs: [
      "I draw what I can't always put into words.",
      "RishiDraws is my personal art space where I turn emotions, thoughts, memories, loneliness, and random moments into sketches and visual stories.",
    ],
    techOrMedia: [
      "Emotional Sketches",
      "Anime-Inspired Artwork",
      "Personal Drawings",
      "Feelings & Experiences",
      "Visual Storytelling",
    ],
    instagramUrl: "https://www.instagram.com/risshhiiidrawss",
    instagramHandle: "@risshhiiidrawss",
    buttonText: "VIEW RISSHHIIIDRAWSS →",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1000&auto=format&fit=crop&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
        title: "Late Night Solitude",
        caption: "Turning quiet thoughts into ink and lines",
      },
      {
        url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
        title: "Unspoken Memories",
        caption: "Anime-inspired character sketches & emotions",
      },
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        title: "Random Moments",
        caption: "Visual stories captured between frames",
      },
    ],
    type: "art",
  },
  {
    id: "rishicreates",
    num: "02",
    title: "risshhiiicreates",
    subtitle: "WOOD • CNC • CRAFT",
    categoryTag: "DIGITAL FABRICATION & WOODWORKING",
    description:
      "RishiCreates is where digital design meets traditional craftsmanship — creating CNC wood-relief designs, custom carvings and physical pieces from digital ideas.",
    techOrMedia: ["ArtCAM", "CNC Machining", "3D Relief Modeling", "Custom Wood Carvings", "Physical Fabrication"],
    instagramUrl: "https://www.instagram.com/risshhiiicreates",
    instagramHandle: "@risshhiiicreates",
    buttonText: "VIEW RISSHHIIICREATES →",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80",
    type: "craft",
  },
];
