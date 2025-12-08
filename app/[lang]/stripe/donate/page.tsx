"use client";

import { useState } from "react";
import { Button } from "@/app/(components)/ui/button";
import { Input } from "@/app/(components)/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/(components)/ui/card";
import { useParams } from "next/navigation";

export default function DonatePage() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<string>(""); // dollars as string, e.g. "10.00"
  const params = useParams();
  const lang = params?.lang as string;

  // Only show a single $5 preset to keep UI minimal
  const presets = [{ amount: 5, price_id: 'price_1SK5eG4HdUbnAvC55fBpI47p' }];

  const handleDonate = async (price_id?: string, customAmountCents?: number) => {
    setLoading(true);
    let res: any = {};
    try {
      res = await fetch("/api/donate", {
        method: "POST",
        body: JSON.stringify({ lang, price_id, amount: customAmountCents }),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.log(err);
      res = { json: async () => ({ error: "Network error" }) };
    }

    try {
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        console.error('Failed to create session', data);
        setLoading(false);
      }
    } catch (e) {
      console.error('Invalid JSON response', e);
      setLoading(false);
    }
  };

  const handleCustomDonate = () => {
    // parse amount in dollars and convert to cents
    const parsed = parseFloat(amount.replace(/[^0-9.]/g, ""));
    if (Number.isNaN(parsed) || parsed <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const cents = Math.round(parsed * 100);
    // enforce a small minimum (50 cents)
    if (cents < 50) {
      alert('Minimum donation is $0.50');
      return;
    }

    handleDonate(undefined, cents);
  };

  return (
    <div className="flex justify-center mt-10 mb-10 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Support Our Mission 💚</CardTitle>
          <CardDescription>
            Your donation helps us continue providing free resources. Thank you for your
            support.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4">
            {presets.map((item) => (
              <Button
                key={item.amount}
                onClick={() => handleDonate(item.price_id)}
                disabled={loading}
                size="lg"
                className="w-full cursor-pointer"
              >
                {loading ? "Processing..." : `Donate $${item.amount}`}
              </Button>
            ))}

            <div className="flex items-center gap-2">
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Custom amount (USD)"
                className="min-w-0 flex-1"
                inputMode="decimal"
                aria-label="Custom donation amount in USD"
              />
              <Button
                onClick={handleCustomDonate}
                disabled={loading}
                variant="outline"
                className="cursor-pointer"
              >
                Donate
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Secure payment processed by Stripe. You will be redirected to
            complete your donation.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
