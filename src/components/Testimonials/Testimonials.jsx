import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Jannatul Maowa",
    text: "I had a wonderful shopping experience at Chittagong Mart! The collection of clothing is fantastic, and I love how diverse the styles are. The 30% discount for women made it even better. The staff was friendly and helped me find exactly what I was looking for. Definitely coming back for more!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Israt Labonno",
    text: "I recently visited Chittagong Mart for the first time, and I’m so impressed! The store has a great atmosphere, and I found so many chic options. The 30% discount made it even better, and I picked up a couple of stylish dresses at amazing prices!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Tamim Iqbal",
    text: "Chittagong Mart is my new favorite fashion store! The quality of the clothes is exceptional, and the prices are very reasonable, especially with the ongoing discounts. I found stylish outfits for both work and casual wear. Highly recommend it to anyone looking for trendy fashion!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Omar Kawsar",
    text:  "I’ve been shopping at Chittagong Mart for a while, and I always find trendy clothing. The quality is great, and the staff is always helpful. The only thing I would suggest is expanding the men's section for more variety, but overall, it’s a great place to shop!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials 
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          "At Chittagong Mart, we are committed to offering high-quality products at unbeatable prices. Our goal is to provide every customer with an exceptional shopping experience and great value on all purchases. 
          </p>
          <h1>Thank you for choosing us!"</h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
