import Features from "../sections/Features";
import Header from "../sections/Header";
import QuoteDisplay from "../sections/QuoteDisplay";
import Footer from "../sections/Footer";
import Products from "../sections/Products/Products";

function Home() {
  return (
    <div>
      <Header />
      <QuoteDisplay />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
