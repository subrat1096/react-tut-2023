import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Feeds } from "../../components";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { searchResult, fetchError, loading } = useContext(DataContext);
  return (
    <main className="w-full flex flex-col justify-center items-center">
      {loading && <h1>Loading....</h1>}
      {fetchError && <h1>{fetchError}</h1>}
      {!loading && !fetchError && searchResult.length ? (
        <>
          <Feeds />
          <Link
            to={"/blogs/newpost"}
            className="bg-blue-500 w-full max-w-md text-center rounded-md p-3"
          >
            <button>Add New</button>
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-semibold my-5">No Content to display</h1>
          <Link
            to={"/blogs/newpost"}
            className="bg-blue-500 w-full max-w-md text-center rounded-md p-3"
          >
            <button>Add New</button>
          </Link>
        </>
      )}
    </main>
  );
};

export default Blogs;
