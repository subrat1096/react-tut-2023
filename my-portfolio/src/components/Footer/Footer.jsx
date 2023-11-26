import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center p-3">
      <div className="container flex items-center justify-between">
        <div className="inline-block">
          <Link
            to={"/"}
            className="flex flex-col items-center whitespace-nowrap"
          >
            <h2 className=" text-blue-500 text-xl font-bold font-oswald tracking-widest">
              SUBRAT KUMAR BEHERA
            </h2>
            <span className="text-white uppercase text-xs font-oswald tracking-[0.378rem]">
              Front-end Developer
            </span>
          </Link>
        </div>

        <div className="inline-flex gap-3">
          <a href="" className="hover:text-blue-500 hover:scale-125">
            <FaFacebookF />
          </a>
          <a href="" className="hover:text-red-500 hover:scale-125">
            <FaInstagram />
          </a>
          <a href="" className="hover:text-blue-500 hover:scale-125">
            <FaLinkedinIn />
          </a>
          <a href="" className="hover:text-indigo-500 hover:scale-125">
            <FaDiscord />
          </a>
        </div>
      </div>
      <div className="container mx-auto grid grid-flow-row grid-cols-4 my-5">
        <div className="flex flex-col mx-auto text-gray-500">
          <h3 className="text-xl mb-2">Sitemap</h3>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved | Designed &
          developed by{" "}
          <span className="text-blue-500 font-bold">SUBRAT KUMAR BEHERA</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
