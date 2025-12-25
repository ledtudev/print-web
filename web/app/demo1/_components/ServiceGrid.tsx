import { Box, FileText, Layers, Package, Printer, Sticker, Tag, Wallet } from "lucide-react";

const services = [
  { name: "In bao bì sản phẩm", icon: Box },
  { name: "In tem nhãn mác", icon: Tag },
  { name: "In hộp giấy", icon: Package },
  { name: "In offset", icon: Printer },
  { name: "In brochure", icon: FileText },
  { name: "In catalogue", icon: Layers },
  { name: "In túi giấy", icon: Wallet },
  { name: "In sticker decal", icon: Sticker },
];

export function ServiceGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
            <h2 className="text-3xl font-black uppercase text-etchy-black mb-2">Dịch vụ in ấn</h2>
            <div className="h-1 w-20 bg-etchy-yellow"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-start gap-3 group cursor-pointer">
              <div className="p-3 rounded-full bg-gray-50 text-gray-400 group-hover:bg-etchy-yellow group-hover:text-black transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <span className="font-bold text-gray-500 group-hover:text-black transition-colors">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
