import type React from "react"
import {
  eachWeekOfInterval,
  eachDayOfInterval,
  startOfYear,
  endOfYear,
  startOfWeek,
  endOfWeek,
  getMonth,
  format,
  getDay,
} from "date-fns"

interface ActivityData {
  [date: string]: number
}

interface YearCalendarProps {
  year: number
  habit: string
  activityData: ActivityData
  displayedDayLabels: ("Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun")[]
}

const getColorForActivity = (count: number, date: Date, year: number): string => {
  const isCurrentYear = date.getFullYear() === year
  if (!isCurrentYear) return "bg-zinc-200"
  if (count === 0) return "bg-zinc-500"
   else return "bg-green-500"
}

export const YearCalendar: React.FC<YearCalendarProps> = ({ year, habit, activityData, displayedDayLabels }) => {
  const startDate = startOfYear(new Date(year, 0, 1))
  const endDate = endOfYear(startDate)

  const weeks = eachWeekOfInterval(
    { start: startDate, end: endDate },
    { weekStartsOn: 1 }, // Start weeks on Monday
  )

  const allDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  // What is the 1-indexed of the next month that hasn't yet been displayed?
  var nextMonthToBeDisplayedIndex = 1

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 capitalize">{habit}</h2>
        
      <div className="flex flex-col">
        <div className="flex ml-8">
          <div className="grid grid-flow-col gap-[3px]">
              {weeks.map((week, weekIndex) => {
                const monthAtStartWeek = getMonth(startOfWeek(week, { weekStartsOn: 1 })) + 1;
                var isFirstFullWeekOfMonth = false;
                if (monthAtStartWeek == nextMonthToBeDisplayedIndex) {
                  // Display the month for the first time when we are
                  // at the first full week of the month, aligned with the data
                  // column for that week.
                  isFirstFullWeekOfMonth = true;
                  nextMonthToBeDisplayedIndex += 1
                }
                return (
                  <div key={format(week, "yyyy-MM-dd")} className="w-[10px]">
                    {isFirstFullWeekOfMonth && (
                      // This calendar math is painful. Months are 1 indexed, subtract 1 for that,
                      // and then subtract 1 again because we have already advanced to the next month to be displayed,
                      // but are only now actually displaying the month for the first full week.
                      <div className="text-xs text-gray-400 text-center">{monthNames[nextMonthToBeDisplayedIndex-2]}</div>
                    )}
                  </div>
                )
              })}
            </div>
        </div>
        <div className="flex">
          <div className="flex flex-col text-xs text-gray-400 items-end gap-[2px]">
            {allDayNames.map((day, index) => (
              <div key={day} className="h-[11px] flex items-center">
                {displayedDayLabels.includes(day) ? (
                  <span className="pr-2">{day}</span>
                ) : (
                  <span className="pr-2">&nbsp;</span>
                )}
              </div>
            ))}
          </div>
 
          <div className="grid grid-flow-col gap-[3px]">
            {weeks.map((week) => {
              const days = eachDayOfInterval({
                start: startOfWeek(week, { weekStartsOn: 1 }),
                end: endOfWeek(week, { weekStartsOn: 1 }),
              })

              return (
                <div key={format(week, "yyyy-MM-dd")} className="grid grid-rows-7 gap-[1px]">
                  {days.map((day) => {
                    const dateString = format(day, "yyyy-MM-dd")
                    const activityCount = activityData[dateString] || 0
                    return (
                      <div
                        key={dateString}
                        className={`day-cell w-[10px] h-[10px] rounded-sm ${getColorForActivity(activityCount, day, year)}`}
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

