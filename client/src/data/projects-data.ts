export interface ProjectData {
  customerType: string;
  technology: string;
  duration: number;
  teamSize: string;
  teams: string[];
  start?: string;
  end?: string;
  description: string;
}

export const projectsData: ProjectData[] = [
  {
    customerType: "Government",
    technology: "WEBAPP",
    duration: 3.0,
    teamSize: "S",
    teams: ["WEB", "ExternalDEV"],
    description: "Ministry of Human Capacities online study competition site projects project management 2016. September"
  },
  {
    customerType: "Museum",
    technology: "WEBAPP", 
    duration: 18.0,
    teamSize: "M",
    teams: ["HW", "Display", "Interactive", "Integration", "Developers"],
    description: "Széchenyi Zsigmond Hunting Museum – Hatvan –complete IT solution delivery: software development management 2013. March – 2014. Jun"
  },
  {
    customerType: "Government",
    technology: "MOBILE",
    duration: 12.0,
    teamSize: "S", 
    teams: ["Mobile", "UX"],
    start: "2019.06.15",
    end: "2019.09.20",
    description: "Magyar Posta - ICsekk mobil applikáció újraírása: Project management, SPOC"
  },
  {
    customerType: "Retail",
    technology: "WEBAPP",
    duration: 3.0,
    teamSize: "S",
    teams: ["ExternalDEV"],
    start: "2023.08.09",
    end: "2023.11.17", 
    description: "Auchan saját - fejlesztésű teljesítményértékelő tool fejlesztést, és élesbe állítása"
  },
  {
    customerType: "Media",
    technology: "Stream",
    duration: 6.0,
    teamSize: "M",
    teams: ["Mobile", "UX", "WEB", "BE"],
    start: "2018.08.13",
    end: "2019.01.01",
    description: "SpilerExtra Streaming Platform (2018-2019)"
  },
  {
    customerType: "Media", 
    technology: "Stream",
    duration: 12.0,
    teamSize: "L",
    teams: ["Mobile", "UX", "WEB", "BE"],
    start: "2019.03.03",
    end: "2019.06.07",
    description: "Stream platform Software components (Frontend, Mobile App) planning, developing, Golive and Support as Project Manager, and key technical contact for TV2."
  },
  {
    customerType: "Media",
    technology: "Stream", 
    duration: 18.0,
    teamSize: "L",
    teams: ["Mobile", "UX", "Payment", "BE", "CRM"],
    start: "2022.01.01",
    end: "2023.05.30",
    description: "RTL+ platform development coordination as a Program coordinator 2022-2023"
  },
  {
    customerType: "Government",
    technology: "INFRA",
    duration: 12.0,
    teamSize: "M",
    teams: ["HW", "Solution"],
    description: "Müpa Budapest IT server infrastructure reorganisation: new server acquisition, migration to virtualised clusters as Project Manager 2014. – 2015."
  },
  {
    customerType: "Museum",
    technology: "INFRA",
    duration: 6.0,
    teamSize: "S",
    teams: ["HW", "Display", "Interactive", "Integration", "Developers"],
    description: "Emlékpont Museum of Hódmezővásárhely: coordination of the establishment of the IT system 2006. February – August"
  },
  {
    customerType: "Museum",
    technology: "WEBAPP",
    duration: 3.0,
    teamSize: "S", 
    teams: ["HW", "Display", "Interactive", "Integration", "Developers"],
    description: "Integration Kőrös-Maros National Park Visitor Center - Szarvas"
  },
  {
    customerType: "Museum",
    technology: "WEBAPP",
    duration: 3.0,
    teamSize: "S",
    teams: ["HW", "Display", "Interactive", "Integration", "Developers"],
    description: "Touchscreen-kiosk software implementation 2012. September - November"
  },
  {
    customerType: "Museum",
    technology: "Solution",
    duration: 12.0,
    teamSize: "L",
    teams: ["HW", "Display", "Interactive", "Architect", "Developers"],
    description: "Computer Science Museum (Szeged): exhibition creation, leading the implementation (2011 – 2012)"
  },
  {
    customerType: "Museum",
    technology: "WEBAPP",
    duration: 18.0,
    teamSize: "L",
    teams: ["HW", "Display", "Interactive", "Integration", "Developers"],
    description: "Hungarian Natural History Museum 'The Variety of LIFE' exhibition leading the implementation 2010. November– 2011. March"
  },
  {
    customerType: "Museum",
    technology: "WEBAPP",
    duration: 6.0,
    teamSize: "M",
    teams: ["HW", "Display", "Interactive", "Integration", "Developers"],
    description: "Hungarian Natural History Museum 'Rejtélyek, sorsok, MÚMIÁK' exhibition coordination in IT structure deployment 2006. January – April"
  }
];
