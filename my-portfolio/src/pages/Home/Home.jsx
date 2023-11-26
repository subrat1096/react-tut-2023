import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Feeds } from "../../components";

const Home = () => {
  const { searchResult, fetchError, loading } = useContext(DataContext);
  return (
    <main className="w-full flex flex-col justify-center items-center">
      {loading && <h1>Loading....</h1>}
      {fetchError && <h1>{fetchError}</h1>}
      {!loading && !fetchError && searchResult.length ? (
        <Feeds />
      ) : (
        <h1>No Content to display</h1>
      )}
    </main>
  );
};

export default Home;
