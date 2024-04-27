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
    <Header showMenu={true} />
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

document.querySelectorAll(".drink__controls").forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const id = event.target.dataset.id;

    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ op: "replace", path: "/ordered", value: true }]),
    });
    window.location.reload();
  });
});
