import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const PostPage = () => {
  const { id } = useParams();
  const { posts, setPosts, api, navigate } = useContext(DataContext);

  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postlist = posts.filter((post) => post.id !== id);
      setPosts(postlist);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <article className="container p-3">
        {post && (
          <>
            <div className="flex flex-col gap-3 my-5">
              <h2 className="text-3xl font-bold">{post.title}</h2>
              <p className="font-oswald">{post.datetime}</p>
            </div>
            <p>{post.body}</p>
            <div className="flex justify-between mt-5 w-full items-center">
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 p-3 rounded-md"
                >
                  Delete Post
                </button>
                <Link to={`/blogs/edit/${post.id}`}>
                  <button className="bg-gray-500 p-3 rounded-md">
                    Edit Post
                  </button>
                </Link>
              </div>
              <Link
                to="/"
                className="underline underline-offset-[2px] text-blue-500"
              >
                Go back to home
              </Link>
            </div>
          </>
        )}
        {!post && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl">Oops! Post Not Found</h2>
            <p>Well, that&apos;s disspointing</p>
            <p className="font-oswald text-lg">
              <Link to="/" className="underline underline-offset-[2px]">
                Go back to home
              </Link>
            </p>
          </div>
        )}
      </article>
    </main>
  );
};

export default PostPage;
