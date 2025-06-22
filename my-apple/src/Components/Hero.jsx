const Hero = () => {
  return (
    <div className="relative w-[80%] mx-auto my-6 overflow-hidden md:w-full h-[400px] flex md:h-[550px] px-4 md:px-10">
      
      <video
        src="appleee.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="hidden md:block w-full h-full object-contain translate-x-10"
      />

      <div className="rounded-3xl md:hidden absolute inset-0">
        <img
          src="airpod.jpg"
          alt="Airpods Background"
          className="w-full h-[400px] rounded-3xl opacity-25 object-cover"
        />
      </div>

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-20 z-10 flex flex-col items-center space-y-5 max-w-md w-[90%]
        text-white md:text-black"
      >
        <div
          className="relative rounded-[2rem] p-7 md:p-14 text-center shadow-[0_8px_30px_rgba(0,0,0,0.2)]
          bg-blue-300 text-gray-800 bg-gradient-to-br from-blue-200 via-blue-100 to-white md:text-black md:backdrop-blur-sm md:bg-opacity-70"
        >
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug">
            Buy Mac or iPad<br />for college
          </h1>

          <div>
            <img
              src="mac1.png"
              alt="Mac"
              className="shadow-[0_3px_10px_rgb(0,0,0,0.6)] shadow-gray-500 w-12 md:w-20 absolute top-12 md:left-88 left-[93%] rotate-[-35deg]"
            />
            <img
              src="mac2.png"
              alt="Mac"
              className="w-24 md:w-38 absolute -top-5 md:left-82 left-[73%] rotate-[15deg]"
            />
          </div>
        </div>

        <div
          className="rounded-[2rem] px-3 py-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]
          bg-blue-300 text-black bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-100 md:text-black md:backdrop-blur-sm md:bg-opacity-80"
        >
          <p className="text-sm mb-1">
            with education savings
            <span className="align-super text-xs">*</span>
          </p>
          <h2 className="font-semibold text-base md:text-lg">
            🎓Choose AirPods or an eligible accessory
            <span className="align-super text-xs">¹</span>
          </h2>
        </div>

        <button
          className="px-6 md:px-8 py-2 md:py-2 border md:m-2 text-blue-600 bg-white border-white md:border-gray-400
          rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all shadow-md md:shadow-none font-medium text-sm md:text-base"
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default Hero;
