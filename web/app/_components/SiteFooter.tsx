import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 selection:bg-etchy-yellow selection:text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-black text-white">In Thủ Đô</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Chuyên cung cấp dịch vụ in ấn chất lượng cao, bao bì sản phẩm và các giải pháp in ấn cho doanh nghiệp tại Hà Nội.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-etchy-yellow transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-etchy-yellow transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-etchy-yellow transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Liên kết</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-etchy-yellow transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-etchy-yellow transition-colors">Dịch vụ</a></li>
              <li><a href="#" className="hover:text-etchy-yellow transition-colors">Bảng giá</a></li>
              <li><a href="#" className="hover:text-etchy-yellow transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Liên hệ</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-etchy-yellow shrink-0" />
                <span>Số 123 Đường Láng, Đống Đa, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-etchy-yellow shrink-0" />
                <span>0983 82 88 30</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-etchy-yellow shrink-0" />
                <span>inthudo.vn@gmail.com</span>
              </li>
            </ul>
          </div>

           {/* Column 4: Instagram/Gallery */}
           <div>
            <h3 className="text-lg font-bold uppercase mb-6">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"></div>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Công ty In Ấn Thủ Đô. Bản quyền thuộc về chúng tôi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
