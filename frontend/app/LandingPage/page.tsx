import { NavbarDemo } from "@/components/Navbar"
import { AppleCardsCarouselDemo } from "@/components/Components"

export default function LandingPage() {
    return (
        <>
            <div className="h-[100vh] bg-gradient-to-b from-white to-gray-900">
                <div className="p-">
                <NavbarDemo />
                </div> 
                <div>
                    <AppleCardsCarouselDemo />
                </div>
            </div>
        </>
    )
}