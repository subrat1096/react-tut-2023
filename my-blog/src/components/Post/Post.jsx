import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="flex flex-col w-full max-w-lg my-2 p-2">
      <Link to={`/blogs/${post.id}`}>
        <h2 className="font-bold text-2xl">{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
      <p>
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
