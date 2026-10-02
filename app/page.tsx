"use client";

import { useState } from "react";

export default function Home() {
  const [xp, setXp] = useState(70);
  const [coins, setCoins] = useState(10);
  const [completed, setCompleted] = useState(false);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (answer.trim().toLowerCase() === "age") {
      setCompleted(true);
      setXp((old) => old + 50);
      setCoins((old) => old + 20);
      setMessage("🎉 Correct! You solved the mystery!");
    } else {
      setMessage("❌ Not quite. Think about what stores a person's age.");
    }
  };

  const resetLevel = () => {
    setAnswer("");
    setMessage("");
    setCompleted(false);
  };

  return (
    <main className="min-h-screen bg-[#070914] text-white">
      <div className="mx-auto max-w-5xl px-5 py-8">

        {/* TOP BAR */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-purple-400">
              CODEMYST
            </p>
            <h1 className="mt-1 text-2xl font-bold">
              Level 1 — Variables
            </h1>
          </div>

          <div className="flex gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3">
              ⭐ XP <b>{xp}</b>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3">
              🪙 <b>{coins}</b>
            </div>
          </div>
        </div>

        {/* LEVEL PROGRESS */}
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>World 01 • Coding Village</span>
            <span>Level 1 / 4</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
          </div>
        </div>

        {/* MYSTERY CARD */}
        <section className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-slate-950 p-7 shadow-2xl">

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-3xl">
              🕵️
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-purple-400">
                MYSTERY CHALLENGE
              </p>

              <h2 className="text-2xl font-bold">
                The Missing Variable
              </h2>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-lg leading-8 text-slate-200">
              A programmer wants to store a person&apos;s age.
              <br />
              The value can change from <b>18</b> to <b>19</b>, then to{" "}
              <b>20</b>.
            </p>

            <p className="mt-5 text-lg font-semibold text-cyan-300">
              What should the variable be called?
            </p>
          </div>

          {/* ANSWER */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Enter your answer
            </label>

            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkAnswer();
                }
              }}
              placeholder="Example: age"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-lg outline-none transition focus:border-cyan-400"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={checkAnswer}
            disabled={completed}
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-4 text-lg font-bold transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {completed ? "✅ LEVEL COMPLETED" : "CHECK ANSWER →"}
          </button>

          {/* MESSAGE */}
          {message && (
            <div
              className={`mt-5 rounded-xl border p-4 text-center font-semibold ${
                completed
                  ? "border-green-400/20 bg-green-500/10 text-green-300"
                  : "border-red-400/20 bg-red-500/10 text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          {/* SUCCESS */}
          {completed && (
            <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-500/10 p-5 text-center">
              <div className="text-4xl">🏆</div>

              <h3 className="mt-2 text-xl font-bold">
                Level Complete!
              </h3>

              <p className="mt-2 text-slate-300">
                +50 XP &nbsp; • &nbsp; +20 Coins
              </p>

              <button
                onClick={resetLevel}
                className="mt-4 rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Play Again
              </button>
            </div>
          )}
        </section>

        {/* LEARNING BOX */}
        <section className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-6">
          <p className="text-sm font-semibold tracking-widest text-cyan-400">
            💡 QUICK LEARN
          </p>

          <h3 className="mt-2 text-xl font-bold">
            What is a variable?
          </h3>

          <p className="mt-2 leading-7 text-slate-400">
            A variable is a named storage location used to keep a value.
            The value can change while the program is running.
          </p>

          <div className="mt-4 rounded-xl bg-black/40 p-4 font-mono text-cyan-300">
            age = 18
            <br />
            age = 19
            <br />
            age = 20
          </div>
        </section>

      </div>
    </main>
  );
}