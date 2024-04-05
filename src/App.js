import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import History from "./components/History/history";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import HobbyImages from "./components/HobbyImages/hobbyImages";
import benedict from "./images/benedict.jpg";
import fire from "./images/fire.jpg";
import yard from "./images/yard.jpg";
import kafta from "./images/kafta.jpg";
import pad from "./images/pad-thai.jpg";

const slider_images = [
  { url: benedict, alt: "Cross-section of eggs benedict w/ runny yolk" },
  { url: fire, alt: "A 4 leaf clover of fire" },
  { url: yard, alt: "Flagstone path in my yard" },
  { url: kafta, alt: "A beautiful malai kafta w/ pita bread" },
  {
    url: pad,
    alt: "A countertop skillet full of pad thai, garnished with peanuts and thai basil",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <History />
      <HobbyImages slider_images={slider_images} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
