import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

function Nav() {
  return (
    <nav className="backdrop-blur-md w-full">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Apple Logo */}
        <a href="#" className="text-2xl">
          <FaApple />
        </a>


        {/* Nav Items (Hidden on mobile) */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-14 text-sm">
          <li><a className="hover:underline" href="#">Store</a></li>
          <li><a className="hover:underline" href="#">Mac</a></li>
          <li><a className="hover:underline" href="#">iPad</a></li>
          <li><a className="hover:underline" href="#">iPhone</a></li>
          <li><a className="hover:underline" href="#">Watch</a></li>
          <li><a className="hover:underline" href="#">AirPods</a></li>
          <li><a className="hover:underline" href="#">Tv&Home</a></li>
          <li><a className="hover:underline" href="#">Entertainment</a></li>
          <li><a className="hover:underline" href="#">Accessories</a></li>
          <li><a className="hover:underline" href="#">Support</a></li>
          </ul>
      <ul className="flex gap-6">
      <li><a className="hover:underline text-lg " href="#"><FaSearch /></a></li>
          <li><a className="hover:underline text-lg" href="#"><FaShoppingBag /></a></li>
        
      
        {/* Menu Icon (Mobile only) */}
        <li className="block md:hidden text-lg">
          <FaBars />
        </li>
        </ul>
        </div>

      {/* Info Line */}
      <p className="p-4 text-xs m-3 md:text-sm text-center">
        Get up to 12 months of No Cost EMI ◊ plus up to ₹8000.00 instant cashback ‡ on selected products with eligible cards.{" "}
        <a className="text-blue-700 underline" href="#">|Shop|</a>
      </p>
    </nav>
  );
}

export default Nav;
