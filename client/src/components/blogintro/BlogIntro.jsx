import React, { useState, useEffect } from "react";

import "./blogintro.css";
import Card from "../shared/Card";

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
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPosts.slice(0, 6).map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.created_at.slice(0, 10)}
            topics={post.topics || []}
            url={post.url}
            actionButton={
              <button className="button-56">
                <a className="no-features" href={post.url}>
                  Read more!
                </a>
              </button>
            }
          />
        ))}
      </div>
    );
  };

  return (
    <section id="Blog-anchor" className="blog-intro" aria-label="Blog Posts">
      <h2 className="numbered-heading"><a className="a-tag-no-features" href="https://dev.to/dessygil" aria-label="View Dev.to Profile">Blog Posts</a></h2>
      <div className="blog-posts" role="feed" aria-label="Recent Blog Posts">
        {recentPosts.length ? renderBlogPosts() : <p role="status">Loading blog posts...</p>}
      </div>
    </section>
  );
}
