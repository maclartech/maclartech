import Image from "next/image";
import perfil from "@/assets/images/perfil/perfil1.png";

export function HeroImage() {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
            
            <Image src={perfil} alt="Profile" className="relative z-10 w-[380px] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
    );
}