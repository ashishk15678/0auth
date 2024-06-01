

import { origin } from "../components/Navbar";

export default async function logip() {
  const res = await fetch(origin() + "/api/log")
  return await res.json()
}

export function logsip() {
  let item = sessionStorage.getItem("log")
  if (!item) {
    //    logip()
    sessionStorage.setItem("log", " logged")
  }
  console.log(item)
}
