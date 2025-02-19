// components/QRCodeGenerator.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://example.com");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, text, (error) => {
        if (error) console.error(error);
      });
    }
  }, [text]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        placeholder="Enter text or URL"
      />
      <canvas ref={canvasRef} className="border border-gray-300" />
    </div>
  );
}