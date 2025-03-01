import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" bg-[#7f2e50] ... md:py-5 py-3 mt-3">
      <div className="flex flex-col mx-auto px-4 md:px-10 ">
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-[10%] w-[30%] mx-auto md:mx-0 mt-2 ">
            <img src={logo} alt="Company Logo" className="  rounded-full " />
          </div>
          <div className="mx-auto text-white">
            Crafting <span className="text-yellow-200"> Creativity</span>{" "}
            Designing <span className="text-yellow-200"> Success</span>{" "}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 mt-2 ">
            <div className="flex flex-col">
              <div className=" pl-2 sm:pl-4 font-serif text-xs sm:text-xl font-bold text-white "></div>
              <div className="flex flex-row pl-2 sm:pl-4 gap-2 pt-2 ">
                <div className="bg-white cursor-pointer p-2 rounded-full hover:bg-black hover:text-white">
                  <a href="https://www.instagram.com/thenetanagri.app/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="bg-white cursor-pointer p-2 rounded-full hover:bg-black hover:text-white">
                  <a href="https://m.facebook.com/thenetanagri/">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-white md:pl-96  ">
              <div className="flex gap-2">
                <CgMail className="text-2xl" />
                <p className="text-xs md:text-base">
                  thenetanagri.com@gmail.com
                </p>
              </div>
              <div className="flex gap-2">
                <MdOutlinePhone className="text-2xl" />
                <p className="text-xs md:text-base">+91 8821909217</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white text-xs md:text-base pt-4">
          <Link to={"https://sanjivani.vercel.app/"}>
            ©2025 The NetaNagri. All rights reserved.|
            <span className="underline underline-offset-1">Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
