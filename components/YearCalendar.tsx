import type React from "react"
import {
  eachWeekOfInterval,
  eachDayOfInterval,
  startOfYear,
  endOfYear,
  startOfWeek,
  endOfWeek,
  format,
  getDay,
} from "date-fns"

interface ActivityData {
  [date: string]: number
}

interface YearCalendarProps {
  year: number
  activityData: ActivityData
  displayedDayLabels: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[]
}

const getColorForActivity = (count: number): string => {
  if (count === 0) return "bg-gray-100"
  if (count < 5) return "bg-green-200"
  if (count < 10) return "bg-green-300"
  if (count < 15) return "bg-green-400"
  return "bg-green-500"
}

export const YearCalendar: React.FC<YearCalendarProps> = ({ year, activityData, displayedDayLabels }) => {
  const startDate = startOfYear(new Date(year, 0, 1))
  const endDate = endOfYear(startDate)

  const weeks = eachWeekOfInterval(
    { start: startDate, end: endDate },
    { weekStartsOn: 1 }, // Start weeks on Monday
  )

  const allDayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <div className="year-calendar">
      <h2 className="text-2xl font-bold mb-4">{year}</h2>
      <div className="flex flex-col">
        <div className="flex ml-8">
          {monthNames.map((month, index) => (
            <div key={month} className="flex-1 text-xs text-gray-400">
              {month}
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col mr-2 text-xs text-gray-400 items-end">
            {allDayNames.map((day) => (
              <div key={day} className="h-[10px] leading-[10px]">
                {displayedDayLabels.includes(day) ? day : ""}
              </div>
            ))}
          </div>
          <div className="grid grid-flow-col gap-[2px]">
            {weeks.map((week) => {
              const days = eachDayOfInterval({
                start: startOfWeek(week, { weekStartsOn: 1 }),
                end: endOfWeek(week, { weekStartsOn: 1 }),
              })

              return (
                <div key={format(week, "yyyy-MM-dd")} className="grid grid-rows-7 gap-[2px]">
                  {days.map((day) => {
                    const dateString = format(day, "yyyy-MM-dd")
                    const activityCount = activityData[dateString] || 0
                    return (
                      <div
                        key={dateString}
                        className={`day-cell w-[10px] h-[10px] rounded-sm ${getColorForActivity(activityCount)}`}
                        title={`${format(day, "MMMM d, yyyy")}: ${activityCount} activities`}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

