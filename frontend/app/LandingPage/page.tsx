import CarouselDemo from "@/components/Carousel";
import Card from "@/components/Card";

export default function LandingPage() {
    return (
        <>
            <div className="h-[200vh] bg-gradient-to-b from-white to-gray-900">
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