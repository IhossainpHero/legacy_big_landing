# Updated Legacy Big Landing (Tracking-integrated)

This branch contains updates to integrate tracking:
- Facebook Pixel (client-side)
- Facebook Conversions API (server-side)
- Google Tag Manager (client-side)

## What I changed
- `components/TrackingScripts.js` — client component that injects FB Pixel + GTM.
- `app/layout.js` — imports and renders TrackingScripts and GTM noscript.
- `components/ProductCard.js` — sends ViewContent on product click.
- `components/ProductOrderForm.js` — sends AddToCart, InitiateCheckout and client-side Purchase (after order created).
- `app/lib/fbCapi.js` — helper to send server-side Purchase event to Facebook Graph API.
- `app/api/orders/route.js` — calls sendPurchaseEvent() after creating an order.
- `.env.example` — placeholders for required env vars.

## Required environment variables (.env.local)
- NEXT_PUBLIC_FB_PIXEL_ID
- FB_CAPI_ACCESS_TOKEN
- SITE_URL
- NEXT_PUBLIC_GTM_ID
- (optional) FB_TEST_EVENT_CODE

## Notes
- Keep `FB_CAPI_ACCESS_TOKEN` secret and do not commit it.
- Server-side Purchase event will be sent using `process.env.NEXT_PUBLIC_FB_PIXEL_ID` (or `process.env.FB_PIXEL_ID`).
- Client-side events use `window.fbq` and require `NEXT_PUBLIC_FB_PIXEL_ID` to be set.
- For deduplication, the server sends an `event_id` and client-side Purchase uses the returned order data.

