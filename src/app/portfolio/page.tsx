import { createClient } from "@/utils/supabase/server";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Suspense } from "react";
import Loading from "./loading";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PortfolioPage() {
  const supabase = await createClient();
  
  const { data: portfolios } = await supabase
    .from("portfolio")
    .select("*")
    .order("created_at", { ascending: false });

  const webPortfolios = portfolios?.filter(p => p.category.includes("Web") || p.category.includes("App") || p.category.includes("UI")) || [];
  const videoPortfolios = portfolios?.filter(p => p.category.includes("Video")) || [];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects showcasing our expertise in web development, app creation, and video editing.
          </p>
        </div>
        
        {(!portfolios || portfolios.length === 0) ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-3xl">
            <p className="text-gray-500">New projects are currently being curated. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-16">
            {webPortfolios.length > 0 && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-accent rounded-full"></span>
                  Web Development & Apps
                </h2>
                <PortfolioGrid items={webPortfolios} />
              </div>
            )}

            {webPortfolios.length > 0 && videoPortfolios.length > 0 && (
              <div className="w-full h-px bg-white/10 my-4" />
            )}

            {videoPortfolios.length > 0 && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                  Video Editing & Creative
                </h2>
                <PortfolioGrid items={videoPortfolios} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
