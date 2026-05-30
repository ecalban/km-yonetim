import { useState } from "react";
import { Archive, CheckCircle2 } from "lucide-react";
import type {
  AnswerResult,
  ChapterDefinition,
  ClassificationActivity,
  ClassificationCategory,
  SessionStats,
} from "../types";
import { cn } from "../utils/classNames";
import { stableShuffle } from "../data/ottomanData";
import { ChapterSummary } from "../components/ChapterSummary";
import { FeedbackPanel } from "../components/FeedbackPanel";
import { GameHeader } from "../components/GameHeader";

interface ClassificationGameProps {
  chapter: ChapterDefinition;
  activity: ClassificationActivity;
  mistakeCount: number;
  onAnswer: (questionId: string, isCorrect: boolean) => AnswerResult;
  onComplete: (stats: SessionStats) => void;
  onBack: () => void;
  onRestart: () => void;
  onReview: () => void;
}

export function ClassificationGame({
  chapter,
  activity,
  mistakeCount,
  onAnswer,
  onComplete,
  onBack,
  onRestart,
  onReview,
}: ClassificationGameProps) {
  const [items] = useState(() => stableShuffle(activity.items, activity.id));
  const [index, setIndex] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string; explanation: string } | null>(null);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const item = items[index];
  const correctCategory = activity.categories.find((category) => category.id === item.categoryId);

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

  function choose(category: ClassificationCategory) {
    if (selectedCategoryId) {
      return;
    }

    const isCorrect = category.id === item.categoryId;
    const result = onAnswer(item.id, isCorrect);
    const nextStats = {
      correct: stats.correct + (isCorrect ? 1 : 0),
      wrong: stats.wrong + (isCorrect ? 0 : 1),
    };

    setSelectedCategoryId(category.id);
    setStats(nextStats);
    setFeedback({
      correct: isCorrect,
      message: isCorrect
        ? `Doğru kategori: ${category.title}. ${formatXp(result)}`
        : `Yanlış kategori. Doğru cevap: ${correctCategory?.title ?? "Bilinmiyor"}. ${formatXp(result)}`,
      explanation: item.explanation,
    });
  }

  function next() {
    const nextIndex = index + 1;

    if (nextIndex >= items.length) {
      setFinished(true);
      onComplete(stats);
      return;
    }

    setIndex(nextIndex);
    setSelectedCategoryId(null);
    setFeedback(null);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <GameHeader
        chapter={chapter}
        description={activity.description}
        onBack={onBack}
        progressMax={items.length}
        progressValue={selectedCategoryId ? index + 1 : index}
        title={activity.title}
      />

      <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-5 shadow-glow">
          <div className="flex items-center gap-3 text-amber-100">
            <Archive className="h-6 w-6" />
            <p className="text-sm font-semibold uppercase tracking-wide">
              Kart {index + 1}/{items.length}
            </p>
          </div>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-stone-50">{item.label}</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {activity.categories.map((category) => {
            const isSelected = selectedCategoryId === category.id;
            const isCorrectCategory = selectedCategoryId && category.id === item.categoryId;
            const isWrongCategory = isSelected && category.id !== item.categoryId;

            return (
              <button
                className={cn(
                  "rounded-lg border p-4 text-left transition",
                  isCorrectCategory
                    ? "border-emerald-400 bg-emerald-500/15 text-emerald-100"
                    : isWrongCategory
                      ? "border-red-400 bg-red-500/15 text-red-100"
                      : "border-stone-700 bg-stone-950/80 text-stone-100 hover:border-teal-300",
                )}
                disabled={Boolean(selectedCategoryId)}
                key={category.id}
                onClick={() => choose(category)}
                type="button"
              >
                <p className="font-bold">{category.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-400">{category.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      {feedback && (
        <FeedbackPanel type={feedback.correct ? "correct" : "wrong"}>
          <strong>{feedback.message}</strong>
          <p>{feedback.explanation}</p>
        </FeedbackPanel>
      )}

      {selectedCategoryId && (
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
          onClick={next}
          type="button"
        >
          <CheckCircle2 className="h-4 w-4" />
          {index + 1 >= items.length ? "Özeti gör" : "Sonraki kart"}
        </button>
      )}
    </main>
  );
}

function formatXp(result: AnswerResult) {
  return result.bonus > 0 ? `+${result.xpDelta} XP (seri bonusu dahil)` : `${result.xpDelta > 0 ? "+" : ""}${result.xpDelta} XP`;
}
