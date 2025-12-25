import { ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  { id: 1, title: "Danh thiếp", category: "Thương hiệu", color: "bg-red-200", span: "md:col-span-1" },
  { id: 2, title: "In ly sắc màu", category: "Thiết kế", color: "bg-yellow-200", span: "md:col-span-1" },
  { id: 3, title: "Bao bì sản phẩm", category: "Bao bì", color: "bg-blue-200", span: "md:col-span-1" },
  { id: 4, title: "Túi giấy", category: "Mockup", color: "bg-green-200", span: "md:col-span-2" },
  { id: 5, title: "Sách bìa cứng", category: "In ấn", color: "bg-purple-200", span: "md:col-span-1" },
  { id: 6, title: "Bìa tạp chí", category: "Xuất bản", color: "bg-indigo-300", span: "md:col-span-3" },
];

export function PortfolioGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-etchy-black mb-2">Dự án</h2>
                <div className="h-1 w-24 bg-etchy-yellow"></div>
            </div>
            <div className="flex gap-8 text-sm font-bold text-gray-400">
                <button className="text-black border-b-2 border-etchy-yellow pb-1">TẤT CẢ</button>
                <button className="hover:text-black transition-colors">THƯƠNG HIỆU</button>
                <button className="hover:text-black transition-colors">BAO BÌ</button>
                <button className="hover:text-black transition-colors">IN ẤN</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {portfolioItems.map((item) => (
            <div 
                key={item.id} 
                className={`relative group overflow-hidden ${item.span} cursor-pointer`}
            >
                {/* Placeholder Image */}
                <div className={`w-full h-full ${item.color} transition-transform duration-700 group-hover:scale-110`}></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <span className="text-etchy-yellow text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {item.category}
                    </span>
                    <h3 className="text-2xl font-black uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        {item.title}
                    </h3>
                    <Link href="#" className="mt-4 flex items-center justify-center w-10 h-10 border border-white/30 rounded-full hover:bg-etchy-yellow hover:text-black hover:border-etchy-yellow transition-all translate-y-4 group-hover:translate-y-0 duration-500 delay-200">
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
