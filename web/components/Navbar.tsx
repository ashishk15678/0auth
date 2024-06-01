export const origin = () => { return "https://localhost:3000" }



export default async function Navbar() {


  const getData = async () => {
    const dat = await fetch("http://localhost:3000/api/getdata", { method: "GET" })
    const data = await dat.json()
    return await data
  }
  const data = await getData()

  return (
    <>
      <div className="w-[70px] h-[100vh] gap-y-6 justify-center bg-blue-200">
        {data.map((d: { name: string, key: string }) => {
          return (
            <div id={d.key}
              className="h-12 w-[50px] flex items-center
              justify-center mt-[10px] bg-blue-300 rounded-xl
              cursor-default hover:bg-blue-100 animation ml-[5px]  ">
              {Array.from(d.name.toUpperCase())[0]}
            </div>
          )
        })}
      </div>
    </>
  )
}
