import "./App.css";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Features/>
      <Recipes/>
    </div>
  );
}

export default App;
