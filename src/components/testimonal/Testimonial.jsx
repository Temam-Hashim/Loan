import React from "react";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const testData = [
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Tcoder Tech",
    role: "Tester",
    img: "https://www.picsum.photos/150",
  },
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Hasen Naie",
    role: "HR Manager",
    img: "https://www.picsum.photos/151",
  },
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Sara Kemal",
    role: "Manager",
    img: "https://www.picsum.photos/152",
  },
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Kal Kal",
    role: "Sire Engineer",
    img: "https://www.picsum.photos/153",
  },
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Sai Ganesh",
    role: "Mobile Developer",
    img: "https://www.picsum.photos/154",
  },
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Abnav sinna",
    role: "Doctor",
    img: "https://www.picsum.photos/155",
  },
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Mome Mome",
    role: "Engineer",
    img: "https://www.picsum.photos/156",
  },
  {
    text: '"This is an amazing website for real time loan initiation"',
    username: "Babe Babe",
    role: "Designer",
    img: "https://www.picsum.photos/157",
  },
];
const sliderCard = () => {
  return (
    <>
      {testData.map((data) => (
        <SwiperSlide className="swiperSlide">
          <div class="testimonial">
            <div className="testimonial-lists justify-content-center align-items-center">
              <div class="testimonial-card">
                <div class="testimonial-text">{data.text}</div>
                <div class="testimonial-info">
                  <img class="user-img" src={data.img} alt="" />
                  <div class="user-info">
                    <span class="username"> {data.username}</span>
                    <span class="role"> {data.role}</span>
                    <span class="stars">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
};

function Testimonial() {
  return (
    <>
      <div class="row main">
        <div className="col-md-3"></div>
        <div className="testimonial-header text-center col-md-6">
          <h4 className="title">What client says about us</h4>
          <p class="titleText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            quia quasi! Option.
          </p>
        </div>
        <div className="col-md-3"></div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            loop: true,
          }}
          className="mySwiperDesktop"
        >
          {sliderCard()}
        </Swiper>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            loop: true,
          }}
          className="mySwiperMobile"
        >
          {sliderCard()}
        </Swiper>
      </div>
    </>
  );
}

export default Testimonial;
