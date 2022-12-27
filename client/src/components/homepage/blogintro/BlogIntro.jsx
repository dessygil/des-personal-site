import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import "./blogintro.css";

export default function BlogIntro() {

  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/sixrecent");
      setRecentPosts(res.data);
    };
    getPost();
  }, []);
  useEffect(() => {
    console.log(recentPosts)
  })

  const renderBlogTopics = (node) => {
    return node.categories.map((node) => (
      <li className="topic">{node}</li>
    ));
  }

  const renderBlogPosts = () => {
    return recentPosts.map((node) => (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-head">
          
        </div>

        <div className="card-body">
          <Link to={`/post/${node._id}`} className="link">
            <h5 className="card-title" key={node._id}>
              {node.title}
            </h5>
          </Link>
          <p className="card-text my-card-text" key={node._id}>
            {node.desc}
          </p>
          <ul className="topics">{renderBlogTopics(node)}</ul>
        </div>

      </div>
    ));
  };

  return (
    <div className="blog-intro">
      <h2 className="numbered-heading"></h2>
      <div className="blog-posts">
        {recentPosts.length ? renderBlogPosts() : <p>Loading...</p>}
      </div>
    </div>
  )
}
