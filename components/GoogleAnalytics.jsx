"use client"; // Mark as Client Component if using event tracking

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Suspense } from "react";

const TrackPageView = ({ gaId }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId || !window.gtag) return;
    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    window.gtag("config", gaId, { page_path: url });
  }, [pathname, searchParams, gaId]);

  return null;
};

export const GoogleAnalytics = ({ gaId }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
      <Suspense fallback={null}>
        <TrackPageView gaId={gaId} />
      </Suspense>
    </>
  );
};
