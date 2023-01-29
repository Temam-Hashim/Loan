import React from "react";
import "./Home.scss";
import Topbar from "../../components/topbar/Topbar";
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import Footer from "./../../components/footer/Footer";
import Advert from "../../components/Advert/Advert";
import Testimonial from "../../components/testimonal/Testimonial";
import Counter from "../../components/counter/Counter";

function Home() {
  <Topbar />;
  return (
    <div className="home">
      {/* top navigation */}
      <Topbar />
      <Slider />
      <Advert />
      <Services />
      <Counter />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
