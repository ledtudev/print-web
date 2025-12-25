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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              {/* Mobile Sidebar Header */}
              <div className="mb-8">
                <Link href="#" className="flex items-center gap-2">
                  <span className="text-2xl font-black tracking-tighter text-etchy-black">
                    In Thủ Đô
                  </span>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-bold hover:text-etchy-yellow transition-colors py-3 px-2 rounded hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="mt-8 pt-8 border-t flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-start gap-2 font-bold">
                  <Search className="h-4 w-4" />
                  Tìm kiếm
                </Button>
                <Button className="w-full bg-etchy-yellow text-black hover:bg-black hover:text-white font-bold">
                  NHẬN BÁO GIÁ
                </Button>
              </div>

              {/* Mobile Contact & Social */}
              <div className="mt-8 pt-8 border-t flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Thông tin liên hệ</h4>
                  <Link href="tel:0983828830" className="flex items-center gap-3 text-sm font-medium hover:text-etchy-yellow">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                      <Phone className="h-4 w-4" />
                    </div>
                    0983 82 88 30
                  </Link>
                  <Link href="mailto:inthudo.vn@gmail.com" className="flex items-center gap-3 text-sm font-medium hover:text-etchy-yellow">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                      <Mail className="h-4 w-4" />
                    </div>
                    inthudo.vn@gmail.com
                  </Link>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Mạng xã hội</h4>
                  <div className="flex items-center gap-4">
                    <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                      <Youtube className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 hover:bg-pink-100 transition-colors">
                      <InstagramLogo className="h-6 w-6" />
                    </Link>
                  </div>
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
