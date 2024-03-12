import React from "react";
import { Link } from "react-router-dom";
import storage from "../appwrite/storage";
import parse from "html-react-parser";


function PostCard({ $id, title, featuredimage, content }) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4 ">
          <div className="w-full justify-center mb-4">
            <div>
                <img src={storage.getFilePreview(featuredimage)} alt={title} className="rounded-xl"/>
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{parse(content)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
