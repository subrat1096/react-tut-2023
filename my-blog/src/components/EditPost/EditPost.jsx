import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../../context/DataContext";


const EditPost = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { id } = useParams();
  const { posts, setPosts, navigate, api,format } = useContext(DataContext);

  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, datetime, title: editTitle, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main className="w-full flex flex-col justify-center items-center gap-5">
      {editTitle && (
        <>
          <h1 className="text-4xl font-bold text-center">Edit Post</h1>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full items-center gap-8"
          >
            <div className="flex flex-col w-full max-w-md gap-3">
              <label htmlFor="edittitle" className="text-lg tracking-wide">
                Title:
              </label>
              <input
                type="text"
                name="edittitle"
                id="edittitle"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="text-slate-900 p-2 rounded-md outline-none w-full"
              />
              <label htmlFor="editbody" className="text-lg tracking-wide">
                Body:
              </label>
              <textarea
                type="text"
                name="editbody"
                id="editbody"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="text-slate-900 p-2 rounded-md outline-none w-full resize-y"
              />
            </div>
            <button
              className="bg-blue-500 w-full max-w-md p-2 rounded-md"
              type="submit"
              onClick={() => handleEdit(post.id)}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
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
    </main>
  );
};

export default EditPost;
