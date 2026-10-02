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
    subtitle: "A variable stores information",
    explanation:
      "A variable is a named storage place used by a program to keep information. The value stored inside a variable can be used later and can also change.",
    code: `age = 18`,
    points: [
      "age → variable name",
      "18 → stored value",
      "The program can use the value later.",
    ],
  },
  {
    title: "Variable Names",
    subtitle: "Every variable needs a name",
    explanation:
      "A variable needs a meaningful name so that we can understand what information it stores.",
    code: `age = 18\nname = "Alex"\nscore = 100`,
    points: [
      "age stores an age",
      "name stores a name",
      "score stores a score",
    ],
  },
  {
    title: "Values Can Change",
    subtitle: "Variables are not always fixed",
    explanation:
      "A variable can receive a new value while the program is running. The latest value becomes the current value.",
    code: `age = 18\nage = 19\nage = 20`,
    points: [
      "First age is 18",
      "Then age becomes 19",
      "Finally age becomes 20",
    ],
  },
  {
    title: "Different Information",
    subtitle: "Variables can store different types of data",
    explanation:
      "Programs need to store different kinds of information. For example, a number, a name, or a true/false value.",
    code: `age = 18\nname = "Alex"\nisStudent = true`,
    points: [
      "18 is a number",
      '"Alex" is text',
      "true represents a boolean value",
    ],
  },
  {
    title: "Real Coding Example",
    subtitle: "Putting variables together",
    explanation:
      "Here is a simple example where multiple variables describe a player in a game.",
    code: `playerName = "Alex"\nlevel = 1\ncoins = 50`,
    points: [
      "playerName stores the player's name",
      "level stores the current level",
      "coins stores the player's coins",
    ],
  },
];

export default function Home() {
  const [lessonIndex, setLessonIndex] = useState(0);

  const lesson = lessons[lessonIndex];

  const progress =
    ((lessonIndex + 1) / lessons.length) * 100;

  const isFirst = lessonIndex === 0;
  const isLast = lessonIndex === lessons.length - 1;

  const nextLesson = () => {
    if (!isLast) {
      setLessonIndex((current) => current + 1);
    }
  };

  const previousLesson = () => {
    if (!isFirst) {
      setLessonIndex((current) => current - 1);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              🧙‍♂️ CodeMyst
            </h1>

            <p className="text-sm text-slate-400">
              Learn coding. Solve mysteries. Become a Code Master.
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
            <span className="text-sm text-yellow-300">
              ⭐ XP
            </span>

            <p className="font-bold">70</p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-cyan-400">
            WORLD 01
          </span>

          <span className="text-slate-600">
            →
          </span>

          <span className="text-slate-300">
            Coding Village
          </span>

          <span className="text-slate-600">
            →
          </span>

          <span className="text-slate-300">
            Level 1
          </span>
        </div>

        {/* Title */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
            📚 LEARNING MODE
          </p>

          <h2 className="text-4xl font-black">
            Variables
          </h2>

          <p className="mt-2 text-slate-400">
            First understand the concept. Questions come later.
          </p>
        </section>

        {/* Progress */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-300">
              Learning Progress
            </span>

            <span className="text-sm font-bold text-cyan-400">
              {lessonIndex + 1} / {lessons.length}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {/* Lesson Card */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
              CONCEPT {lessonIndex + 1}
            </p>

            <h3 className="mt-2 text-3xl font-black">
              {lesson.title}
            </h3>

            <p className="mt-2 text-lg text-cyan-300">
              {lesson.subtitle}
            </p>
          </div>

          {/* Explanation */}
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
            <h4 className="mb-3 text-lg font-bold">
              🧠 Understand
            </h4>

            <p className="leading-8 text-slate-300">
              {lesson.explanation}
            </p>
          </div>

          {/* Code Example */}
          {lesson.code && (
            <div className="mt-6">
              <h4 className="mb-3 text-lg font-bold">
                💻 Example
              </h4>

              <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-sm leading-8 text-cyan-300">
                <code>{lesson.code}</code>
              </pre>
            </div>
          )}

          {/* Key Points */}
          {lesson.points && (
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <h4 className="mb-4 text-lg font-bold">
                💡 Remember
              </h4>

              <div className="space-y-3">
                {lesson.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="text-cyan-400">
                      ✓
                    </span>

                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              onClick={previousLesson}
              disabled={isFirst}
              className={`rounded-xl px-6 py-3 font-bold transition ${
                isFirst
                  ? "cursor-not-allowed border border-slate-800 text-slate-700"
                  : "border border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              ← Back
            </button>

            <button
              onClick={nextLesson}
              disabled={isLast}
              className={`rounded-xl px-6 py-3 font-bold transition ${
                isLast
                  ? "cursor-not-allowed bg-slate-800 text-slate-600"
                  : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              }`}
            >
              {isLast
                ? "Learning Complete ✓"
                : "Continue Learning →"}
            </button>
          </div>
        </section>

        {/* Learning Rule */}
        <section className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
          <h3 className="font-bold text-purple-300">
            🧙 CodeMyst Learning Rule
          </h3>

          <p className="mt-2 leading-7 text-slate-400">
            First learn the concept, then practice it, and only
            after that you will face mystery challenges and tests.
          </p>
        </section>
      </div>
    </main>
  );
}