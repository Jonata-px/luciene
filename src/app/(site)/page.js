import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Benefits from './components/Benefits';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id={"root"}>
      <Header/>
      <Banner/>
      <div className="background_gradient">
        <About/>
        <Benefits/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}
