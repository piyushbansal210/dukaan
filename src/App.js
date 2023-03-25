import "./App.css";
import Features from "./sections/Features";

import Header from "./sections/Header";
import Products from "./sections/Products/Products";
import Footer from "./sections/Footer";
import QuoteDisplay from "./sections/QuoteDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <QuoteDisplay />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
