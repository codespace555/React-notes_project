import React from "react";
import { Link } from "react-router-dom";
import storage from "../appwrite/storage";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4 ">
          <div className="w-full justify-center mb-4">
            <div>
                <img src={storage.getFilePreview(featuredImage)} alt={title} className="rounded-xl"/>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
