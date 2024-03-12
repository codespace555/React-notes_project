import React from "react";
import { Link } from "react-router-dom";
import storage from "../appwrite/storage";
import parse from "html-react-parser";


function PostCard({ $id, title, featuredimage, content }) {
  return (
    <div className="m-2 bg-black">
      <Link to={`/post/${$id}`}>
        <div className=" rounded-md border h-80 overflow-hidden bg-slate-600">
        <img src={storage.getFilePreview(featuredimage)} alt={title} className="h-[200px] w-full rounded-md object-cover"/>
          <div className="p-4">
            <h1 className="text-lg font-semibold">{title}</h1>
            {/* <p className="mt-3 text-sm text-gray-300">
            {parse(content)}</p> */}
           
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
