import { log } from "console"
import { NextResponse } from "next/server"
import db from "../../../../db"

export async function GET(req: Request) {
  let ip = req.headers.get("X-Forwarded-For")
  log(ip)
  const res = await db.log.create({
    data: { ip, for: "admin", Date: new Date() }
  })
  log(res)
  return new NextResponse(ip)
}
