import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg" 
      src="https://images.hindustantimes.com/img/2021/06/26/1600x900/Leopard_viral_picture_1624693839680_1624693862848.jpg" 
      alt=""
      />
      <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
          </div>
          <div className="postTitle">
              Lorem Ipsum
          </div>
          <hr />
          <span className="postDate">
              1 hr ago
          </span>
      </div>
      <p className="postDescription">
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
        Lorem Ipsum
      </p>
    </div>
  )
}
