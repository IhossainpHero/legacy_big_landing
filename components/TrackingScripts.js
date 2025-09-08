"use client";
import { useEffect } from "react";

export default function TrackingScripts() {
  useEffect(() => {
    const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

    // Inject Facebook Pixel
    if (PIXEL_ID) {
      if (!window.fbq) {
        !(function(f,b,e,v,n,t,s){
          if(f.fbq) return; n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments) };
          if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[];
          t=b.createElement(e); t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      }
      try { window.fbq('init', PIXEL_ID); window.fbq('track', 'PageView'); } catch(e) {}
    }

    // Inject GTM script
    if (GTM_ID && !document.getElementById('gtm-script')) {
      const script = document.createElement('script');
      script.id = 'gtm-script';
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
      document.head.appendChild(script);
      // noscript iframe will be placed in layout as <noscript> fallback
    }
  }, []);
  return null;
}
