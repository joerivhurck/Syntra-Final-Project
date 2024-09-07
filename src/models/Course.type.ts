// export Interface for related objects
export interface CourseType {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface Study_type {
  id: number
  name: string
}

export interface Duration {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface KmoTheme {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface Person {
  id: number
  name: string
}

export interface Saving {
  id: number
  name: string
  created_at: string
  updated_at: string
  pivot: {
    course_id: number
    saving_id: number
  }
}

export interface Sector {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface Location {
  name: string
}
export interface Start_dates {
  id: number
  course_id: number
  date: string
  day_id: number
  location_id: number
  created_at: string
  updated_at: string
  available_spaces: number
  location: Location
}

export interface People {
  id: number
  image: string
  name: string
}

// Main Course interface
export interface Course {
  id: number
  url: string
  title: string
  teaser: string
  created_at: string
  updated_at: string
  course_type_id: number
  details_extra_info: string
  details_for_text: string
  details_requirements_text: string | null
  details_text: string
  duration_id: number
  image: string
  is_business: number
  kmo_theme_id: number
  level_id: number | null
  price_details: any[] // Assuming it's an array of objects, needs to be defined properly if known
  price_excl: number
  price_incl: number
  program_text: string
  savings?: Saving[]
  sector_id: number
  special_properties: any[] // Assuming it's an array of objects, needs to be defined properly if known
  study_type_id: number | null
  course_type: CourseType
  study_type: Study_type
  duration: Duration
  kmo_theme: KmoTheme
  sector: Sector
  start_dates: Start_dates[]
  people: People[]
}
