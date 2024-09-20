import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex justify-center flex-1">
        <div className="items-center flex flex-col sm:flex-row gap-20 justify-end mx-auto p-10 w-full sm:py-20 sm:w-[1000px]">
          <div>
            <Image src="/images/owl-landing-no-bg.png" width="400" height="400" alt="owl" />
          </div>
          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-3xl font-bold">Get quizzed about Cybersecurity!</h1>
            <h3 className="text-sm">Upload documents, and easily generate your quizzes with AI. Learn easily how to save yourself from cyber Crimes.</h3>
            <Button variant="neo" className="mt-4 text-white h-14" asChild><Link href="quizz/new">Get Started</Link></Button>
          </div>
        </div>
      </main>
    </div>
  )
}