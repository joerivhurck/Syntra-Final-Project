import type { Course } from '@/models/Course.type'
import axios from 'axios'

const API_URL = 'https://code-coaching.dev/api/syntrapxl/courses'

const PERSONAL_ACCESS_TOKEN = '311|C8pVX3pSN8EiAS085Bof49gv8ti3bjzfmgiTE3CNa0fba522'

export function getCourses() {
  async function fetchCourses(): Promise<Course[]> {
    try {
      const response = await axios.get<any>(API_URL, {
        headers: {
          Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`
        }
      })
      console.log('Courses fetched:', response.data.courses.data)

      return response.data.courses.data
    } catch (error) {
      console.error('Error fetching courses:', error)
      throw error
    }
  }

  const fetchCourseDetails = async (id: number): Promise<Course | null> => {
    try {
      const response = await axios.get<Course>(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`
        }
      })
      if (response.data && response.data) {
        console.log(`Course with id ${id} fetched:`, response.data)
        return response.data
      } else {
        console.error('Invalid response format:', response.data)
        return null
      }
    } catch (error) {
      console.error(`Error fetching course with id ${id}:`, error)
      return null
    }
  }

  return {
    fetchCourses,
    fetchCourseDetails
  }
}
