"use client"

import React from "react"
import CalendarHeatmap from "react-calendar-heatmap"
import "react-calendar-heatmap/dist/styles.css"

interface HabitData {
  date: string
  count: number
}

interface HabitTrackerProps {
  habit: string
  data: HabitData[]
}

const HabitTracker: React.FC<HabitTrackerProps> = ({ habit, data }) => {
  const today = new Date()
  const startDate = new Date(today.getFullYear(), 0, 1)

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 capitalize">{habit}</h2>
      <CalendarHeatmap
        startDate={new Date('2025-01-01')}
        endDate={new Date('2025-12-31')}
        showWeekdayLabels={true}
        weekdayLabels={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        values={data}
        classForValue={(value) => {
          if (!value) {
            return "color-empty"
          }
          return `color-scale-${Math.min(value.count, 4)}`
        }}
        titleForValue={(value) => (value ? `${value.date}: ${value.count}` : "No data")}
      />
    </div>
  )
}

export default HabitTracker
