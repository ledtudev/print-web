import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Mail, Menu, Phone, Search } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { HotlineBar } from "./HotlineBar";

export function SiteHeader() {
  const navLinks = [
    { name: "TRANG CHỦ", href: "#" },
    { name: "GIỚI THIỆU", href: "#gioi-thieu" },
    { name: "SẢN PHẨM", href: "#san-pham" },
    { name: "BÁO GIÁ", href: "#bao-gia" },
    { name: "LIÊN HỆ", href: "#lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <HotlineBar />
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="#" className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tighter text-etchy-black">
              In Thủ Đô
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-black hover:text-etchy-yellow transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:text-etchy-yellow">
            <Search className="h-5 w-5" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>
          
          <Button className="bg-etchy-yellow text-black hover:bg-black hover:text-white font-bold transition-colors">
            NHẬN BÁO GIÁ
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Mở menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[320px] sm:max-w-[360px] p-0 border-l-0 flex flex-col">
              <div className="flex flex-col h-full bg-white">
                {/* Mobile Sidebar Header */}
                <div className="pt-12 pb-8 px-8 border-b">
                  <Link href="#" className="flex items-center gap-4">
                    <span className="text-2xl font-black tracking-tighter text-etchy-black">
                      In Ấn Thủ Đô
                    </span>
                  </Link>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-12 space-y-14">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 mb-6 px-1">Danh mục</h4>
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-black text-etchy-black hover:text-etchy-yellow transition-all py-4 px-1 flex items-center justify-between group"
                      >
                        {link.name}
                        <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-etchy-yellow" />
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 mb-6 px-1">Hành động</h4>
                    <Button variant="ghost" className="w-full justify-start gap-4 font-bold h-14 rounded-2xl border border-gray-100 bg-gray-50/50 px-5">
                      <Search className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Tìm kiếm...</span>
                    </Button>
                    <Button className="w-full bg-etchy-yellow border-2 border-black text-black hover:bg-black hover:text-white font-black h-14 rounded-2xl transition-all active:scale-[0.98] text-base">
                      NHẬN BÁO GIÁ
                    </Button>
                  </div>

                  {/* Mobile Contact & Social */}
                  <div className="space-y-8">
                    <div className="flex flex-col gap-6">
                      <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 px-1">Liên hệ</h4>
                      <div className="space-y-4">
                        <Link href="tel:0983828830" className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-etchy-yellow/30 transition-all group">
                          <div className="flex text-etchy-black group-hover:text-etchy-yellow transition-colors">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Hotline</span>
                            <span className="text-base font-black text-etchy-black">0983 82 88 30</span>
                          </div>
                        </Link>
                        <Link href="mailto:inthudo.vn@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-etchy-yellow/30 transition-all group">
                          <div className="flex text-etchy-black group-hover:text-etchy-yellow transition-colors">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email</span>
                            <span className="text-base font-black text-etchy-black">inthudo.vn@gmail.com</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 px-1">Kết nối</h4>
                      <div className="flex items-center gap-4 px-1">
                        <Link href="#" className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-all transform active:scale-90">
                          <FaFacebookF className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="flex items-center justify-center text-red-600 hover:text-red-800 transition-all transform active:scale-90">
                          <FaYoutube className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="flex items-center justify-center text-pink-600 hover:text-pink-800 transition-all transform active:scale-90">
                          <FaInstagram className="h-6 w-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 border-t bg-gray-50/30">
                  <p className="text-[11px] text-center font-black text-gray-400 tracking-widest">
                    © 2025 IN THỦ ĐÔ.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="h-1 w-full bg-linear-to-r from-cyan-400 via-yellow-400 to-red-500"></div>
    </header>
  );
}
