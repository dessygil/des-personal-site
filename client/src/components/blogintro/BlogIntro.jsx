
import React, { useState, useEffect } from "react";
import ContentWrapper from "../shared/ContentWrapper";
import "./blog-posts-preview.css";

const BlogPostsPreview = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=dessygil");
        if (!response.ok) {
          throw new Error("Error connecting to Dev.to API");
        }
        const data = await response.json();
        setRecentPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const renderBlogPosts = () => {
    return recentPosts.slice(0, 6).map((post) => (
      <ContentWrapper key={post.id}>
        <div className="blog-post-card">
          <p className="post-date">Posted: {post.created_at.slice(0, 10)}</p>
          <a className="blog-post-link" href={post.url}>
            <h5 className="blog-post-title">{post.title}</h5>
            <p className="blog-post-description">{post.description}</p>
            <ul className="blog-post-topics">
              {post.topics?.map((topic, index) => (
                <li key={`${post.id}-topic-${index}`}>{topic}</li>
              ))}
            </ul>
          </a>
          <div className="action-container">
            <a href={post.url} className="read-more-button">
              Read more
            </a>
          </div>
        </div>
      </ContentWrapper>
    ));
  };

  return (
    <section id="blog-section" className="blog-posts-section" aria-label="Blog Posts">
      <h2 className="section-heading">
        <a href="https://dev.to/dessygil" className="blog-header-link">
          Blog Posts
        </a>
      </h2>
      <div className="blog-posts-grid" role="feed" aria-label="Recent Blog Posts">
        {recentPosts.length ? renderBlogPosts() : <p className="loading-text">Loading blog posts...</p>}
      </div>
    </section>
  );
};

export default BlogPostsPreview;
