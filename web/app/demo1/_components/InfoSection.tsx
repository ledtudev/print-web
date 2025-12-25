import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function InfoSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Who we are */}
          <div>
            <div className="mb-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Giới thiệu</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase text-etchy-black mt-2 leading-tight">
                  Chúng tôi là ai <br /> <span className="text-gray-400">& Chúng tôi làm gì.</span>
                </h2>
            </div>
            <div className="h-1 w-20 bg-etchy-yellow mb-8"></div>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              In Thủ Đô là xưởng in sáng tạo chuyên biến ý tưởng của bạn thành hiện thực. Từ danh thiếp cao cấp đến in ấn biển quảng cáo quy mô lớn, chúng tôi kết hợp nghệ thủ công truyền thống với công nghệ hiện đại.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Giấy chất lượng cao", "Mực thân thiện môi trường", "Giao hàng trong 24h", "Dịch vụ thiết kế"].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-bold text-etchy-black">
                        <div className="w-2 h-2 bg-etchy-yellow rounded-full"></div>
                        {item}
                    </li>
                ))}
            </ul>

            <Button className="bg-black text-white hover:bg-etchy-yellow hover:text-black font-bold uppercase rounded-none px-8 h-12">
                Tìm hiểu thêm
            </Button>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
              <AccordionItem value="item-1" className="bg-white px-6 border-none shadow-sm data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="hover:no-underline py-6">
                    <span className="text-xl font-black uppercase text-etchy-black">Đặt hàng, Giao hàng & Trả hàng</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                  Chúng tôi cung cấp dịch vụ giao hàng toàn quốc với theo dõi đơn hàng. Giao hàng tiêu chuẩn mất 3-5 ngày làm việc. Chấp nhận trả hàng trong vòng 30 ngày cho sản phẩm lỗi. Sản phẩm in theo yêu cầu không được trả lại trừ khi có lỗi sản xuất.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white px-6 border-none shadow-sm data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="hover:no-underline py-6">
                    <span className="text-xl font-black uppercase text-etchy-black">Bảo trì & Công việc tùy chỉnh</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                  Cần một sản phẩm độc đáo? Đội ngũ thiết kế của chúng tôi có thể tạo các sản phẩm cắt theo mẫu, dáp bạc và hoàn thiện đặc biệt. Liên hệ với chúng tôi để nhận báo giá cho các dự án yêu cầu xử lý hoặc vật liệu đặc biệt.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white px-6 border-none shadow-sm data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="hover:no-underline py-6">
                    <span className="text-xl font-black uppercase text-etchy-black">Thiết kế & Sản xuất in ấn</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-6">
                   Chúng tôi sử dụng máy in offset và kỹ thuật số hiện đại nhất. Hướng dẫn chuẩn bị file được cung cấp để đảm bảo màu sắc của bạn chính xác như mong đợi. Chúng tôi hỗ trợ CMYK và đối màu Pantone.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
