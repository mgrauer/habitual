// "use client"

import HabitTracker from "../components/HabitTracker"
import { YearCalendar } from "../components/YearCalendar"
// import { useState, useEffect } from "react"

// Define the HabitData type inline for now
type HabitData = {
  date: string
  completed: boolean
}

export default async function Page() {
  const habits = ["writing", "coding", "yoga"]
  const habitData: Record<string, HabitData[]> = {}

  // Create some mock data for each habit
  for (const habit of habits) {
    // Generate last 7 days of data
    habitData[habit] = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return {
        date: date.toISOString().split('T')[0],
        completed: Math.random() > 0.5 // randomly set as completed or not
      }
    })
  }

  interface ActivityData {
    [date: string]: number
  }

  interface CalendarConfig {
    displayedDayLabels: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[]
  }

  const currentYear = new Date().getFullYear()
  // const [activityData, setActivityData] = useState<ActivityData>({})


  function generateMockActivityData() {
    const data: { [key: string]: number } = {}
    const currentYear = new Date().getFullYear()
    const startDate = new Date(currentYear, 0, 1)
    const endDate = new Date(currentYear, 11, 31)
  
    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateString = d.toISOString().split("T")[0]
      data[dateString] = Math.floor(Math.random() * 20) // Random activity count between 0 and 19
    }
  
    return data
  }

  

  // useEffect(() => {
  //   // Simulating API call to fetch activity data
  //   const fetchActivityData = async () => {
  //     // In a real application, replace this with an actual API call
  //     const response = await fetch("/api/activity-data")
  //     const data = await response.json()
  //     setActivityData(data)
  //   }

  //   fetchActivityData()
  // }, [])



  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Habitual</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="space-y-6">
              {Object.entries(habitData).map(([habit, data]) => (
                <YearCalendar key={habit}
                year={currentYear}
                habit={habit}
                activityData={generateMockActivityData()}
                displayedDayLabels={["Mon","Wed", "Fri"]}
              />
              ))}
              
            </div>
          </div>
        </div>
        

      {/* <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Activity Legend</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-[10px] h-[10px] bg-gray-100 mr-2"></div>
            <span>No activity</span>
          </div>
          <div className="flex items-center">
            <div className="w-[10px] h-[10px] bg-green-200 mr-2"></div>
            <span>1-4 activities</span>
          </div>
          <div className="flex items-center">
            <div className="w-[10px] h-[10px] bg-green-300 mr-2"></div>
            <span>5-9 activities</span>
          </div>
          <div className="flex items-center">
            <div className="w-[10px] h-[10px] bg-green-400 mr-2"></div>
            <span>10-14 activities</span>
          </div>
          <div className="flex items-center">
            <div className="w-[10px] h-[10px] bg-green-500 mr-2"></div>
            <span>15+ activities</span>
          </div>
        </div>
      </div> */}
      </main>
    </div>
  )
}
