"use client"
import { useEffect } from "react"
import { logsip } from "../helpers/ipLogging"
import { GoHomeFill } from "react-icons/go"

const navElement = [
  {
    id: 1, name: "Home", e: <GoHomeFill />
  }, {
    id: 2, name: "About", e: <GoHomeFill />
  }
]

export default function Page() {
  useEffect(() => {
    logsip()
  }, [])
  return (
    <>
      <div className="w-[100vh] h-[12vh] sticky">
        <div className="w-full flex flex-row items-start justify-center">
          {navElement.map((n) => {
            return (
              <div key={n.id} className="w-full flex flex-row ">
                <div> {n.name} {n.e} </div>

              </div>
            )
          })}</div>

        <dialog id="dialog" className="h-full w-full">
          <div className="text-rose-500 font-bolder h-4 w-4 font-bolder
            text-3xl t-[250px] r-[250px]">
            <button onClick={() => {
              const dialog: HTMLDialogElement = document.getElementById("dialog")
              dialog.close()
            }}>X</button></div>
        </dialog>
        <button onClick={() => {
          const dialog
            : HTMLDialogElement
            = document.getElementById("dialog")
          dialog.showModal()
        }}>Login</button>
      </div>
      <details>
        <summary>some data</summary>
        some other data </details>
    </>
  )
}
