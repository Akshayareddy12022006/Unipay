// import { NavbarDemo } from "@/components/Navbar"
// import { AppleCardsCarouselDemo } from "@/components/Components"
import { CarouselDemo } from "@/components/Carousel"
import { Navbar } from "@/components/navbar"

export default function LandingPage() {
    return (
        <>
            <div className="h-[100vh] bg-gradient-to-b from-white to-gray-900">
                {/* <div className="p-">
                <NavbarDemo />
                </div>  */}
                <Navbar/>
                <div className="m-16 ml-0 mr-0">
                    <CarouselDemo />
                </div>
            </div>
        </>
    )
}