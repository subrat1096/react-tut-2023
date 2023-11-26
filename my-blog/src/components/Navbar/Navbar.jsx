import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Navbar = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-5 text-lg uppercase font-oswald ">
        <li>
          <Link
            to={"/"}
            className="inline-block transition-all hover:text-blue-500 hover:scale-105"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"about"}
            className="inline-block transition-all hover:text-blue-500 hover:scale-105"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"portfolio"}
            className="inline-block transition-all hover:text-blue-500 hover:scale-105"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to={"blogs"}
            className="inline-block transition-all hover:text-blue-500 hover:scale-105"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to={"contact"}
            className="inline-block transition-all hover:text-blue-500 hover:scale-105"
          >
            Contact
          </Link>
        </li>
        <li>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="hidden">
              Search Post
            </label>
            <input
              type="text"
              id="search"
              placeholder="search post"
              className="text-slate-900 rounded-md p-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
