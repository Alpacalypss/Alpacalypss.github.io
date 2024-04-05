import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import History from "./components/History/history";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import HobbyImages from "./components/HobbyImages/hobbyImages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <History />
      <HobbyImages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
