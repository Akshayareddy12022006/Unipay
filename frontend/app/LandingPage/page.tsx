import { CarouselDemo } from "@/components/Carousel"
import { FloatingDockDemo } from "@/components/Dock"

export default function LandingPage() {
    return (
        <>
            <div className="h-[150vh] bg-gradient-to-b from-white to-gray-900">
                <div className="m-0 ml-0 mr-0">
                    <CarouselDemo />
                </div>
                <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                    <FloatingDockDemo />
                </div>
            </div>
        </>
    );
}