import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Post from "../Post/Post";
const Feeds = () => {
  const { searchResult } = useContext(DataContext);
  return (
    <>
      {searchResult.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feeds;
