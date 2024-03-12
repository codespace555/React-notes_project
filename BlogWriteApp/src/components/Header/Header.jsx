import React, { useCallback, useEffect, useState } from "react";
import { Container, Logout, Logo } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [isOpen, setOpen] = useState(false)
  // console.log(authStatus)
  const navigate = useNavigate();
  const naItem = [
    { name: "Home", slug: "/", active: true },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  
  return (
    <header className="h-20 shadow bg-gray-400 relative w-full  flex justify-center items-center">
      <Container>
        <nav className="flex flex-wrap  justify-between">
          <div className=''>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <button className="md:hidden " >
          <Hamburger toggled={isOpen} toggle={setOpen} /> 
          </button>
       
{
  isOpen?(
    <ul className="md:hidden  absolute top-20  right-0 flex flex-col rounded-md h-auto py-10 w-full px-5 bg-slate-600 " >
    {naItem.map((item) =>
      item.active ? (
        <li key={item.name} >
           <button
          onClick={() => navigate(item.slug)}
          className='inline-block px-6  duration-200 hover:text-blue-100 rounded-full font-semibold text-xl py-5 '
          >{item.name}</button>
        </li>
      ) : null
    )}
    {authStatus && (
      <li>
        <Logout/>
      </li>
    )}
  </ul>
  ):""
}
        <ul className="md:flex ml-auto items-center justify-center flex-wrap hidden">
          {naItem.map((item) =>
            item.active ? (
              <li key={item.name} >
                 <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:text-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <Logout/>
            </li>
          )}
        </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
