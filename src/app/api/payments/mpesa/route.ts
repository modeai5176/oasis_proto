import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, amount, note } = body

    // Basic validation
    if (!phone || !amount) {
      return NextResponse.json({ error: "Phone number and amount are required" }, { status: 400 })
    }

    // Phone number validation (basic Kenyan format)
    const phoneRegex = /^254[0-9]{9}$/
    if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
      return NextResponse.json({ error: "Invalid phone number format. Use 254XXXXXXXXX" }, { status: 400 })
    }

    // Amount validation
    if (amount < 1 || amount > 70000) {
      return NextResponse.json({ error: "Amount must be between 1 and 70,000 KES" }, { status: 400 })
    }

    // Simulate M-Pesa STK Push processing
    console.log("M-Pesa STK Push request:", {
      phone,
      amount,
      note: note || "Oasis & Mirage Donation",
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1200))

    // In production, you would:
    // 1. Get OAuth token from Safaricom
    // 2. Make STK Push request to Daraja API
    // 3. Handle callback URL for payment confirmation
    // 4. Update database with payment status

    // Simulate successful response
    const mockResponse = {
      MerchantRequestID: `mock-${Date.now()}`,
      CheckoutRequestID: `ws_CO_${Date.now()}`,
      ResponseCode: "0",
      ResponseDescription: "Success. Request accepted for processing",
      CustomerMessage: "Success. Request accepted for processing",
    }

    return NextResponse.json(mockResponse, { status: 200 })
  } catch (error) {
    console.error("M-Pesa STK Push error:", error)
    return NextResponse.json({ error: "Payment processing failed" }, { status: 500 })
  }
}
