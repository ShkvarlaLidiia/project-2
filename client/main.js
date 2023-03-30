import { Header } from "./components/Header/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Input } from "./components/Input";
import { Navigation } from "./components/Navigation/Navigation";
import { Link } from "./components/Link/Link";
import { fetchData } from "./hooks/fetchData";

import { render } from "./core/render";

import "./public/styles/style.css";

const main = new Main({
  tagName: "main",
  className: "main",
}).toHTML();

const footer = new Footer({
  tagName: "footer",
  className: "footer",
}).toHTML();

const links = [
  new Link({
    text: "Users",
    className: "nav-link",
    events: {
      click: () => fetchData(main, "/users"),
    },
  }).toHTML(),

  new Link({
    text: "Products",
    className: "nav-link",
    events: {
      click: () => fetchData(main, "/products"),
    },
  }).toHTML(),
];

const nav = new Navigation({}).toHTML();

nav.append(...links);

const header = new Header({}).toHTML();
header.append(new Input({ className: "input" }).toHTML());
header.append(nav);

render("#app", [header, main, footer]);
