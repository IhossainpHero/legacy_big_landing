import connectDB from "@/app/lib/dbConnect";
import Order from "@/app/models/Order";
import { NextResponse } from "next/server";
<<<<<<< HEAD
import { sendPurchaseEvent } from "@/app/lib/fbCapi";
=======
>>>>>>> c7ea1f04b3d30a9ea0fe705f3e26269e3311f3d6

// POST => create new order
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    console.log("Received order body:", body); // ⚡ debug

    const newOrder = await Order.create(body);

<<<<<<< HEAD
    // Send Purchase event to Facebook Conversions API (server-side)
    try {
      sendPurchaseEvent(newOrder);
    } catch(e){ console.warn('FB CAPI send error', e); }

=======
>>>>>>> c7ea1f04b3d30a9ea0fe705f3e26269e3311f3d6
    return NextResponse.json({
      success: true,
      data: newOrder,
      message: "✅ Order placed successfully!",
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json(
      { success: false, message: "❌ Failed to place order." },
      { status: 500 }
    );
  }
}

// GET => fetch all orders
export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, message: "❌ Failed to fetch orders." },
      { status: 500 }
    );
  }
}
