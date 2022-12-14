import React, { useEffect, useState} from "react";
import { useLocation } from "react-router";
import axios from "axios";

import "./blog.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="blog">
        <Posts posts={posts} />
      </div>
    </>
  );
}
