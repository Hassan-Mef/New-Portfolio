import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      id="testimonials"
      className="py-28 bg-black text-white relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-purple-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          What my clients and collaborators say.
        </motion.p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-3"
            >
              <div className="testimonial-card">
                {/* Top: Profile */}
                <div className="flex items-center mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="text-lg font-semibold text-purple-400">
                      {t.name}
                    </h4>
                    <span className="text-sm text-gray-400">{t.title}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="testimonial-text">
                  “{t.quote}”
                </p>

                {/* Divider */}
                <div className="border-t border-gray-700 my-4"></div>

                {/* Footer: Company + optional badge */}
                <div className="flex justify-between items-center text-sm">
                  <span className="px-3 py-1 bg-purple-900/40 text-purple-400 rounded-lg">
                    {t.title}
                  </span>
                  <span className="px-3 py-1 border border-green-500 text-green-400 rounded-lg">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Testimonials;
