"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function HeroSection() {
  const slides = [
    {
      id: 1,
      subtitle: "Dịch vụ in ấn chuyên nghiệp",
      title: "In Bao Bì Sản Phẩm",
      highlight: "Cao Cấp",
      desc: "Chuyên sản xuất hộp giấy, hộp carton, túi giấy và các loại bao bì in ấn chất lượng cao tại Hà Nội",
      bgClass: "bg-slate-50",
      accentColor: "text-cyan-500",
      img: null
    },
    {
      id: 2,
      subtitle: "Giá cả cạnh tranh",
      title: "In Tem Nhãn Mác",
      highlight: "Lấy Nhanh",
      desc: "In tem decal, tem bạc, tem chống hàng giả, sticker giá rẻ với chất lượng tốt nhất tại Hà Nội",
      bgClass: "bg-orange-50",
      accentColor: "text-orange-500",
      img: null
    },
    {
      id: 3,
      subtitle: "Thiết kế miễn phí",
      title: "In Ấn Quảng Cáo",
      highlight: "Uy Tín",
      desc: "In brochure, catalogue, tờ rơi, danh thiếp, standee và các sản phẩm quảng cáo chuyên nghiệp",
      bgClass: "bg-blue-50",
      accentColor: "text-blue-500",
      img: null
    }
  ];

  return (
    <section className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        parallax={true}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet !w-3 !h-3 !mx-1 !bg-gray-300 !opacity-100", bulletActiveClass: "!bg-etchy-yellow" }}
        navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={`${slide.bgClass} relative flex items-center justify-center`}>
            {/* Background Parallax Elements */}
            <div className="absolute inset-0 w-full h-full" data-swiper-parallax="20%">
                 {/* Abstract BG Shapes */}
                 <div className={`absolute top-0 right-0 h-full w-1/2 opacity-50 -skew-x-12 mix-blend-multiply ${slide.id === 1 ? 'bg-gray-100' : slide.id === 2 ? 'bg-orange-100' : 'bg-blue-100'}`}></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
              <div className="flex flex-col items-start gap-4 max-w-3xl" data-swiper-parallax="-300">
                <div className="inline-block bg-etchy-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-black mb-4 mx-1">
                  {slide.subtitle}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-etchy-black leading-tight tracking-tight uppercase">
                  {slide.title} <br />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.id === 1 ? 'from-cyan-500 to-blue-500' : slide.id === 2 ? 'from-orange-500 to-red-500' : 'from-blue-600 to-purple-600'}`}>
                    {slide.highlight}
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  {slide.desc}
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
                  <Button
                    size="lg"
                    className="bg-etchy-yellow text-black hover:bg-yellow-400 font-bold px-8 rounded-none transition-transform hover:-translate-y-1"
                  >
                    XEM THÊM
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-black text-black hover:bg-black hover:text-white font-bold px-8 rounded-none transition-transform hover:-translate-y-1"
                  >
                    LIÊN HỆ NGAY
                  </Button>
                </div>
              </div>
            </div>

            {/* Simulated Hotspots/Floating Elements */}
             <div className="absolute bottom-20 right-20 hidden lg:block" data-swiper-parallax="-600">
                <div className="w-64 h-64 bg-white shadow-2xl rounded-full flex items-center justify-center animate-wiggle">
                    <span className="font-bold text-gray-300 transform -rotate-12">PRODUCT IMG</span>
                </div>
                 <div className="absolute top-0 right-0 bg-etchy-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    $15.00
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-etchy-yellow transition-colors cursor-pointer hidden md:flex">
        <ArrowLeft className="w-5 h-5" />
      </div>
      <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-etchy-yellow transition-colors cursor-pointer hidden md:flex">
         <ArrowRight className="w-5 h-5" />
      </div>
    </section>
  );
}
