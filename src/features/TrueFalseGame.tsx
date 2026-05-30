import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { AnswerResult, ChapterDefinition, SessionStats, TrueFalseActivity } from "../types";
import { cn } from "../utils/classNames";
import { ChapterSummary } from "../components/ChapterSummary";
import { FeedbackPanel } from "../components/FeedbackPanel";
import { GameHeader } from "../components/GameHeader";

interface TrueFalseGameProps {
  chapter: ChapterDefinition;
  activity: TrueFalseActivity;
  mistakeCount: number;
  onAnswer: (questionId: string, isCorrect: boolean) => AnswerResult;
  onComplete: (stats: SessionStats) => void;
  onBack: () => void;
  onRestart: () => void;
  onReview: () => void;
}

export function TrueFalseGame({
  chapter,
  activity,
  mistakeCount,
  onAnswer,
  onComplete,
  onBack,
  onRestart,
  onReview,
}: TrueFalseGameProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string; explanation: string } | null>(null);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const question = activity.questions[index];

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

  function choose(value: boolean) {
    if (selected !== null) {
      return;
    }

    const isCorrect = value === question.answer;
    const result = onAnswer(question.id, isCorrect);
    const nextStats = {
      correct: stats.correct + (isCorrect ? 1 : 0),
      wrong: stats.wrong + (isCorrect ? 0 : 1),
    };

    setSelected(value);
    setStats(nextStats);
    setFeedback({
      correct: isCorrect,
      message: isCorrect
        ? `Doğru karar. ${formatXp(result)}`
        : `Yanlış karar. Doğru cevap: ${question.answer ? "Doğru" : "Yanlış"}. ${formatXp(result)}`,
      explanation: question.explanation,
    });
  }

  function next() {
    const nextIndex = index + 1;

    if (nextIndex >= activity.questions.length) {
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
        progressMax={activity.questions.length}
        progressValue={selected !== null ? index + 1 : index}
        title={activity.title}
      />

      <section className="rounded-lg border border-stone-700 bg-stone-950/80 p-5 shadow-glow">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
          Tuzak {index + 1}/{activity.questions.length}
        </p>
        <h2 className="mt-4 text-2xl font-bold leading-tight text-stone-50">{question.statement}</h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            className={cn(
              "inline-flex min-h-20 items-center justify-center gap-3 rounded-lg border p-4 text-lg font-bold transition",
              selected !== null && question.answer
                ? "border-emerald-400 bg-emerald-500/15 text-emerald-100"
                : selected === true && !question.answer
                  ? "border-red-400 bg-red-500/15 text-red-100"
                  : "border-stone-700 bg-stone-900/80 text-stone-100 hover:border-emerald-300",
            )}
            disabled={selected !== null}
            onClick={() => choose(true)}
            type="button"
          >
            <CheckCircle2 className="h-6 w-6" />
            Doğru
          </button>
          <button
            className={cn(
              "inline-flex min-h-20 items-center justify-center gap-3 rounded-lg border p-4 text-lg font-bold transition",
              selected !== null && !question.answer
                ? "border-emerald-400 bg-emerald-500/15 text-emerald-100"
                : selected === false && question.answer
                  ? "border-red-400 bg-red-500/15 text-red-100"
                  : "border-stone-700 bg-stone-900/80 text-stone-100 hover:border-red-300",
            )}
            disabled={selected !== null}
            onClick={() => choose(false)}
            type="button"
          >
            <XCircle className="h-6 w-6" />
            Yanlış
          </button>
        </div>

        {selected !== null && (
          <button
            className="mt-5 w-full rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
            onClick={next}
            type="button"
          >
            {index + 1 >= activity.questions.length ? "Özeti gör" : "Sonraki tuzak"}
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
