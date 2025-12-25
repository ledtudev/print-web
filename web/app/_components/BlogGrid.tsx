import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    date: "OCTOBER 15, 2025",
    author: "admin",
    title: "Top 10 Packaging Trends for 2025",
    excerpt: "Discover the latest innovations in sustainable packaging and how they can elevate your brand identity...",
    category: "Packaging"
  },
  {
    id: 2,
    date: "SEPTEMBER 28, 2025",
    author: "admin",
    title: "The Art of Offset Printing",
    excerpt: "Why traditional offset printing still holds the crown for high-volume, high-quality production runs...",
    category: "Printing"
  },
  {
    id: 3,
    date: "SEPTEMBER 10, 2025",
    author: "admin",
    title: "Choosing the Right Paper Stock",
    excerpt: "A comprehensive guide to understanding paper weights, textures, and finishes for your next project...",
    category: "Design"
  }
];

export function BlogGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Read Me</span>
            <h2 className="text-4xl font-black uppercase text-etchy-black">Latest News</h2>
            <div className="h-1 w-20 bg-etchy-yellow mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                         {/* Placeholder Image Effect */}
                         <div className="w-full h-full bg-gray-200 group-hover:scale-110 transition-transform duration-700"></div>
                         <div className="absolute top-4 left-4 bg-etchy-yellow text-black text-xs font-bold px-3 py-1 uppercase">
                            {post.category}
                         </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-3 uppercase">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-etchy-yellow" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="w-3 h-3 text-etchy-yellow" />
                            {post.author}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-black uppercase text-etchy-black mb-3 leading-tight group-hover:text-gray-600 transition-colors">
                        <Link href="#">{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>
                    
                    <Button variant="link" className="p-0 h-auto font-bold uppercase text-black hover:text-etchy-yellow decoration-2 underline-offset-4">
                        Read More
                    </Button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
