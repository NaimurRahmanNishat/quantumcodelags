// src/components/shared/TechCard.tsx
import Image from "next/image";

interface Tech {
    name: string;
    logo: string;
    bg?: string;
}

const TechCard = ({ tech }: { tech: Tech }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-22 h-22 rounded-2xl border border-gray-200 bg-white flex items-center justify-center shadow-sm"
        style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)' }}
      >
        <Image
          src={tech.logo}
          alt={tech.name}
          width={100}
          height={100}
          className="w-11 h-11 object-contain"
        />
      </div>
      <span className="text-[13px] text-gray-600 text-center leading-tight max-w-22.5">
        {tech.name}
      </span>
    </div>
  )
}

export default TechCard;
