import crypto from "crypto";

export async function sendPurchaseEvent(order) {
  try {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || process.env.FB_PIXEL_ID;
    const accessToken = process.env.FB_CAPI_ACCESS_TOKEN;
    if (!pixelId || !accessToken) {
      console.warn("FB CAPI not configured. Missing pixelId or access token.");
      return null;
    }

    // Prepare user_data with hashed email/phone if available
    const user_data = {};
    if (order.phone) {
      const ph = order.phone.toString().trim();
      const phHash = crypto.createHash('sha256').update(ph).digest('hex');
      user_data.ph = phHash;
    }
    if (order.email) {
      const em = order.email.toString().trim().toLowerCase();
      const emHash = crypto.createHash('sha256').update(em).digest('hex');
      user_data.em = emHash;
    }

    const contents = (order.products || []).map(p => ({
      id: p._id || p.id,
      quantity: p.quantity || 1,
      item_price: p.price || p.offerPrice || p.item_price || 0
    }));

    const payload = {
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          event_id: (order._id || order.id || Math.random().toString(36).slice(2)),
          event_source_url: process.env.SITE_URL || "",
          action_source: "website",
          user_data,
          custom_data: {
            currency: "BDT",
            value: order.totalPrice || order.totalAmount || order.total || 0,
            contents
          }
        }
      ]
    };

    // include test event code if provided
    if (process.env.FB_TEST_EVENT_CODE) payload.test_event_code = process.env.FB_TEST_EVENT_CODE;

    const res = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    console.log("FB CAPI response:", json);
    return json;
  } catch (err) {
    console.error("sendPurchaseEvent error:", err);
    return null;
  }
}
