"use client"
import { useEffect } from "react"
import { logsip } from "../helpers/ipLogging"

export default function Page() {
  useEffect(() => {
    logsip()
  }, [])
  return (
    <>
      <div className="w-[100vh] h-[12vh] sticky">
      </div>
      <details>
        <summary>some data</summary>
        some other data </details>
    </>
  )
}
