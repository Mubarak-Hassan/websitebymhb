export default function Header() {
  return (
    <header className="flex justify-between items-center p-7">
      <div>
        <img
          src="../src/assets/no-projects.png"
          alt="image"
          className="w-7 inline"
        />
        <span className="font-bold text-black text-xl ml-2">TeeSpace</span>
      </div>
      <ul className="flex justify-between items-center space-x-12 ">
        <li>
          <a
            href="#"
            className="font-semibold hover:text-green-500 focus:text-green-500 transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-semibold hover:text-green-500 focus:text-green-500 transition duration-300"
          >
            TeeSpace
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-semibold hover:text-green-500 focus:text-green-500 transition duration-300"
          >
            Shop
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-semibold hover:text-green-500 focus:text-green-500 transition duration-300"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-semibold hover:text-green-500 focus:text-green-500 transition duration-300"
          >
            Pages
          </a>
        </li>
      </ul>
      <div className="flex justify-between items-center space-x-3">
        <p>
          <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black transition duration-500">
            Login
          </button>
        </p>
        <p>
          <button className="px-6 py-2 rounded-md hover:bg-black hover:text-white transition duration-500">
            Sign Up
          </button>
        </p>
      </div>
    </header>
  );
}
