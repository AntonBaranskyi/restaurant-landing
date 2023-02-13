import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Recipes from "./components/Recipes/Recipes";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Features />
      <Recipes />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
