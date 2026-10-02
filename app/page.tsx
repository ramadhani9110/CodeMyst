"use client";

import { useState } from "react";

type Lesson = {
  title: string;
  subtitle: string;
  explanation: string;
  code?: string;
  points?: string[];
};

const lessons: Lesson[] = [
  {
    title: "What is a Variable?",
    subtitle: "A variable stores information.",
    explanation:
      "A variable is a named storage place used by a program to keep information. The value stored inside a variable can be used later and can also change.",
    code: "age = 18",
    points: [
      "age → variable name",
      "18 → stored value",
      "The program can use the value later.",
    ],
  },
  {
    title: "Variable Names",
    subtitle: "Give variables meaningful names.",
    explanation:
      "A good variable name tells us what information is stored inside it. Meaningful names make code easier to understand.",
    code: 'age = 18\nname = "Alex"\nscore = 100',
    points: [
      "age stores an age.",
      "name stores a name.",
      "score stores a score.",
    ],
  },
  {
    title: "Values Can Change",
    subtitle: "Variables can hold new values.",
    explanation:
      "A variable does not always have to keep the same value. We can assign a new value to the same variable.",
    code: "age = 18\nage = 19\nage = 20",
    points: [
      "The variable name stays age.",
      "The stored value changes.",
      "The latest value is 20.",
    ],
  },
  {
    title: "Different Information",
    subtitle: "Variables can store different kinds of information.",
    explanation:
      "Programs work with different types of information. A variable can represent numbers, text, or true/false information.",
    code: 'age = 18\nname = "Alex"\nisStudent = true',
    points: [
      "18 → number",
      '"Alex" → text',
      "true → true/false value",
    ],
  },
  {
    title: "Real Coding Example",
    subtitle: "Variables work together in real programs.",
    explanation:
      "A game can use multiple variables to store information about a player.",
    code: 'playerName = "Alex"\nlevel = 1\ncoins = 50',
    points: [
      "playerName stores the player's name.",
      "level stores the current level.",
      "coins stores the number of coins.",
    ],
  },
];

type PracticeQuestion = {
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  explanation: string;
  options: string[];
  correctAnswer: string;
};

const practiceQuestions: PracticeQuestion[] = [
  {
    difficulty: "Easy",
    question: "Which one is the variable name?",
    options: ["18", "age", "100", "25"],
    correctAnswer: "age",
    explanation:
      "Correct! In age = 18, 'age' is the variable name and 18 is the stored value.",
  },
  {
   difficulty: "Easy",  
    question: 'In name = "Alex", what is the stored value?',
    options: ["name", "Alex", "=", "variable"],
    correctAnswer: "Alex",
    explanation:
      'Correct! "Alex" is the value stored inside the variable name.',
  },
  {
    difficulty: "Medium",
    question: "What is the latest value of age?",
    options: ["18", "19", "20", "21"],
    correctAnswer: "20",
    explanation:
      "Correct! The last assignment is age = 20, so the latest value is 20.",
  },
    {
    difficulty: "Hard",
    question: "Which variable contains the player's number of coins?",
    options: ["playerName", "level", "coins", "player"],
    correctAnswer: "coins",
    explanation:
      "Correct! In playerName, level, and coins, the variable 'coins' stores the player's coin count.",
  },
];

export default function Home() {
  const [lessonIndex, setLessonIndex] = useState(0);

  const [mode, setMode] = useState<"learning" | "practice">("learning");

  const [practiceIndex, setPracticeIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [practiceMessage, setPracticeMessage] = useState("");
  const [practiceCorrect, setPracticeCorrect] = useState(false);

  const lesson = lessons[lessonIndex];
  const practiceQuestion = practiceQuestions[practiceIndex];

  const lessonProgress = ((lessonIndex + 1) / lessons.length) * 100;

  const nextLesson = () => {
    if (lessonIndex < lessons.length - 1) {
      setLessonIndex((current) => current + 1);
    } else {
      setMode("practice");
      setPracticeIndex(0);
      setSelectedAnswer("");
      setPracticeMessage("");
      setPracticeCorrect(false);
    }
  };

  const previousLesson = () => {
    if (lessonIndex > 0) {
      setLessonIndex((current) => current - 1);
    }
  };

  const checkPracticeAnswer = () => {
    if (!selectedAnswer) {
      setPracticeMessage("Please select an answer first.");
      setPracticeCorrect(false);
      return;
    }

    if (selectedAnswer === practiceQuestion.correctAnswer) {
      setPracticeCorrect(true);
      setPracticeMessage(practiceQuestion.explanation);
    } else {
      setPracticeCorrect(false);
      setPracticeMessage(
        `Not quite. Think about what the variable stores. Try again!`
      );
    }
  };

  const nextPractice = () => {
    if (practiceIndex < practiceQuestions.length - 1) {
      setPracticeIndex((current) => current + 1);
      setSelectedAnswer("");
      setPracticeMessage("");
      setPracticeCorrect(false);
    } else {
      setPracticeMessage(
        "🎉 Practice complete! You are ready for the Mystery Challenge."
      );
    }
  };

  const goBackToLearning = () => {
    setMode("learning");
    setSelectedAnswer("");
    setPracticeMessage("");
    setPracticeCorrect(false);
  };

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto min-h-screen max-w-5xl px-5 py-6 sm:px-8">
        {/* HEADER */}
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
              CODEMYST
            </p>
            <h1 className="mt-1 text-2xl font-black tracking-tight">
              Coding Village
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-2">
              <p className="text-xs text-yellow-200">XP</p>
              <p className="font-black text-yellow-300">70</p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
              <p className="text-xs text-cyan-200">COINS</p>
              <p className="font-black text-cyan-300">10</p>
            </div>
          </div>
        </header>

        {/* BREADCRUMB */}
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span>World 01</span>
          <span>›</span>
          <span>Coding Village</span>
          <span>›</span>
          <span className="font-semibold text-white">Level 1</span>
        </div>

        {/* MODE HEADER */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {mode === "learning" ? "📚 Learning Mode" : "🎮 Practice Mode"}
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            {mode === "learning"
              ? "Master Variables"
              : "Practice Variables"}
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            {mode === "learning"
              ? "Learn the concept first. Practice comes only after understanding."
              : "This is guided practice — not an exam. Learn from every mistake."}
          </p>
        </div>

        {/* LEARNING MODE */}
        {mode === "learning" && (
          <section>
            {/* PROGRESS */}
            <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">
                  Lesson {lessonIndex + 1} of {lessons.length}
                </span>

                <span className="text-sm font-bold text-cyan-300">
                  {Math.round(lessonProgress)}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${lessonProgress}%` }}
                />
              </div>
            </div>

            {/* LESSON CARD */}
            <div className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.04] shadow-2xl shadow-cyan-950/20">
              <div className="p-6 sm:p-10">
                <div className="mb-7 flex items-center justify-between">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-300">
                    CONCEPT {String(lessonIndex + 1).padStart(2, "0")}
                  </div>

                  <div className="text-2xl">
                    {lessonIndex === 0 && "📦"}
                    {lessonIndex === 1 && "🏷️"}
                    {lessonIndex === 2 && "🔄"}
                    {lessonIndex === 3 && "🧩"}
                    {lessonIndex === 4 && "🎮"}
                  </div>
                </div>

                <h3 className="text-3xl font-black sm:text-4xl">
                  {lesson.title}
                </h3>

                <p className="mt-2 text-lg font-semibold text-cyan-300">
                  {lesson.subtitle}
                </p>

                <div className="mt-7 rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-7">
                  <p className="text-base leading-8 text-slate-200 sm:text-lg">
                    {lesson.explanation}
                  </p>
                </div>

                {lesson.code && (
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400">
                      Example
                    </p>

                    <pre className="overflow-x-auto rounded-3xl border border-emerald-400/20 bg-[#02070d] p-5 text-sm leading-8 text-emerald-300 shadow-inner sm:text-base">
                      <code>{lesson.code}</code>
                    </pre>
                  </div>
                )}

                {lesson.points && (
                  <div className="mt-6 rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.06] p-5">
                    <p className="mb-4 font-black text-yellow-300">
                      💡 Remember
                    </p>

                    <ul className="space-y-3">
                      {lesson.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-slate-300"
                        >
                          <span className="text-yellow-300">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* NAVIGATION */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    onClick={previousLesson}
                    disabled={lessonIndex === 0}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 font-bold text-slate-300 transition hover:bg-white/[0.09] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={nextLesson}
                    className="rounded-2xl bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-300 hover:scale-[1.01]"
                  >
                    {lessonIndex === lessons.length - 1
                      ? "Start Practice 🎮"
                      : "Continue Learning →"}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm text-slate-400">
              📚 <span className="font-semibold text-white">Learning Rule:</span>{" "}
              Teach first → Practice second → Test last.
            </div>
          </section>
        )}

        {/* PRACTICE MODE */}
        {mode === "practice" && (
          <section>
            {/* PRACTICE PROGRESS */}
            <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">
                  Practice {practiceIndex + 1} of {practiceQuestions.length}
                </span>

                <span className="text-sm font-bold text-purple-300">
                  Guided Practice
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-purple-400 transition-all duration-500"
                  style={{
                    width: `${
                      ((practiceIndex + 1) / practiceQuestions.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* QUESTION */}
            <div className="rounded-[2rem] border border-purple-400/20 bg-gradient-to-br from-purple-400/[0.08] to-blue-500/[0.04] p-6 shadow-2xl shadow-purple-950/20 sm:p-10">
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-2xl border border-purple-300/20 bg-purple-300/10 px-4 py-2 text-sm font-bold text-purple-300">
                  PRACTICE {String(practiceIndex + 1).padStart(2, "0")}
                </div>

                <span className="text-2xl">🧩</span>
              </div>

              <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                {practiceQuestion.question}
              </h3>

              {/* OPTIONS */}
              <div className="mt-8 grid gap-3">
                {practiceQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option;

                  return (
                    <button
                      key={option}
                      onClick={() => setSelectedAnswer(option)}
                      className={`rounded-2xl border p-4 text-left font-bold transition ${
                        isSelected
                          ? "border-purple-400 bg-purple-400/20 text-purple-200"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-purple-300/40 hover:bg-white/[0.07]"
                      }`}
                    >
                      <span className="mr-3 text-purple-300">○</span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* CHECK */}
              <button
                onClick={checkPracticeAnswer}
                className="mt-6 w-full rounded-2xl bg-purple-400 px-6 py-4 font-black text-slate-950 transition hover:bg-purple-300"
              >
                Check Answer ✓
              </button>

              {/* MESSAGE */}
              {practiceMessage && (
                <div
                  className={`mt-5 rounded-3xl border p-5 ${
                    practiceCorrect
                      ? "border-emerald-400/30 bg-emerald-400/10"
                      : "border-yellow-400/30 bg-yellow-400/10"
                  }`}
                >
                  <p
                    className={`font-bold ${
                      practiceCorrect
                        ? "text-emerald-300"
                        : "text-yellow-300"
                    }`}
                  >
                    {practiceCorrect ? "🎉 Correct!" : "💡 Hint"}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {practiceMessage}
                  </p>
                </div>
              )}

              {/* NEXT */}
              {practiceCorrect && (
                <button
                  onClick={nextPractice}
                  className="mt-5 w-full rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 font-black text-emerald-300 transition hover:bg-emerald-400/20"
                >
                  {practiceIndex === practiceQuestions.length - 1
                    ? "Finish Practice 🏆"
                    : "Next Practice →"}
                </button>
              )}

              {/* BACK */}
              <button
                onClick={goBackToLearning}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-bold text-slate-400 transition hover:bg-white/[0.08]"
              >
                ← Back to Learning
              </button>
            </div>

            <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5 text-center text-sm leading-6 text-slate-400">
              🎮 Practice is not a test. If you make a mistake, CodeMyst
              explains the concept and lets you try again.
            </div>
          </section>
        )}
      </div>
    </main> 
  );
}