import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Nav = ({ categories }) => {
  const { asPath } = useRouter();

  const isCurrentPath = (url) => {
    return url === asPath;
  };

  return (
    <div>
      <nav className="topnav">
        <ul className="uk-navbar-nav">
          <li className="topnav__logo">
            <Link href="/">
              <img src="https://www.digitalent.se/_nuxt/img/digitalent-logo.75c8176.svg" />
            </Link>
          </li>
          <li
            className={`topnav__item ${
              isCurrentPath("/create") && `topnav__item--active`
            }`}
          >
            <Link as={`/create`} href="/create">
              <a className="uk-link-heading">Skapa ny</a>
            </Link>
          </li>
          {categories &&
            categories.length &&
            categories.map((category) => {
              const active = isCurrentPath(`/stages/${category.slug}`);
              return (
                <li
                  className={`topnav__item ${active && `topnav__item--active`}`}
                  key={category.id}
                >
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
