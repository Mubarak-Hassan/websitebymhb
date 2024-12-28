import { section } from "motion/react-client";

export default function Section3() {
  return (
    <section className="mt-28 bg-purple-100 flex w-full">
      <div className="flex flex-col w-1/3">
        <img src="src/assets/Link-2.png" alt="" className="w-72" />
        <div className="flex">
          <img src="src/assets/Link-3.png" alt="" className="w-72" />
          <img src="src/assets/Link.png" alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center align-center flex-col">
        <h1 className="font-semibold text-sm md:text-6xl">
          Enjoy your vacations
        </h1>
        <h1 className="font-semibold text-sm md:text-6xl">
          in the best T-shirt
        </h1>
        <p className="text-stone-500 md:text-lg my-4 text-sm">
          T-shirt that keeps you moving
        </p>
        <div className="flex space-x-4">
        <p>
            <button className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-emerald-500">
              Shop now
            </button>
          </p>
          <p>
            <button className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-emerald-500">
              ContactUs
            </button>
          </p>
        </div>
      </div>

      <div className="flex w-1/3">
        <div className="flex flex-col space-y-11">
          <img src="src/assets/Link-4.png" alt="" />
          <img src="src/assets/Link-5.png" alt="" />
        </div>
        <div className="mt-20">
          <img src="src/assets/Link-1.png" alt="" />
        </div>
      </div>
    </section>
  );
}
