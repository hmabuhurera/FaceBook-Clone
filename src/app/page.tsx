 import Image from "next/image"
 


const Facebook = () => {
  return(
    <div 
     className="
        bg-gray-100
        h-screen
        flex
        items-center
        justify-center
        ">
        {/* First div */}
        <div
          className="text-3xl w-1/2 px-10">

          <Image src="/picture/facebook.svg" width={300} height={100} alt="Facebook logo"></Image>
         <p className="ml-8 -mt-3">
          Facebook helps you connect and share with the people in your life.
         </p>
        </div>

          {/* Second div */}

          <div className="
              bg-white flex flex-col p-2 rounded-xl w-1/4
           "
           >

            <p className="text-center text-blue-600 ">Log in to Facebook</p>
            <input className="my-2 border border-1 boder-gray-100 p-3 focus-outline outline-blue-600 rounded-md border-blue" type="email/number" placeholder="Email adress or phone number" />

            <input className="my-2 border border-1 boder-gray-100 p-3 focus-outline outline-blue-600 rounded-md" type="password" placeholder="Password" />

            <button className="bg-blue-600 text-white text-lg font-bol hover:bg-blue-700 p-2 rounded rounded-md">Log in</button>

            <button className="cursor:pointer p-2 text-blue-600 text-sm text-center hover:underline">Forgotten Password?</button>
            <span className="p-2">
              <hr />
            </span>
            <button className="p-2 my-2 bg-green-500 text-md font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">Create new account</button>

        </div>

    </div>
  )
}

export default Facebook