import CarouselDemo from "@/components/Carousel";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
    return (
        <>
            <Navbar selectedMenuItem="Home" />
            <div className="h-[200vh] bg-gradient-to-b from-white to-gray-400">
                <div className="flex flex-row justify-center">
                    <CarouselDemo />
                </div>
                <div className="flex justify-center m-10">
                    <Card />
                </div>
            </div>
        </>
    );
}