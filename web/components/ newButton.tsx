import Link from "next/link";

export default function NewApp() {
  return (
    <>
      <Link href={"/v1/new"}>
        <button className="absolute  z-5 right-[150px] bottom-[100px]
        newbuttonclass px-14 py-4 border-none outline-none bg-white text-3xl
          " >+
        </button>
      </Link>
    </>
  )
}
