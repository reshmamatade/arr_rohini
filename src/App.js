import "./App.scss";
import HomePage from "./pages/home";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AboutPage from "./pages/about";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ProductsPage from "./components/products/products";
import ContactPage from "./pages/contact";
import PageNotFound from "./pages/404";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <div style={{}}>
        <Routes>

          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;
