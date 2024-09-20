import UploadDoc from "../UploadDoc";
import { auth, signIn } from "@/auth";
import { getUserSubscription } from "@/actions/userSubscriptions";
import { Lock, Flame } from "lucide-react";
import { getStripe } from "@/lib/stripe-client";
import { useRouter } from "next/navigation";
import { PRICE_ID } from "@/lib/utils";
import UpgradePlan from "../UpgradePlan";
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await auth();
  // const router = useRouter();
  const userId = session?.user?.id;
  if (!userId) {
    // signIn();
    redirect('/api/auth/signin');
    return;
  }
  const subscribed: boolean | null | undefined = await getUserSubscription({ userId })

  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-col items-center flex-1 gap-4 mt-24 text-center py-11">
        {!subscribed ?
          <>
            <h2 className="mb-4 text-3xl font-bold">What do you want to be quizzed about today?</h2>
            <UploadDoc />
          </> :
          <UpgradePlan />
        }
      </main>
    </div>
  )
}

export default page;