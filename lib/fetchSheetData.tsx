import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

export interface HabitData {
  date: string
  count: number
}

const SHEET_ID = process.env.GOOGLE_SHEET_ID
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY

if (!SHEET_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
  throw new Error("Missing environment variables for Google Sheets")
}

export async function fetchSheetData(sheetName: string): Promise<HabitData[]> {
  try {
    const serviceAccountAuth = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    })

    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    const sheet = doc.sheetsByTitle[sheetName]
    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" not found`)
    }

    const rows = await sheet.getRows()

    return rows.map((row) => ({
      date: row.Date,
      count: Number.parseInt(row.Count, 10),
    }))
  } catch (error) {
    console.error("Error fetching sheet data:", error)
    return []
  }
}
