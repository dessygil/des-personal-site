import { React } from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.hindustantimes.com/img/2021/06/26/1600x900/Leopard_viral_picture_1624693839680_1624693862848.jpg"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            <span className="postCat">{c.name}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <p className="postDescription">{post.desc}</p>
    </div>
  );
}
