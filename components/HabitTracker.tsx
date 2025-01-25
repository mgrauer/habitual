"use client"

import React from "react"
// import CalendarHeatmap from "react-calendar-heatmap"
// import "react-calendar-heatmap/dist/styles.css"
// import type { HabitData } from "../lib/fetchSheetData"

import { format } from "date-fns"

// Define HabitData locally since we're removing the import
interface HabitData {
  date: string
  count: number
  completed: boolean
}

interface HabitTrackerProps {
  habit: string
  data: HabitData[]
}

const HabitTracker: React.FC<HabitTrackerProps> = ({ habit, data }) => {
  const today = new Date()
  const startDate = new Date(today.getFullYear(), 0, 1)

console.log(habit)
console.log(data) 
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 capitalize">{habit}</h2>
      <div className="text-gray-800">
        {data.map((item) => (
          <div key={item.date}>
            <span className="mr-2 font-medium">
              {format(new Date(item.date), "MMM dd, yyyy")}:
            </span>
            <span>{item.completed ? " ✅" : "❌"}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HabitTracker
