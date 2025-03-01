import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo1.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-full h-20 fixed z-10 bg-[#7f2e50] justify-between items-center p-2 md:px-8  py-2">
        <div className="h-full flex pl-2">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-full flex-shrink-0 "
            />
          </Link>
         
        </div>
        <div className="hidden md:flex py-6 text-base font-semibold space-x-6">
          <div className="cursor-pointer p-1 text-white hover:bg-black hover:text-[#d8c7a1] rounded-md">
            <Link to="/">Home</Link>
          </div>
          <div className="cursor-pointer p-1 text-white hover:bg-black hover:text-[#d8c7a1] rounded-md">
            <Link to="/ContactUs">Pricing</Link>
          </div>
          
        </div>
        <div className="md:hidden flex items-center pr-10">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white " />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-20 right-0 w-1/2 bg-white/90 ... z-10 flex flex-col items-center space-y-6 py-8">
          <div className="cursor-pointer text-black font-semibold hover:text-[#a23e68]">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </div>
          <div className="cursor-pointer text-black font-semibold hover:text-[#a23e68]">
            <Link to="/ContactUs" onClick={toggleMenu}>
              Pricing
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
