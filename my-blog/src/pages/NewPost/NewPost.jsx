import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts, navigate, api, format } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, datetime, title: postTitle, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main className="w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold text-center">New Post</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center gap-8"
      >
        <div className="flex flex-col w-full max-w-md gap-3">
          <label htmlFor="posttitle" className="text-lg tracking-wide">
            Title:
          </label>
          <input
            type="text"
            name="posttitle"
            id="posttitle"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="text-slate-900 p-2 rounded-md outline-none w-full"
          />
          <label htmlFor="postbody" className="text-lg tracking-wide">
            Body:
          </label>
          <textarea
            type="text"
            name="postbody"
            id="postbody"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            className="text-slate-900 p-2 rounded-md outline-none w-full"
          />
        </div>
        <button
          className="bg-blue-500 w-full max-w-md p-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
