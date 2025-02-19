"use client";

import { useEffect, useState } from "react";

// Define the type for the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    // Add event listener for beforeinstallprompt
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null); // Clear the deferred prompt
      });
    }
  };

  // Only render the button if the beforeinstallprompt event is supported and deferredPrompt is set
  return (
    deferredPrompt && (
      <button
        onClick={handleInstallClick}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Install App
      </button>
    )
  );
}