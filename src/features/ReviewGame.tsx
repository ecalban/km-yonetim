import { useState } from "react";
import { ArrowLeft, CheckCircle2, Target } from "lucide-react";
import { getReviewQuestionsByIds, stableShuffle } from "../data/ottomanData";
import type { AnswerResult, ReviewQuestion, SessionStats } from "../types";
import { cn } from "../utils/classNames";
import { ChapterSummary } from "../components/ChapterSummary";
import { FeedbackPanel } from "../components/FeedbackPanel";
import { ProgressBar } from "../components/ProgressBar";

interface ReviewGameProps {
  mistakeIds: string[];
  mistakeCount: number;
  onAnswer: (questionId: string, isCorrect: boolean) => AnswerResult;
  onBack: () => void;
  onRestart: () => void;
}

export function ReviewGame({ mistakeIds, mistakeCount, onAnswer, onBack, onRestart }: ReviewGameProps) {
  const [questions] = useState(() => stableShuffle(getReviewQuestionsByIds(mistakeIds), "review-session"));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string; explanation: string } | null>(null);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <section className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-6 text-emerald-100 shadow-glow">
          <Target className="h-10 w-10" />
          <h1 className="mt-4 text-3xl font-bold text-stone-50">Yanlış listen temiz</h1>
          <p className="mt-3 leading-7 text-stone-300">
            Yanlış yaptığın sorular burada tekrar sorulur. Şimdilik çalışılacak yanlış bulunmuyor.
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
            onClick={onBack}
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana menüye dön
          </button>
        </section>
      </main>
    );
  }

  if (finished) {
    return (
      <ChapterSummary
        mistakeCount={mistakeCount}
        onHome={onBack}
        onRestart={onRestart}
        onReview={onRestart}
        stats={stats}
        title="Yanlışlarım"
      />
    );
  }

  const question = questions[index];

  function choose(question: ReviewQuestion, option: string) {
    if (selected) {
      return;
    }

    const isCorrect = option === question.correctAnswer;
    const result = onAnswer(question.id, isCorrect);
    const nextStats = {
      correct: stats.correct + (isCorrect ? 1 : 0),
      wrong: stats.wrong + (isCorrect ? 0 : 1),
    };

    setSelected(option);
    setStats(nextStats);
    setFeedback({
      correct: isCorrect,
      message: isCorrect
        ? `Yanlış listesinden çıkarıldı. ${formatXp(result)}`
        : `Tekrar kaçtı. Doğru cevap: ${question.correctAnswer}. ${formatXp(result)}`,
      explanation: question.explanation,
    });
  }

  function next() {
    const nextIndex = index + 1;

    if (nextIndex >= questions.length) {
      setFinished(true);
      return;
    }

    setIndex(nextIndex);
    setSelected(null);
    setFeedback(null);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <header className="space-y-5">
        <button
          className="inline-flex items-center gap-2 rounded-md border border-stone-700 bg-stone-900/80 px-3 py-2 text-sm text-stone-200 transition hover:border-amber-400 hover:text-amber-100"
          onClick={onBack}
          type="button"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana menü
        </button>
        <div className="rounded-lg border border-red-400/30 bg-red-500/10 p-5 shadow-glow">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-200">Tekrar sistemi</p>
          <h1 className="mt-2 text-3xl font-bold text-stone-50">Yanlışlarım</h1>
          <p className="mt-2 text-sm leading-6 text-stone-300">
            Doğru bildiğin sorular yanlış listesinden otomatik çıkarılır.
          </p>
        </div>
        <ProgressBar value={selected ? index + 1 : index} max={questions.length} label="Tekrar ilerlemesi" />
      </header>

      <section className="rounded-lg border border-stone-700 bg-stone-950/80 p-5 shadow-glow">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
          Soru {index + 1}/{questions.length}
        </p>
        <h2 className="mt-4 text-2xl font-bold leading-tight text-stone-50">{question.prompt}</h2>

        <div className="mt-6 grid gap-3">
          {question.options.map((option) => {
            const isCorrectOption = selected && option === question.correctAnswer;
            const isWrongOption = selected === option && option !== question.correctAnswer;

            return (
              <button
                className={cn(
                  "rounded-lg border p-4 text-left font-semibold transition",
                  isCorrectOption
                    ? "border-emerald-400 bg-emerald-500/15 text-emerald-100"
                    : isWrongOption
                      ? "border-red-400 bg-red-500/15 text-red-100"
                      : "border-stone-700 bg-stone-900/80 text-stone-100 hover:border-amber-300",
                )}
                disabled={Boolean(selected)}
                key={option}
                onClick={() => choose(question, option)}
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
            {index + 1 >= questions.length ? "Özeti gör" : "Sonraki tekrar"}
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
