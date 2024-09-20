"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/progressBar";
import { ChevronLeft, X } from "lucide-react";
import ResultCard from "./ResultCard";
import QuizzSubmission from "./QuizSubmission";

const questions = [
  {
    questionText: "1. What is Cyber Security?",
    answers: [
      { answerText: "1. What is Cyber Security?", isCorrect: false, id: 1 },
      { answerText: "Cyber Security provides security against cyber-terrorists", isCorrect: false, id: 2 },
      { answerText: "Cyber Security protects a system from cyber attacks", isCorrect: false, id: 3 },
      { answerText: "All of the mentioned", isCorrect: true, id: 4 }
    ]
  },
  {
    questionText: "What does cyber security protect?",
    answers: [
      { answerText: "Cyber security protects criminals", isCorrect: true, id: 1 },
      { answerText: "Cyber security protects criminals", isCorrect: false, id: 2 },
      { answerText: "Cyber security protects hackers", isCorrect: false, id: 3 },
      { answerText: "None of the mentioned", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which of the following is not a cybercrime?",
    answers: [
      { answerText: "AES", isCorrect: true, id: 1 },
      { answerText: "Malware", isCorrect: false, id: 2 },
      { answerText: "Man in the Middle", isCorrect: false, id: 3 },
      { answerText: "Malware", isCorrect: false, id: 4 }
    ]
  }
];

export default function Home() {
  const [started, setStarted] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
      return;
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
  }

  const handleAnswer = (answer: any) => {
    setSelectedAnswer(answer.id);
    const isCurrentCorrect = answer.isCorrect;
    if (isCurrentCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCurrentCorrect);
  }

  const scorePercentage: number = Math.round((score / questions.length) * 100);

  if (submitted) {
    return (
      <QuizzSubmission
        score={score}
        scorePercentage={scorePercentage}
        totalQuestions={questions.length}
      />
    )
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="top-0 z-10 w-full py-4 shadow-md position-sticky">
        <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2">
          <Button size="icon" variant="outline"><ChevronLeft /></Button>
          <ProgressBar value={(currentQuestion / questions.length) * 100} />
          <Button size="icon" variant="outline">
            <X />
          </Button>
        </header>
      </div>
      <main className="flex justify-center flex-1">
        {!started ? <h1 className="text-3xl font-bold">Welcome to the quizz page👋</h1> : (
          <div>
            <h2 className="text-3xl font-bold">{questions[currentQuestion].questionText}</h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {
                questions[currentQuestion].answers.map(answer => {
                  const variant = selectedAnswer === answer.id ? (answer.isCorrect ? "neoSuccess" : "neoDanger") : "neoOutline";
                  return (
                    <Button key={answer.id} variant={variant} size="xl" onClick={() => handleAnswer(answer)}><p className="whitespace-normal">{answer.answerText}</p></Button>
                  )
                })
              }
            </div>
          </div>
        )}
      </main>
      <footer className="relative px-6 mb-0 footer pb-9">
        <ResultCard isCorrect={isCorrect} correctAnswer={questions[currentQuestion].answers.find(answer => answer.isCorrect === true)?.answerText || ""} />
        <Button variant="neo" size="lg" onClick={handleNext}>{!started ? 'Start' : (currentQuestion === questions.length - 1) ? 'Submit' : 'Next'}</Button>
      </footer>
    </div>
  )
}