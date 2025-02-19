// app/qr-code/page.tsx
import QRCodeGenerator from "@/components/QRGenerator";
import QRCodeScanner from "@/components/QRScanner";

export default function QRCodePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-8">QR Code Generator and Scanner</h1>
      <div className="space-y-8">
        <QRCodeGenerator />
        <QRCodeScanner />
      </div>
    </div>
  );
}