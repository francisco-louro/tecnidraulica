"use client";

// app/privacy-policy/page.jsx
import Link from "next/link";
import Topbar from "@/components/Topbar";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "@/lib/cookies";

export default function PrivacyPolicy() {
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

  const handleSavePreferences = () => {
    setCookieConsent(preferences);
    //setShowBanner(false);
    setShowSettings(false);
    loadScripts(preferences);
  };

  const toggleCategory = (category) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="overflow-hidden">
      {/*<Topbar className="fixed top-0 left-0 right-0 z-50" />*/}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">
          Política de Privacidade & Política de Cookies
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            1. Informações que recolhemos
          </h2>
          <p className="mb-4">
            Recolhemos informações quando utiliza o nosso site, incluindo:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Dados pessoais que fornece (nome, e-mail, etc.)
            </li>
            <li className="mb-2">
              Dados de utilização através de cookies e analytics
            </li>
            <li className="mb-2">Informações do dispositivo e do browser</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            2. Como utilizamos os cookies
          </h2>
          <p className="mb-4">
            O nosso site utiliza estas categorias de cookies:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-medium mb-2">Cookies necessários</h3>
            <p className="text-sm mb-4">
              Essencial para a funcionalidade do site. Não pode ser desativado.
            </p>

            <h3 className="font-medium mb-2">Cookies analíticos</h3>
            <p className="text-sm mb-4">
              Ajudam-nos a compreender como os visitantes interagem com o nosso
              website.
            </p>

            <h3 className="font-medium mb-2">Cookies de marketing</h3>
            <p className="text-sm">
              Utilizado para rastrear visitantes em sites para fins
              publicitários.
            </p>
          </div>
          <p>
            Pode gerir as suas preferências de cookies a qualquer momento,
            utilizando as nossas
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 text-accent"
            >
              Definições de Cookies
            </button>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Partilha de dados</h2>
          <p>
            Não vendemos os seus dados pessoais. Podemos partilhar informação
            com:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="mb-2">
              Prestadores de serviços auxiliando os nossos negócios
            </li>
            <li className="mb-2">Autoridades legais quando exigido por lei</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Os seus direitos</h2>
          <p className="mb-2">
            De acordo com o RGPD e outras leis de privacidade, tem o direito de:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Aceder aos seus dados pessoais</li>
            <li className="mb-2">Solicitar correção ou eliminação</li>
            <li className="mb-2">Objeção ao processamento</li>
            <li className="mb-2">Retirar consentimento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Contacte-nos</h2>
          <p>
            Para questões relacionadas com a privacidade, por favor contacte-nos
            através do seguinte email:{" "}
            <a
              href="mailto:tecnidraulica@tecnidraulica.com"
              className="text-accent underline"
            >
              tecnidraulica@tecnidraulica.com
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Última atualização:{" "}
            {new Date().toLocaleDateString("pt-PT", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </section>
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
      </div>
    </div>
  );
}
