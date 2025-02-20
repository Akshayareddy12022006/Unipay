// components/QRCodeScanner.tsx
"use client";

import { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRCodeScanner() {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-code-scanner",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("Scanned QR Code:", decodedText);
        alert(`Scanned QR Code: ${decodedText}`);
        scanner.clear(); // Stop scanning after successful scan
      },
      (error) => {
        console.error("QR Code scan error:", error);
      }
    );

    scannerRef.current = scanner;

    // Cleanup on unmount
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  return <div id="qr-code-scanner" className="w-full max-w-md" />;
}