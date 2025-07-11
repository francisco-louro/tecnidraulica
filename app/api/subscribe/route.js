import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();

  // Basic validation
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 }
    );
  }

  try {
    // Add contact to Brevo
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Your Brevo list ID
        updateEnabled: true, // Update existing contacts
        doubleOptin: true, // Brevo will send confirmation email
        attributes: {
          CONSENT: true, // Track consent in Brevo
          SOURCE: "Website Newsletter",
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Ocorreu um erro na subscrição.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brevo API error:", error);
    return NextResponse.json(
      { error: "Subscription processing failed", details: error.message },
      { status: 500 }
    );
  }
}
