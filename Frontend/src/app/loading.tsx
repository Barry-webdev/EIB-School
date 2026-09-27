import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg mb-5">
        <Image
          src="/Logo EIB.jpg"
          alt="E.I.B"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Barre de chargement animée */}
      <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#c9a84c] rounded-full animate-pulse"
          style={{ animation: "loading-bar 1.4s ease-in-out infinite" }}
        />
      </div>

      <p className="mt-4 text-xs text-slate-400 tracking-widest uppercase">
        Chargement…
      </p>

      <style>{`
        @keyframes loading-bar {
          0%   { width: 0%;   margin-left: 0; }
          50%  { width: 70%;  margin-left: 15%; }
          100% { width: 0%;   margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
