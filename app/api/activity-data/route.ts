import { NextResponse } from "next/server"

export async function GET() {
  // This is a mock implementation. In a real application, you would fetch this data from a database or external API.
  const activityData = generateMockActivityData()
  return NextResponse.json(activityData)
}

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
