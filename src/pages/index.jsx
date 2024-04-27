import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Menu } from "../components/Menu/Menu";
import { Gallery } from "../components/Gallery/Gallery";
import { Contact } from "../components/Contact/Contact";

const response = await fetch("http://localhost:4000/api/drinks");
const json = await response.json();
const drinks = json.data;

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

document.querySelector(".nav-btn").addEventListener("click", () => {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed");
});

document.querySelector(".rollout-nav").addEventListener("click", () => {
  document.querySelector(".rollout-nav").classList.add("nav-closed");
});
