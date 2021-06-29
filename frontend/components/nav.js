import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="topnav">
        <ul className="uk-navbar-nav">
          <li className="topnav__logo">
            <Link href="/">
              <img src="https://www.digitalent.se/_nuxt/img/digitalent-logo.75c8176.svg" />
            </Link>
          </li>
          {categories &&
            categories.length &&
            categories.map((category) => {
              return (
                <li className="topnav__item" key={category.id}>
                  <Link as={`/stages/${category.slug}`} href="/stages/[id]">
                    <a className="uk-link-heading">{category.name}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
