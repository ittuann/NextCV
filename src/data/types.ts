export interface ResumeData {
  info: Info[];
  education: Education[];
  experience: Experience[];
  projects: Normal[];
  awards: Normal[];
  skills: Skills[];
}

export interface Info {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  resume: string;
  social: Social[];
  summary: string;
}

export interface Social {
  network: string;
  name: string;
  url: string;
}

export interface Education {
  name: string;
  date: string;
  area: string;
  degree: string;
  location: string;
  highlights: string[];
}

export interface Experience {
  name: string;
  date: string;
  position: string;
  location: string;
  highlights: string[];
}

export interface Normal {
  name: string;
  date: string;
  summary: string;
  highlights: string[];
}

export interface Skills {
  name: string;
  items: string[];
}
