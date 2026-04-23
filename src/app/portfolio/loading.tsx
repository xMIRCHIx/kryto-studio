export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-white/10 animate-pulse mx-auto rounded-lg mb-4"></div>
          <div className="h-4 w-96 bg-white/5 animate-pulse mx-auto rounded-lg"></div>
        </div>
        
        <div className="space-y-16">
          <div>
            <div className="h-8 w-64 bg-white/10 animate-pulse rounded-lg mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white/[0.02] rounded-3xl overflow-hidden border border-white/5 flex flex-col h-80 animate-pulse">
                  <div className="h-48 bg-white/5 w-full"></div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="h-4 w-24 bg-white/10 rounded mb-3"></div>
                      <div className="h-6 w-3/4 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
