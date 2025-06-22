import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

function Nav() {
  return (
    <>
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 w-full shadow-sm">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Apple Logo */}
        <a href="#" className="text-2xl">
          <FaApple />
        </a>

        {/* Nav Items (Hidden on mobile) */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-14 text-sm">
          {["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "Tv&Home", "Entertainment", "Accessories", "Support"].map((item) => (
            <li key={item}>
              <a className="hover:underline hover:underline-offset-4 hover:text-blue-600" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <ul className="flex gap-6 items-center">
          <li>
            <a className="hover:text-blue-600" href="#"><FaSearch /></a>
          </li>
          <li>
            <a className="hover:text-blue-600" href="#"><FaShoppingBag /></a>
          </li>
          <li className="block md:hidden text-lg">
            <FaBars />
          </li>
        </ul>
      </div>
      </nav>

      
      <p className="p-4 text-xs m-3 md:text-sm text-center">
        Get up to 12 months of No Cost EMI ◊ plus up to ₹8000.00 instant cashback ‡ on selected products with eligible cards.{" "}
        <a className="text-blue-700 underline hover:text-blue-900" href="#">|Shop|</a>
      </p>
      </>
    
  );
}

export default Nav;
