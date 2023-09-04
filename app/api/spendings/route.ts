import { env } from "@/utils/env";
import { FormType, formSchema } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let parsedData: FormType;
  try {
    const data = await req.json();
    parsedData = formSchema.parse(data);
  } catch (error) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 500 });
  }

  const {
    description,
    amount: amountStr,
    currency,
  } = parsedData;

  const amount = parseFloat(amountStr);
  if (isNaN(amount)) {
    return NextResponse.json({ error: "Amount is not a number" }, { status: 500 });
  }

  try {
    const res = await fetch(env("URL"), {
      method: 'POST',
      body: JSON.stringify({
        description,
        amount,
        currency,
        spent_at: new Date().toISOString(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: "Can not post data" }, { status: 500 });
  }
}
