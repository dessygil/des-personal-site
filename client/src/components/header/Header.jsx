import "./header.css";
import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
          <span className="headerTitlesSm">
            React and Node
          </span>
          <span className="headerTitlesLg">
              Blog
          </span>
          <img className="headerImg" src="https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=" alt=""/>
      </div>
    </div>
  );
}
