import { Link } from "react-router-dom";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const { width } = useWindowSize();
  console.log(width);
  return (
    <header className="flex flex-col w-full items-center p-3">
      <div>
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </div>

      <div className="container flex items-center justify-between">
        <div className="inline-flex">
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

        <div className="inline-flex">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
