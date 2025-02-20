import CarouselDemo from "@/components/Carousel";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
    return (
        <>
            <Navbar selectedMenuItem="Home" />
            <div className="h-[200vh] bg-white">
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