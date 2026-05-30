import { useMemo, useState } from "react";
import { Check, Link2 } from "lucide-react";
import { stableShuffle } from "../data/ottomanData";
import type { AnswerResult, ChapterDefinition, MatchingActivity, SessionStats } from "../types";
import { cn } from "../utils/classNames";
import { ChapterSummary } from "../components/ChapterSummary";
import { FeedbackPanel } from "../components/FeedbackPanel";
import { GameHeader } from "../components/GameHeader";

interface MatchingGameProps {
  chapter: ChapterDefinition;
  activity: MatchingActivity;
  mistakeCount: number;
  onAnswer: (questionId: string, isCorrect: boolean) => AnswerResult;
  onComplete: (stats: SessionStats) => void;
  onBack: () => void;
  onRestart: () => void;
  onReview: () => void;
}

interface FeedbackState {
  type: "correct" | "wrong";
  message: string;
  explanation: string;
}

export function MatchingGame({
  chapter,
  activity,
  mistakeCount,
  onAnswer,
  onComplete,
  onBack,
  onRestart,
  onReview,
}: MatchingGameProps) {
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const rightOptions = useMemo(
    () => stableShuffle(activity.pairs.map((pair) => ({ id: pair.id, label: pair.right })), activity.id),
    [activity],
  );

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

  function handleRightClick(rightId: string) {
    if (!selectedLeftId || matchedIds.includes(rightId)) {
      return;
    }

    const pair = activity.pairs.find((candidate) => candidate.id === selectedLeftId);

    if (!pair) {
      return;
    }

    const isCorrect = pair.id === rightId;
    const result = onAnswer(pair.id, isCorrect);

    if (isCorrect) {
      const nextMatchedIds = [...matchedIds, pair.id];
      const nextStats = { ...stats, correct: stats.correct + 1 };
      setMatchedIds(nextMatchedIds);
      setStats(nextStats);
      setSelectedLeftId(null);
      setFeedback({
        type: "correct",
        message: `Doğru eşleşme. ${formatXp(result)}`,
        explanation: pair.explanation,
      });

      if (nextMatchedIds.length === activity.pairs.length) {
        window.setTimeout(() => {
          setFinished(true);
          onComplete(nextStats);
        }, 650);
      }
    } else {
      const nextStats = { ...stats, wrong: stats.wrong + 1 };
      setStats(nextStats);
      setSelectedLeftId(null);
      setFeedback({
        type: "wrong",
        message: `Yanlış eşleşme. Doğru cevap: ${pair.right}. ${formatXp(result)}`,
        explanation: pair.explanation,
      });
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <GameHeader
        chapter={chapter}
        description={activity.description}
        onBack={onBack}
        progressMax={activity.pairs.length}
        progressValue={matchedIds.length}
        title={activity.title}
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-400">Kavramlar</h2>
          {activity.pairs.map((pair) => {
            const isMatched = matchedIds.includes(pair.id);
            const isSelected = selectedLeftId === pair.id;

            return (
              <button
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg border p-4 text-left transition",
                  isMatched
                    ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-100"
                    : isSelected
                      ? "border-amber-300 bg-amber-400/15 text-amber-100"
                      : "border-stone-700 bg-stone-950/80 text-stone-100 hover:border-amber-400",
                )}
                disabled={isMatched}
                key={pair.id}
                onClick={() => setSelectedLeftId(pair.id)}
                type="button"
              >
                <span className="font-semibold">{pair.left}</span>
                {isMatched ? <Check className="h-5 w-5" /> : <Link2 className="h-4 w-4 text-stone-500" />}
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-400">Açıklamalar</h2>
          {rightOptions.map((option) => {
            const isMatched = matchedIds.includes(option.id);

            return (
              <button
                className={cn(
                  "min-h-16 w-full rounded-lg border p-4 text-left text-sm leading-6 transition",
                  isMatched
                    ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-100"
                    : "border-stone-700 bg-stone-900/80 text-stone-200 hover:border-teal-300 hover:text-teal-100",
                  !selectedLeftId && !isMatched && "opacity-80",
                )}
                disabled={isMatched}
                key={option.id}
                onClick={() => handleRightClick(option.id)}
                type="button"
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </section>

      {feedback && (
        <FeedbackPanel type={feedback.type}>
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
