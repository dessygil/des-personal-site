import React, { useState, useEffect } from "react";

import "./blogintro.css";

export default function BlogIntro() {
  const [recentPosts, setRecentPosts] = useState([]);

  // This works but only on my hosted website
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=dessygil")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Error connecting to Dev.to API");
      })
      .then((json) => {
        setRecentPosts(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  


  const renderBlogPosts = () => {
    return recentPosts.slice(0, 6).map((node) => (
      <div className="card main-cards shadow" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="date-posted">Posted: {node.created_at.slice(0, 10)}</p>
          <a className="a-tag-no-features" href={node.url} key={node.id}>
            <h5 className="card-title my-card-title">
              {node.title}
            </h5>
            <p className="card-text my-card-text">
              {node.description}
            </p>
            <ul className="topics">
              {node.topics?.map((topic, index) => (
                <li key={`${node.id}-topic-${index}`}>{topic}</li>
              ))}
            </ul>
          </a>
          <div className="button-container">
            <button className="button-56">
              <a className="no-features" href={node.url}>
                Read more!
              </a>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div id="Blog-anchor" className="blog-intro">
      <h2 className="numbered-heading"><a className="a-tag-no-features" href="https://dev.to/dessygil">Blog Posts</a></h2>
      <div className="blog-posts">
        {recentPosts.length ? renderBlogPosts() : <p>Loading...</p>}
      </div>
    </div>
  );
}
