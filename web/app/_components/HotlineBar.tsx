import { Facebook, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import { InstagramLogo } from "./InstagramLogo";

export function HotlineBar() {
  return (
    <div className="hidden md:block bg-black text-white py-2 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          {/* Left: Welcome message */}
          <div className="hidden md:block text-gray-300">
            Chào mừng đến với <span className="text-etchy-yellow font-semibold">In Ấn Thủ Đô</span>
          </div>

          {/* Center: Contact info */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link 
              href="tel:0983828830" 
              className="flex items-center gap-2 hover:text-etchy-yellow transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Hotline: 0983 82 88 30</span>
            </Link>
            
            <span className="hidden sm:inline text-gray-600">|</span>
            
            <Link 
              href="mailto:inthudo.vn@gmail.com" 
              className="flex items-center gap-2 hover:text-etchy-yellow transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">inthudo.vn@gmail.com</span>
            </Link>
          </div>

          {/* Right: Social links */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs hidden lg:inline">Follow us:</span>
            <div className="flex items-center gap-2">
              <Link 
                href="#" 
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-blue-500 hover:text-blue-400" />
              </Link>
              <Link 
                href="#" 
                className="hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-red-500 hover:text-red-400" />
              </Link>
              <Link 
                href="#" 
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <InstagramLogo className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
