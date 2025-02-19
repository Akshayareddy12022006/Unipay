"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ImageCardProps {
  title: string;
  imageSrc: string;
  linkTo: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, imageSrc, linkTo }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(linkTo)}
      className="group relative w-[300px] h-[300px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] m-5"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl transition-all duration-300 ease-in-out group-hover:shadow-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 300px) 100vw"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-2xl">
          <h3 className="text-3xl font-medium text-white flex items-center">
            {title}
            <ArrowRight className="ml-2 h-7 w-7 text-white transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
