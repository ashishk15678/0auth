import Image from "next/image";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <div className="w-full h-[100vh] p-8 lg:px-[100px] md:px-[100px] sm:px-[10px] flex items center justify-center">

        <div className="box h-full w-full flex lg:flex-row md:flex-row flex-col flex-1/1 " >
          <div className="">
            <Suspense>
              <Image src={"/guy.jpg"}
                alt={'avatar image'} height={520} width={450} className="
lg:h-[520px]  md:[h-520px] h-[250px] w-[450px] 
                " /> </Suspense>
          </div><form >
            <div className=" ml-[20px] 
              lg:mt-[70px] lg:mb-[100px] md:mt-[70px]  mt-0 mb-0 ">
              < p className="lg:text-3xl text-xl md:text-2xl ml-[20px] font-bolder">Create new App with us</p>
              <p className="lg:text-xl text-md text-gray-700 ml-[20px] ">it was never this easy , was it ? </p>
              <div className="lg:p-4 md:p-4 p-0 lg:mt-0 md:mt-0 mt-[10px]"><p className="  lg:text-xl text-md md:text-xl">Enter your app's name * </p>
                <input type="text" className="lg:text-xl md:text-xl sm:text-md lg:mt-[10px] md:mt-[10px] sm:mt-0 border-none inputText offset-none
                outline-none 

              "  required /></div>

              <div className="lg:ml-[20px] md:ml-[20px] sm:ml-0">
                <p className="lg:text-xl md:text-xl sm:text-md sm:mt-[10px]" > Provide your app's url</p>
                <input type="text" className="lg:text-xl text-md md:text-xl mt-[10px] border-none inputText
              offset-none outline-none
 "             />
              </div>
              <button className="animation  py-2 mt-2 text-xl text-white bg-green-400
                hover:bg-green-500 lg:w-[300px] md:w-[300px] w-[150px] ml-[20px] mt-[20px]
                "
                type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}
