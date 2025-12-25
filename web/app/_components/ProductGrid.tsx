import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "HỘP GIẤY",
    category: "Bao bì sản phẩm",
    price: 50000,
    oldPrice: null,
    imageColor: "bg-red-500",
    badge: null,
  },
  {
    id: 2,
    name: "TEM NHÃN",
    category: "Tem decal",
    price: 30000,
    oldPrice: null,
    imageColor: "bg-orange-400",
    badge: "MỚI",
  },
  {
    id: 3,
    name: "STANDEE",
    category: "Quảng cáo",
    price: 150000,
    oldPrice: null,
    imageColor: "bg-blue-400",
    badge: null,
  },
  {
    id: 4,
    name: "CATALOGUE",
    category: "In ấn",
    price: 80000,
    oldPrice: 100000,
    imageColor: "bg-gray-800",
    badge: "GIẢM GIÁ",
  },
  {
    id: 5,
    name: "TÚI GIẤY",
    category: "Bao bì",
    price: 40000,
    oldPrice: null,
    imageColor: "bg-yellow-400",
    badge: null,
  },
  {
    id: 6,
    name: "BROCHURE",
    category: "In ấn",
    price: 60000,
    oldPrice: 75000,
    imageColor: "bg-cyan-500",
    badge: "GIẢM GIÁ",
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
            <div>
                <h2 className="text-3xl font-black uppercase text-etchy-black mb-2">Sản phẩm in ấn</h2>
                <div className="h-1 w-20 bg-etchy-yellow"></div>
            </div>
            {/* Search or Filter could go here */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
               <Card className="border-none shadow-none bg-transparent overflow-hidden">
                <CardContent className="p-0 relative aspect-square bg-white">
                    {/* Placeholder for Product Image - using colored divs for visual variety */}
                    <div className={`w-full h-full ${product.imageColor} opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-2xl`}>
                        {product.name}
                    </div>
                    
                    {product.badge && (
                        <span className="absolute top-4 right-4 bg-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
                            {product.badge}
                        </span>
                    )}

                    {/* Hover Action */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <Button className="bg-white text-black hover:bg-etchy-yellow hover:text-black font-bold border-none">
                            XEM CHI TIẾT
                         </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start px-0 py-4">
                    <h3 className="text-lg font-black uppercase text-etchy-black">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <div className="flex gap-2 text-sm font-bold">
                        {product.oldPrice && (
                            <span className="text-gray-300 line-through">{product.oldPrice.toLocaleString('vi-VN')}đ</span>
                        )}
                        <span className="text-gray-400">{product.price.toLocaleString('vi-VN')}đ</span>
                    </div>
                </CardFooter>
               </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
