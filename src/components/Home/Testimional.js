import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
// import Navbar from "../../components/Home/Navbar";

// import Testimonial from "../testimonial/Testimional."
const Testimional = () => {
  return (
    <>
    {/* <Navbar/> */}
      <div id="Clients " style={{ marginTop: "200px" }}>
        <div className="text-white text-center ">
          <p>Client's Thoughts?</p>
          <h1>
            <strong>Testimonial</strong>
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-4"
        >
          <SwiperSlide>
            <div
              id="Clients"
              className="container mt-4 d-flex justify-content-center"
            >
              <div
                className="card border-warning mb-6 shadow-4 bg-dark"
                style={{ width: "32rem" }}
              >
                <div className="container d-flex justify-content-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    className="rounded-circle shadow-4"
                    style={{ width: "150px" }}
                    alt="Avatar"
                  />
                </div>
                <div className="text-center text-white">
                  <h4 className="text-white text-center">Noshad Rathore</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod <br />
                    voluptatibus, dolor obcaecati voluptatem fugiat optio nobis,{" "}
                    <br />
                    consequatur ipsa mollitia perspiciatis voluptas. Tempore,
                    aperiam <br />
                    velit?
                  </p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star-half-stroke"
                    style={{ color: "#f0df28" }}
                  ></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container  d-flex justify-content-center"
              // style={{ marginTop: "200px" }}
            >
              <div
                className="card border-warning mb-3 shadow-4 bg-dark"
                style={{ width: "32rem" }}
              >
                <div className="container d-flex justify-content-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    className="rounded-circle shadow-4"
                    style={{ width: "150px" }}
                    alt="Avatar"
                  />
                </div>
                <div className="text-center text-white">
                  <h4 className="text-white text-center">Noshad Rathore</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod <br />
                    voluptatibus, dolor obcaecati voluptatem fugiat optio nobis,{" "}
                    <br />
                    consequatur ipsa mollitia perspiciatis voluptas. Tempore,
                    aperiam <br />
                    velit?
                  </p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star-half-stroke"
                    style={{ color: "#f0df28" }}
                  ></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container  d-flex justify-content-center"
              // style={{ marginTop: "200px" }}
            >
              <div
                className="card border-warning mb-3 shadow-4 bg-dark"
                style={{ width: "32rem" }}
              >
                <div className="container d-flex justify-content-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    className="rounded-circle shadow-4"
                    style={{ width: "150px" }}
                    alt="Avatar"
                  />
                </div>
                <div className="text-center text-white">
                  <h4 className="text-white text-center">Noshad Rathore</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod <br />
                    voluptatibus, dolor obcaecati voluptatem fugiat optio nobis,{" "}
                    <br />
                    consequatur ipsa mollitia perspiciatis voluptas. Tempore,
                    aperiam <br />
                    velit?
                  </p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star-half-stroke"
                    style={{ color: "#f0df28" }}
                  ></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="container  d-flex justify-content-center"
              // style={{ marginTop: "200px" }}
            >
              <div
                className="card border-warning mb-3 shadow-4 bg-dark"
                style={{ width: "32rem" }}
              >
                <div className="container d-flex justify-content-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    className="rounded-circle shadow-4"
                    style={{ width: "150px" }}
                    alt="Avatar"
                  />
                </div>
                <div className="text-center text-white">
                  <h4 className="text-white text-center">Noshad Rathore</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod <br />
                    voluptatibus, dolor obcaecati voluptatem fugiat optio nobis,{" "}
                    <br />
                    consequatur ipsa mollitia perspiciatis voluptas. Tempore,
                    aperiam <br />
                    velit?
                  </p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#f0df28" }}
                  ></i>
                  <i
                    className="fa-solid fa-star-half-stroke"
                    style={{ color: "#f0df28" }}
                  ></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Testimional;
