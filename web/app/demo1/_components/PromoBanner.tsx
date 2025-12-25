import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
             <div className="text-9xl font-black text-gray-100 absolute -top-10 -left-10 select-none z-[-1] hidden lg:block">
                OFFER
             </div>
             
             <h2 className="text-4xl md:text-5xl font-black uppercase text-etchy-black leading-tight mb-6">
               Limited Time Offer <br />
               <span className="text-etchy-yellow text-stroke-black">Hurry Up!</span>
             </h2>
             
             <p className="text-gray-500 text-lg mb-8">
               Get 20% off on all premium packaging solutions. Elevate your brand with our custom printing services.
             </p>
             
             <Button size="lg" className="bg-black text-white hover:bg-etchy-yellow hover:text-black font-bold px-8 rounded-none h-14">
                SEE MORE
             </Button>
          </div>
          
          {/* Visual Placeholder (Simulating the 'Mug/Calendar' group in Etchy) */}
          <div className="flex-1 w-full flex items-center justify-center relative">
             <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 absolute animate-pulse"></div>
             
             <div className="relative grid grid-cols-2 gap-4">
                <div className="w-40 h-48 bg-white shadow-xl rounded-lg transform -rotate-6 translate-y-8 p-4 flex items-center justify-center">
                    <span className="font-bold text-gray-300 transform rotate-6">MOCKUP</span>
                </div>
                <div className="w-40 h-48 bg-etchy-black shadow-xl rounded-lg transform rotate-3 p-4 flex items-center justify-center">
                    <span className="font-bold text-gray-600 transform -rotate-3">PRINT</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
