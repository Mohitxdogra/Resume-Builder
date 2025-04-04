export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  location: string
  summary: string
}

export interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description: string
  percentage?: string
  cgpa?: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  link?: string
}

export interface ResumeData {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    location: string
    summary: string
  }
  experience: Experience[]
  education: Education[]
  skills: string[]
  projects: Project[]
} 