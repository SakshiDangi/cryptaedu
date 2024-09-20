"use client";
import { Lock, Flame } from "lucide-react";
import { getStripe } from "@/lib/stripe-client";
import { useRouter } from "next/navigation";
import { PRICE_ID } from "@/lib/utils";

const UpgradePlan = () => {

  const onNavigateToUpgrade = async (price: string) => {
    try {
      const { sessionId } = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price })
      }).then((res) => res.json());

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.log('Subscribe Button Error', error)
    }
  }
  return (
    <button onClick={() => onNavigateToUpgrade(PRICE_ID)} className="p-10 rounded-md bg-primary hover:bg-primary-shadow sm:h-80 sm:w-80">
      <div className="flex flex-col items-center w-full h-full cursor-pointer">
        <div className="flex flex-col items-center flex-1">
          <h2 className="mb-4 text-xl font-bold">Subscribe to Upload Documents and Generate Quizzes</h2>
          <Lock className="w-12 h-12" />
        </div>
        <div className="flex flex-row items-end justify-end w-full">
          <div className="flex flex-row items-end justify-end gap-2 p-3 text-black bg-white rounded-full">
            <Flame />
            <p>Upgrade</p>
          </div>
        </div>
      </div>
    </button>
  )
};

export default UpgradePlan;