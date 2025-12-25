import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Mail, Menu, Phone, Search, Youtube } from "lucide-react";
import Link from "next/link";
import { HotlineBar } from "./HotlineBar";
import { InstagramLogo } from "./InstagramLogo";

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
            <SheetContent side="right" className="w-full max-w-[320px] sm:max-w-[400px] p-0 border-l-0">
              <div className="flex flex-col h-full bg-white">
                {/* Mobile Sidebar Header */}
                <div className="p-6 border-b">
                  <Link href="#" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-etchy-yellow text-black font-black text-xl">
                      T
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-etchy-black">
                      In Thủ Đô
                    </span>
                  </Link>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-1">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-2">Danh mục</h4>
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-base font-bold text-etchy-black hover:text-etchy-yellow hover:translate-x-1 transition-all py-3 px-3 rounded-xl hover:bg-gray-50 flex items-center justify-between group"
                      >
                        {link.name}
                        <div className="h-1.5 w-1.5 rounded-full bg-etchy-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-2">Hành động</h4>
                    <Button variant="ghost" className="w-full justify-start gap-4 font-bold h-12 rounded-xl border border-gray-100 bg-gray-50/50">
                      <Search className="h-5 w-5 text-gray-400" />
                      Tìm kiếm
                    </Button>
                    <Button className="w-full bg-etchy-yellow text-black hover:bg-black hover:text-white font-black h-12 shadow-lg shadow-etchy-yellow/20 rounded-xl transition-all active:scale-95">
                      NHẬN BÁO GIÁ
                    </Button>
                  </div>

                  {/* Mobile Contact & Social */}
                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-2">Liên hệ</h4>
                      <div className="space-y-3">
                        <Link href="tel:0983828830" className="flex items-center gap-4 p-3 rounded-xl bg-gray-50/50 border border-transparent hover:border-etchy-yellow/30 transition-all group">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-etchy-black group-hover:bg-etchy-yellow group-hover:text-black transition-colors">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Hotline</span>
                            <span className="text-sm font-black text-etchy-black">0983 82 88 30</span>
                          </div>
                        </Link>
                        <Link href="mailto:inthudo.vn@gmail.com" className="flex items-center gap-4 p-3 rounded-xl bg-gray-50/50 border border-transparent hover:border-etchy-yellow/30 transition-all group">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-etchy-black group-hover:bg-etchy-yellow group-hover:text-black transition-colors">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Email</span>
                            <span className="text-sm font-black text-etchy-black">inthudo.vn@gmail.com</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-2">Kết nối</h4>
                      <div className="flex items-center gap-3 px-2">
                        <Link href="#" className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                          <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all hover:-translate-y-1">
                          <Youtube className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1">
                          <InstagramLogo className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t mt-auto bg-gray-50/30">
                  <p className="text-[10px] text-center font-bold text-gray-400 tracking-wider">
                    © 2025 IN THỦ ĐÔ. ALL RIGHTS RESERVED.
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
