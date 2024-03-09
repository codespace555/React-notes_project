import React from "react";
import { Container, Logout, Logo, Button } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
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
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className='"mr-4'>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </nav>
        <ul className="flex ml-auto">
          {naItem.map((item) =>
            item.active ? (
              <li key={item.name} onClick={navigate}>
                <Button btntext={item.name} handelBtn={() => navigate(item.slug)} />
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <Logout/>
            </li>
          )}
        </ul>
      </Container>
    </header>
  );
}

export default Header;
