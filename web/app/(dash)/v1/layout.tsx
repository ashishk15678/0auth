import
Navbar from "../../../components/Navbar"

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <><div className="w-full h-full flex flex-row flex-1">
      <Navbar />
      <div className="lg:w-[250px] md:w-[250px] sm:w-0 lg:flex md:flex 
sm:hidden bg-blue-100
        ">

      </div>
      {children}</div>
    </>
  )
}
