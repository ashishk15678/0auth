import { NextResponse } from "next/server"

export function GET() {

  const data = [{
    id: 1,
    name: "something"
  }, {
    id: 2,
    name: "elseSomething"
  }, {
    id: 3,
    name: "add"
  }]

  return NextResponse.json(data, { status: 200 })

}
