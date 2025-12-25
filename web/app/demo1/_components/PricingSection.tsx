"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Mail, MapPin, Phone } from "lucide-react";

const printingServices = [
  { name: "In Offset", description: "Số lượng lớn, chất lượng cao" },
  { name: "In Kỹ thuật số", description: "Số lượng ít, giao nhanh" },
  { name: "In Bao bì", description: "Hộp giấy, túi giấy, bao bì sản phẩm" },
  { name: "In Tem nhãn", description: "Tem decal, tem bạc, tem chống hàng giả" },
  { name: "In Catalogue", description: "Brochure, tờ rơi, tài liệu quảng cáo" },
  { name: "In Ấn phẩm", description: "Danh thiếp, thiệp mời, bao thư" },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Liên hệ</span>
          <h2 className="text-4xl font-black uppercase text-etchy-black mb-4">
            Nhận báo giá<br/>
            <span className="text-etchy-yellow">miễn phí ngay</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Gửi yêu cầu của bạn, chúng tôi sẽ tư vấn và báo giá chi tiết trong vòng 24h
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white p-8 shadow-lg border-l-4 border-etchy-yellow">
              <h3 className="text-2xl font-black uppercase text-etchy-black mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-etchy-yellow/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-etchy-yellow" />
                  </div>
                  <div>
                    <p className="font-bold text-etchy-black">Hotline</p>
                    <a href="tel:0983828830" className="text-gray-600 hover:text-etchy-yellow transition-colors">
                      0983 82 88 30
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-etchy-yellow/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-etchy-yellow" />
                  </div>
                  <div>
                    <p className="font-bold text-etchy-black">Email</p>
                    <a href="mailto:inthudo.vn@gmail.com" className="text-gray-600 hover:text-etchy-yellow transition-colors">
                      inthudo.vn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-etchy-yellow/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-etchy-yellow" />
                  </div>
                  <div>
                    <p className="font-bold text-etchy-black">Địa chỉ</p>
                    <p className="text-gray-600">Số 123 Đường Láng, Đống Đa, Hà Nội</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-xl font-black uppercase text-etchy-black mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-etchy-yellow" />
                Dịch vụ in ấn
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {printingServices.map((service) => (
                  <div key={service.name} className="border-l-2 border-etchy-yellow pl-4">
                    <p className="font-bold text-etchy-black text-sm">{service.name}</p>
                    <p className="text-xs text-gray-500">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="bg-white p-8 shadow-xl border-t-4 border-etchy-yellow">
            <h3 className="text-2xl font-black uppercase text-etchy-black mb-6">Gửi yêu cầu báo giá</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <Input 
                  placeholder="Nhập họ tên của bạn"
                  className="h-12 border-gray-300 focus-visible:ring-etchy-yellow focus-visible:border-etchy-yellow"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="h-12 border-gray-300 focus-visible:ring-etchy-yellow focus-visible:border-etchy-yellow"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="h-12 border-gray-300 focus-visible:ring-etchy-yellow focus-visible:border-etchy-yellow"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Sản phẩm cần in <span className="text-red-500">*</span>
                </label>
                <Input 
                  placeholder="VD: Hộp giấy, Catalogue, Tem nhãn..."
                  className="h-12 border-gray-300 focus-visible:ring-etchy-yellow focus-visible:border-etchy-yellow"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Số lượng & Yêu cầu chi tiết
                </label>
                <Textarea 
                  placeholder="Nhập số lượng, kích thước, chất liệu, thời gian cần giao hàng..."
                  rows={4}
                  className="border-gray-300 focus-visible:ring-etchy-yellow focus-visible:border-etchy-yellow resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-12 bg-etchy-yellow text-black hover:bg-black hover:text-white font-bold uppercase transition-all duration-300"
              >
                Gửi yêu cầu báo giá
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Chúng tôi sẽ liên hệ lại trong vòng <span className="font-bold text-etchy-yellow">24 giờ</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
