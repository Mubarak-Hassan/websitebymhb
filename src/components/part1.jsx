export default function Part1() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center md:mx-72 mb-16">
      <div className=" border border-red-800 ">
        <img src="src/assets/banner-24.png.png" alt="" className="w-72 md:w-9/12" />
      </div>
      <div className="text-center md:text-start mt-9 w-72 md:w-1/4 border border-red-800 ">
        <h1 className="font-bold text-lg md:text-4xl">Free and Easy Way to </h1>
        <h1 className="font-bold text-lg  md:text-4xl">
          Bring Your idea to life
        </h1>
        <p className="text-gray-500 text-sm md:text-lg mt-2 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          ratione.
        </p>
        <p>
          <button className="px-3 py-2 bg-green-600 text-white hover:bg-green-400 rounded-md">
            Get started
          </button>
        </p>
      </div>
    </div>
  );
}
