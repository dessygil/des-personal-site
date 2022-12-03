import React from 'react'
import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                    <img 
                        className=""
                        src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg" 
                        alt=""
                    />
                    <h1 className="singlePostTitle">
                        Lorem Ipsum
                        <div className="singlePostEdit">
                        <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i class="singlePostIcon fa-regular fa-trash"></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor"> Author: <b>Desmond Gilmour</b></span>
                        <span className="singlePostDate"> Date: <b>Today</b></span>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste optio nisi error debitis! 
                        Quam perferendis impedit pariatur ipsam nemo adipisci suscipit, assumenda quia quas accusamus! 
                        Alias iste laudantium minus tempora?
                    </p>
                </div>
        </div>
    );
}
