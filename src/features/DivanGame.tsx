import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { stableShuffle } from "../data/ottomanData";
import type { AnswerResult, ChapterDefinition, DivanActivity, SessionStats } from "../types";
import { cn } from "../utils/classNames";
import { ChapterSummary } from "../components/ChapterSummary";
import { FeedbackPanel } from "../components/FeedbackPanel";
import { GameHeader } from "../components/GameHeader";

interface DivanGameProps {
  chapter: ChapterDefinition;
  activity: DivanActivity;
  mistakeCount: number;
  onAnswer: (questionId: string, isCorrect: boolean) => AnswerResult;
  onComplete: (stats: SessionStats) => void;
  onBack: () => void;
  onRestart: () => void;
  onReview: () => void;
}

export function DivanGame({
  chapter,
  activity,
  mistakeCount,
  onAnswer,
  onComplete,
  onBack,
  onRestart,
  onReview,
}: DivanGameProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string; explanation: string } | null>(null);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const scenario = activity.scenarios[index];
  const options = useMemo(() => stableShuffle(scenario.options, scenario.id), [scenario]);

  if (finished) {
    return (
      <ChapterSummary
        badge={chapter.badge}
        mistakeCount={mistakeCount}
        onHome={onBack}
        onRestart={onRestart}
        onReview={onReview}
        stats={stats}
        title={chapter.title}
      />
    );
  }

  function choose(option: string) {
    if (selected) {
      return;
    }

    const isCorrect = option === scenario.answer;
    const result = onAnswer(scenario.id, isCorrect);
    const nextStats = {
      correct: stats.correct + (isCorrect ? 1 : 0),
      wrong: stats.wrong + (isCorrect ? 0 : 1),
    };

    setSelected(option);
    setStats(nextStats);
    setFeedback({
      correct: isCorrect,
      message: isCorrect
        ? `Doğru görevli: ${scenario.answer}. ${formatXp(result)}`
        : `Yanlış görevli. Doğru cevap: ${scenario.answer}. ${formatXp(result)}`,
      explanation: scenario.explanation,
    });
  }

  function next() {
    const nextIndex = index + 1;

    if (nextIndex >= activity.scenarios.length) {
      setFinished(true);
      onComplete(stats);
      return;
    }

    setIndex(nextIndex);
    setSelected(null);
    setFeedback(null);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <GameHeader
        chapter={chapter}
        description={activity.description}
        onBack={onBack}
        progressMax={activity.scenarios.length}
        progressValue={selected ? index + 1 : index}
        title={activity.title}
      />

      <section className="rounded-lg border border-stone-700 bg-stone-950/80 p-5 shadow-glow">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
          Divan gündemi {index + 1}/{activity.scenarios.length}
        </p>
        <h2 className="mt-3 text-2xl font-bold leading-tight text-stone-50">{scenario.prompt}</h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const isCorrectOption = selected && option === scenario.answer;
            const isWrongOption = selected === option && option !== scenario.answer;

            return (
              <button
                className={cn(
                  "min-h-16 rounded-lg border p-4 text-left font-semibold transition",
                  isCorrectOption
                    ? "border-emerald-400 bg-emerald-500/15 text-emerald-100"
                    : isWrongOption
                      ? "border-red-400 bg-red-500/15 text-red-100"
                      : "border-stone-700 bg-stone-900/80 text-stone-100 hover:border-amber-300",
                )}
                disabled={Boolean(selected)}
                key={option}
                onClick={() => choose(option)}
                type="button"
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected && (
          <button
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
            onClick={next}
            type="button"
          >
            <CheckCircle2 className="h-4 w-4" />
            {index + 1 >= activity.scenarios.length ? "Özeti gör" : "Sonraki görev"}
          </button>
        )}
      </section>

      {feedback && (
        <FeedbackPanel type={feedback.correct ? "correct" : "wrong"}>
          <strong>{feedback.message}</strong>
          <p>{feedback.explanation}</p>
        </FeedbackPanel>
      )}
    </main>
  );
}

function formatXp(result: AnswerResult) {
  return result.bonus > 0 ? `+${result.xpDelta} XP (seri bonusu dahil)` : `${result.xpDelta > 0 ? "+" : ""}${result.xpDelta} XP`;
}
