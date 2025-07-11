// components/CookieBanner.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "../lib/cookies";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = getCookieConsent();
    if (savedConsent) {
      setPreferences(savedConsent);
    } else {
      setShowBanner(true);
    }
    loadScripts(savedConsent || preferences);
  }, []);

  const loadScripts = (consent) => {
    // Load necessary scripts (always loaded)
    if (consent?.analytics) {
      // Load analytics script (e.g., Google Analytics)
      console.log("Loading analytics scripts");
    }
    if (consent?.marketing) {
      // Load marketing scripts (e.g., Facebook Pixel)
      console.log("Loading marketing scripts");
    }
  };

  const handleAcceptAll = () => {
    const newPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPrefs);
    setCookieConsent(newPrefs);
    setShowBanner(false);
    loadScripts(newPrefs);
  };

  const handleRejectAll = () => {
    const newPrefs = {
      necessary: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPrefs);
    setCookieConsent(newPrefs);
    setShowBanner(false);
    loadScripts(newPrefs);
  };

  const handleSavePreferences = () => {
    setCookieConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
    loadScripts(preferences);
  };

  const toggleCategory = (category) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
        <div className="max-w-3xl mx-auto">
          <p className="mb-3">
            Este site usa cookies da Google para oferecer os respetivos serviços
            e analisar o tráfego. As informações sobre a sua utilização deste
            site são partilhadas com a Google. Se clicar em "Aceitar", concorda
            com a utilização de cookies.{" "}
            <Link href="/privacy-policy" className="underline">
              Política de Privacidade & Política de Cookies
            </Link>{" "}
            {/*<button onClick={() => setShowSettings(true)} className="underline">
              Definições de Cookies
            </button>*/}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Aceitar todas
            </button>
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Rejeitar todas
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Definições de Cookies
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white text-gray-800 p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Definições de Cookies</h3>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Cookies Necessárias</span>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="h-4 w-4"
                />
              </div>
              <p className="text-sm text-gray-600">
                Essencial para o funcionamento do site.
              </p>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Cookies Analíticas</span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => toggleCategory("analytics")}
                  className="h-4 w-4"
                />
              </div>
              <p className="text-sm text-gray-600">
                Ajude-nos a melhorar o nosso website.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Cookies de Marketing</span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => toggleCategory("marketing")}
                  className="h-4 w-4"
                />
              </div>
              <p className="text-sm text-gray-600">
                Usado para anúncios personalizados.
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 border border-gray-300 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
