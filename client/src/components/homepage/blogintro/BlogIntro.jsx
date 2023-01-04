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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderBlogTopics = (node) => {
    return node.tag_list
      .slice(0, 4)
      .map((node) => <li className="topic">{node}</li>);
  };

  const renderBlogPosts = () => {
    return recentPosts.slice(0, 6).map((node) => (
      <div className="card main-cards" style={{ width: "18rem" }}>
        <div className="card-head"></div>

        <div className="card-body">
          <a className="" href={node.url}>
            <h5 className="card-title my-card-title" key={node.id}>
              {node.title}
            </h5>
          </a>
          <p className="card-text my-card-text" key={node.id}>
            {node.description}
          </p>
          <ul className="topics">{renderBlogTopics(node)}</ul>
        </div>
      </div>
    ));
  };

  return (
    <div id="blog-intro-anchor" className="blog-intro">
      <h2 className="numbered-heading"></h2>
      <div className="blog-posts">
        {recentPosts.length ? renderBlogPosts() : <p>Loading...</p>}
      </div>
    </div>
  );
}

/* useEffect(() => {
  const getPost = async () => {
    const res = await axios.get("/sixrecent");
    setRecentPosts(res.data);
  };
  getPost();
}, []);
*/
