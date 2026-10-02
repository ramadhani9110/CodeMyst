"use client";

import { useState } from "react";

type Level = {
  id: number;
  title: string;
  topic: string;
  description: string;
};

const levels: Level[] = [
  {
    id: 1,
    title: "Variables",
    topic: "Coding Basics",
    description: "Learn how variables store information.",
  },
  {
    id: 2,
    title: "Data Types",
    topic: "Coding Basics",
    description: "Learn how different types of data work.",
  },
  {
    id: 3,
    title: "Input / Output",
    topic: "Coding Basics",
    description: "Learn how programs receive and display information.",
  },
  {
    id: 4,
    title: "Operators",
    topic: "Coding Basics",
    description: "Learn arithmetic, comparison and logical operators.",
  },
];

export default function Home() {
  const [xp, setXp] = useState(70);
  const [coins, setCoins] = useState(10);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const currentLevel = levels.find(
    (level) => level.id === selectedLevel
  );

  const isUnlocked = (levelId: number) => {
    if (levelId === 1) return true;

    return completedLevels.includes(levelId - 1);
  };

  const checkAnswer = () => {
    if (selectedLevel === 1) {
      if (answer.trim().toLowerCase() === "age") {
        if (!completedLevels.includes(1)) {
          setCompletedLevels([...completedLevels, 1]);
          setXp((value) => value + 50);
          setCoins((value) => value + 20);
        }

        setMessage("🎉 Correct! Level 1 completed!");
      } else {
        setMessage(
          "❌ Not quite. Think about what stores a person's age."
        );
      }
    }
  };

  const resetLevel = () => {
    setAnswer("");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              🧙‍♂️ CodeMyst
            </h1>

            <p className="text-sm text-slate-400">
              Learn coding. Solve mysteries. Become a Code Master.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
              <span className="text-sm text-yellow-300">⭐ XP</span>
              <p className="font-bold">{xp}</p>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
              <span className="text-sm text-emerald-300">🪙 Coins</span>
              <p className="font-bold">{coins}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* World heading */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-400">
            WORLD 01
          </p>

          <h2 className="text-4xl font-black">
            🏘️ Coding Village
          </h2>

          <p className="mt-2 text-slate-400">
            Complete each level to unlock the next mystery.
          </p>
        </section>

        {/* Level Map */}
        <section className="mb-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((level) => {
              const unlocked = isUnlocked(level.id);
              const completed = completedLevels.includes(level.id);
              const selected = selectedLevel === level.id;

              return (
                <button
                  key={level.id}
                  onClick={() => {
                    if (unlocked) {
                      setSelectedLevel(level.id);
                      setAnswer("");
                      setMessage("");
                    }
                  }}
                  disabled={!unlocked}
                  className={`rounded-2xl border p-5 text-left transition ${
                    !unlocked
                      ? "cursor-not-allowed border-slate-800 bg-slate-900/40 opacity-50"
                      : selected
                      ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
                      : "border-slate-700 bg-slate-900 hover:border-cyan-500/50"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-2xl">
                      {completed
                        ? "✅"
                        : unlocked
                        ? "🔓"
                        : "🔒"}
                    </span>

                    <span className="text-xs font-bold text-slate-500">
                      LEVEL {level.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-black">
                    {level.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {level.topic}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Current Level */}
        {currentLevel && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  LEVEL {currentLevel.id}
                </p>

                <h2 className="mt-1 text-3xl font-black">
                  {currentLevel.title}
                </h2>

                <p className="mt-2 text-slate-400">
                  {currentLevel.description}
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 px-4 py-3 text-center">
                <p className="text-xs text-slate-400">
                  Progress
                </p>

                <p className="font-bold">
                  {completedLevels.length} / {levels.length}
                </p>
              </div>
            </div>

            {/* Level 1 Challenge */}
            {selectedLevel === 1 && (
              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
                <div className="mb-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
                    🕵️ Mystery Challenge
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    The Missing Variable
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    A programmer wants to store a person's age
                    inside a variable.
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-950 p-5 font-mono text-sm">
                    <p className="text-slate-500">
                      // Which variable name should be used?
                    </p>

                    <p className="mt-3">
                      <span className="text-purple-400">
                        let
                      </span>{" "}
                      <span className="text-cyan-300">
                        ______
                      </span>{" "}
                      = 18;
                    </p>
                  </div>
                </div>

                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Your answer
                </label>

                <input
                  value={answer}
                  onChange={(event) =>
                    setAnswer(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      checkAnswer();
                    }
                  }}
                  placeholder="Type the variable name..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={checkAnswer}
                    className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Check Answer ⚡
                  </button>

                  <button
                    onClick={resetLevel}
                    className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-300 transition hover:bg-slate-800"
                  >
                    Reset
                  </button>
                </div>

                {message && (
                  <div
                    className={`mt-5 rounded-xl p-4 font-semibold ${
                      message.startsWith("🎉")
                        ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                        : "border border-red-500/20 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </div>
            )}

            {/* Locked future levels */}
            {selectedLevel > 1 && (
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center">
                <div className="text-5xl">🚧</div>

                <h3 className="mt-4 text-2xl font-black">
                  Level Coming Soon
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-slate-400">
                  The level structure is ready. The actual mystery
                  challenges, hints and tests will be added next.
                </p>
              </div>
            )}
          </section>
        )}

        {/* Quick Learn */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            ⚡ Quick Learn
          </p>

          <h3 className="mt-2 text-2xl font-black">
            What is a Variable?
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            A variable is a named place where a program stores
            information. The value can change while the program runs.
          </p>

          <div className="mt-5 rounded-xl bg-slate-950 p-5 font-mono text-sm">
            <p>
              <span className="text-cyan-400">age</span> = 18
            </p>

            <p className="mt-2">
              <span className="text-cyan-400">age</span> = 19
            </p>

            <p className="mt-2">
              <span className="text-cyan-400">age</span> = 20
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}