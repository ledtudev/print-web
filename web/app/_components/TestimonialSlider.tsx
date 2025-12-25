"use client";

import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    id: 1,
    text: "Etchy provided us with the most amazing packaging for our new product line. The quality is simply outstanding and the team was a pleasure to work with.",
    author: "Amanda Doe",
    role: "Designer",
  },
  {
    id: 2,
    text: "Fast, reliable, and incredibly creative. They took our rough ideas and turned them into a tangible, beautiful reality. Highly recommended for any print job.",
    author: "John Smith",
    role: "Marketing Director",
  },
  {
    id: 3,
    text: "The attention to detail is what sets Etchy apart. Every business card feels like a small piece of art. Will definitely be ordering again.",
    author: "Sarah Brown",
    role: "CEO, StartUp",
  }
];

export function TestimonialSlider() {
  return (
    <section className="py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gray-50 -z-10 skew-y-3"></div>

      <div className="container mx-auto px-4 text-center">
         <span className="text-sm font-bold text-gray-400 uppercase tracking-widest block mb-12">They Said</span>
         
         <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet !w-2 !h-2 !mx-1 !bg-gray-300 !opacity-100", bulletActiveClass: "!bg-etchy-yellow" }}
            className="max-w-4xl mx-auto pb-12"
         >
            {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-etchy-yellow rounded-full flex items-center justify-center mb-8 text-black">
                        <Quote className="w-8 h-8 fill-black" />
                    </div>
                    <p className="text-xl md:text-3xl font-bold text-etchy-black leading-tight italic mb-8 max-w-2xl">
                        "{t.text}"
                    </p>
                    <div className="flex flex-col items-center">
                        <cite className="not-italic font-black uppercase text-lg">{t.author}</cite>
                        <span className="text-etchy-yellow text-sm font-bold uppercase">{t.role}</span>
                    </div>
                </SwiperSlide>
            ))}
         </Swiper>
      </div>
    </section>
  );
}
