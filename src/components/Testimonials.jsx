// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import reviews from "../utils/reviews";
import Rating from "./Rating";

const Testimonials = () => {
  return (
    <section className="section-container px-8">
      <div className="text-center mb-12">
        <h3 className="uppercase text-lg font-semibold text-orange-500 mb-4">
          Testimonials
        </h3>
        <h2 className="capitalize text-4xl font-bold mb-4">
          Our Client Reviews
        </h2>
      </div>
      {/* review card  */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            className="bg-no-repeat bg-cover rounded-lg"
            key={index}
            style={{ backgroundImage: `url(${review.coverImg})` }}
          >
            <div className="md:h-[547px] flex justify-center items-center mb-4">
              <div className="mt-16 bm-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative">
                <img
                  src={review.image}
                  alt=""
                  className="size-20 absolute -top-8 left-1/2 rounded-full -translate-x-1/2"
                />
                <div className="mt-16 text-center">
                  <h3 className="text-lg font">{review.name}</h3>
                  <p className="mb-3 ">verified Customer</p>
                  <p className="text-gray-500 mb-4">{review.review}</p>
                  <div className="flex justify-center items-center mb-4">
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
