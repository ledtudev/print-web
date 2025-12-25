import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterBanner() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-800 -skew-x-12 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-4 text-white">
                    Cách mới để in ấn <br/>
                    <span className="text-etchy-yellow">dự án thiết kế của bạn</span>
                </h2>
                <p className="text-gray-300">
                    Đăng ký nhận bản tin và nhận giảm giá 10% cho đơn hàng đầu tiên.
                </p>
            </div>
            
            <div className="w-full lg:w-auto flex-1 max-w-md">
                <div className="flex flex-col sm:flex-row gap-2">
                    <Input 
                        type="email" 
                        placeholder="Địa chỉ Email của bạn" 
                        className="bg-white/10 border border-white/20 text-white h-12 placeholder:text-gray-400 focus-visible:ring-etchy-yellow focus-visible:border-etchy-yellow"
                    />
                    <Button className="h-12 bg-etchy-yellow text-black hover:bg-white font-bold uppercase px-8 transition-colors whitespace-nowrap">
                        Đăng ký
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
