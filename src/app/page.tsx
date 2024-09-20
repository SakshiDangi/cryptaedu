import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex justify-center mb-2">
       <Nav />
      </main>
      <div>
      <Image src="/images/data.jpg" width="1600" height="400" alt="cybersecurityImage" />
      </div>
      <main className="flex justify-center flex-1">
        <div className="items-center flex flex-col sm:flex-row gap-20 justify-end mx-auto p-10 w-full sm:py-20 sm:w-[1000px]">
          <div>
            <Image src="/images/security1.gif" width="350" height="350" alt="owl" />
          </div>
          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-3xl font-bold">Get AI generated quizzed about Cybersecurity!</h1>
            <h3 className="text-sm">Upload documents, and easily generate your quizzes with AI. Learn easily how to save yourself from cyber Crimes.</h3>
            <Button variant="neo" className="mt-4 font-extrabold text-white h-14" asChild><Link href="quizz/new">Get Started</Link></Button>
          </div>
        </div>
      </main>
    </div>
  )
}