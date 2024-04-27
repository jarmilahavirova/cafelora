import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Menu } from "../components/Menu/Menu";
import { Gallery } from "../components/Gallery/Gallery";
import { Contact } from "../components/Contact/Contact";

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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
