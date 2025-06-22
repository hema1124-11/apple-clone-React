function Section() {
  return (
    <div className="w-full px-4 py-8 space-y-6">

      {/* ✅ Row 1 - Single Image (Full Width) */}
      <div className="w-full bg-gradient-to-r from-blue-200 to-blue-100 p-6 rounded-xl shadow-md">
        <div className="md:w-[70%] mx-auto text-center md:text-left">
          <img
            src="/seclap.jpg"
            alt="Row 1 - Laptop"
            className="hidden md:block w-full max-h-[480px] object-contain"
          />
          <img
            src="/sec1phone.png.jpg"
            alt="Row 1 - Mobile"
            className="block md:hidden w-full max-h-[400px] object-contain"
          />
          <div className="mt-4 flex gap-2 justify-center md:justify-start">
            <button className=" text-blue-600 px-4 py-2 rounded-xl text-sm underline
              md:hover:bg-blue-100 md:hover:text-blue-700 
              active:bg-blue-200 md:active:bg-transparent transition duration-200">
              Learn More
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm
              md:hover:bg-blue-700 md:shadow-lg 
              active:bg-blue-800 md:active:bg-blue-600 transition duration-200">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Image 2 */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl shadow-md text-center md:text-left">
          <img src="/lapgi.jpg" alt="Row 2 - Laptop" className="hidden md:block w-full max-h-[550px] object-contain" />
          <img src="/secgi.jpg" alt="Row 2 - Mobile" className="block md:hidden w-full max-h-[550px] object-contain" />
          <div className="mt-4 flex justify-center md:justify-start">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-xl text-sm
              md:hover:bg-blue-100 md:hover:text-blue-700 
              active:bg-blue-200 md:active:bg-transparent transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Image 3 */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl shadow-md text-center md:text-left">
          <img src="/lapipad.jpg" alt="Row 2 - Laptop" className="hidden md:block w-full max-h-[550px] object-contain" />
          <img src="/secipad.jpg" alt="Row 2 - Mobile" className="block md:hidden w-full max-h-[550px] object-contain" />
          <div className="mt-4 flex gap-2 justify-center md:justify-start">
            <button className=" text-blue-600 px-4 py-2 rounded-xl text-sm underline
              md:hover:bg-blue-100 md:hover:text-blue-700 
              active:bg-blue-200 md:active:bg-transparent transition duration-200">
              Learn More
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm
              md:hover:bg-blue-700 md:shadow-lg 
              active:bg-blue-800 md:active:bg-blue-600 transition duration-200">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image 4 */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl shadow-md text-center md:text-left">
          <img src="/lapblack.jpg" alt="Row 3 - Laptop" className="hidden md:block w-full max-h-[550px] object-contain" />
          <img src="/secblack.jpg" alt="Row 3 - Mobile" className="block md:hidden w-full max-h-[550px] object-contain" />
          <div className="mt-4 flex gap-2 justify-center md:justify-start">
            <button className=" text-blue-600 px-4 py-2 rounded-xl text-sm underline
              md:hover:bg-blue-100 md:hover:text-blue-700 
              active:bg-blue-200 md:active:bg-transparent transition duration-200">
              Learn More
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm
              md:hover:bg-blue-700 md:shadow-lg 
              active:bg-blue-800 md:active:bg-blue-600 transition duration-200">
              Buy
            </button>
          </div>
        </div>

        {/* Image 5 */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl shadow-md text-center md:text-left">
          <img src="/lap3.jpg" alt="Row 3 - Laptop" className="hidden md:block w-full max-h-[550px] object-contain" />
          <img src="/sec3phone.jpg" alt="Row 3 - Mobile" className="block md:hidden w-full max-h-[550px] object-contain" />
          <div className="mt-4 flex gap-2 justify-center md:justify-start">
            <button className=" text-blue-600 px-4 py-2 rounded-xl text-sm underline
              md:hover:bg-blue-100 md:hover:text-blue-700 
              active:bg-blue-200 md:active:bg-transparent transition duration-200">
              Learn More
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm
              md:hover:bg-blue-700 md:shadow-lg 
              active:bg-blue-800 md:active:bg-blue-600 transition duration-200">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Row 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image 6 */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl shadow-md text-center md:text-left">
          <img src="/lapairpods.jpg" alt="Row 4 - Laptop" className="hidden md:block w-full max-h-[550px] object-contain" />
          <img src="/secair.jpg" alt="Row 4 - Mobile" className="block md:hidden w-full max-h-[550px] object-contain" />
          <div className="mt-4 flex gap-2 justify-center md:justify-start">
            <button className=" text-blue-600 px-4 py-2 rounded-xl text-sm underline
              md:hover:bg-blue-100 md:hover:text-blue-700 
              active:bg-blue-200 md:active:bg-transparent transition duration-200">
              Learn More
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm
              md:hover:bg-blue-700 md:shadow-lg 
              active:bg-blue-800 md:active:bg-blue-600 transition duration-200">
              Buy
            </button>
          </div>
        </div>

        {/* Image 7 */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl shadow-md text-center md:text-left">
          <img src="/laptarde.jpg" alt="Row 4 - Laptop" className="hidden md:block w-full max-h-[550px] object-contain" />
          <img src="/sectrade.jpg" alt="Row 4 - Mobile" className="block md:hidden w-full max-h-[550px] object-contain" />
          <div className="mt-4 flex justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl text-sm
              md:hover:bg-blue-700 md:hover:scale-105 
              active:bg-blue-800 md:active:scale-100 transition duration-200">
              Get Your Estimate
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Section;
