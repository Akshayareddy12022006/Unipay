import { Button } from "@/components/ui/button";
import PWAInstallButton from "@/components/PWAInstallButton"; // Import the install button

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button className="mt-4">Shadcn</Button>

      {/* Install PWA Button */}
      <PWAInstallButton />
    </div>
  );
}
