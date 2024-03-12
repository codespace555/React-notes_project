import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../index";
import service from "../../appwrite/config";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    service.getPosts().then((post) => {
      if (post) {
        setPost(post.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center ">
        <Container>
          <div className="flex md:flex-row flex-col items-center justify-center w-full ">
            <div className="md:w-[50%]">
              <h1 className="">
                <img src="./hero-img.svg" alt="Login to read blogs" />
              </h1>
              <div className="text-2xl cursor-pointer bg-slate-800 text-gray-400 my-5 p-5 font-bold hover:text-gray-500 border rounded-lg md:hidden block ">
                <Link to="/login">Login Read Blogs</Link>
              </div>
            </div>
            <div className="text-slate-200 md:w-[50%] flex  flex-col items-center self-center bg-slate-600 rounded-lg p-10 opacity-[0.8]">
              <h2>
                Welcome to Blogweb —the place where your voice matters. With
                just a few simple steps, you can join our vibrant community of
                writers, thinkers, and storytellers.Create an Account: Sign up
                for free to unlock a world of possibilities. Simply click on the
                "Sign Up" button, fill in your details, and voila! You're
                officially a part of our family. Add Your Post: Got something to
                say? Share your thoughts, experiences, and insights with the
                world by adding your post. Our user-friendly interface makes it
                easy to compose, format, and publish your content in just a few
                clicks. Read and Engage: Dive into a treasure trove of articles,
                essays, and stories curated by our community of writers. Whether
                you're into tech, travel, fashion, or food, there's something
                here for everyone. Leave comments, ask questions, and connect
                with eaders to enrich your reading experience.
              </h2>
              <div className="text-2xl cursor-pointer bg-slate-900 hidden md:block text-gray-400 my-5 p-5 font-bold hover:text-gray-500 border rounded-lg w-80">
                <Link to="/login">Login to Read Blogs</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 ">
      <Container>
        <div className="flex flex-wrap ">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
