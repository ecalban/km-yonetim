import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, CheckCircle2 } from "lucide-react";
import { stableShuffle } from "../data/ottomanData";
import type {
  AnswerResult,
  ChapterDefinition,
  SessionStats,
  TimelineActivity,
  TimelineEvent,
} from "../types";
import { ChapterSummary } from "../components/ChapterSummary";
import { FeedbackPanel } from "../components/FeedbackPanel";
import { GameHeader } from "../components/GameHeader";

interface TimelineGameProps {
  chapter: ChapterDefinition;
  activity: TimelineActivity;
  mistakeCount: number;
  onAnswer: (questionId: string, isCorrect: boolean) => AnswerResult;
  onComplete: (stats: SessionStats) => void;
  onBack: () => void;
  onRestart: () => void;
  onReview: () => void;
}

export function TimelineGame({
  chapter,
  activity,
  mistakeCount,
  onAnswer,
  onComplete,
  onBack,
  onRestart,
  onReview,
}: TimelineGameProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = activity.questions[questionIndex];
  const initialOrder = useMemo(() => stableShuffle(question.events, question.id), [question]);
  const [order, setOrder] = useState<TimelineEvent[]>(initialOrder);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string; explanation: string } | null>(null);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

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

  function move(index: number, direction: -1 | 1) {
    if (answered) {
      return;
    }

    const targetIndex = index + direction;

    if (targetIndex < 0 || targetIndex >= order.length) {
      return;
    }

    const nextOrder = [...order];
    [nextOrder[index], nextOrder[targetIndex]] = [nextOrder[targetIndex], nextOrder[index]];
    setOrder(nextOrder);
  }

  function checkOrder() {
    const isCorrect = order.every((event, index) => event.order === index + 1);
    const result = onAnswer(question.id, isCorrect);
    const nextStats = {
      correct: stats.correct + (isCorrect ? 1 : 0),
      wrong: stats.wrong + (isCorrect ? 0 : 1),
    };
    setStats(nextStats);
    setAnswered(true);
    setFeedback({
      correct: isCorrect,
      message: isCorrect ? `Sıralama doğru. ${formatXp(result)}` : `Sıralama yanlış. ${formatXp(result)}`,
      explanation: isCorrect ? question.explanation : `Doğru sıra: ${correctOrderLabel(question.events)}`,
    });
  }

  function goNext() {
    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex >= activity.questions.length) {
      setFinished(true);
      onComplete(stats);
      return;
    }

    const nextQuestion = activity.questions[nextQuestionIndex];
    setQuestionIndex(nextQuestionIndex);
    setOrder(stableShuffle(nextQuestion.events, nextQuestion.id));
    setAnswered(false);
    setFeedback(null);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <GameHeader
        chapter={chapter}
        description={activity.description}
        onBack={onBack}
        progressMax={activity.questions.length}
        progressValue={answered ? questionIndex + 1 : questionIndex}
        title={activity.title}
      />

      <section className="space-y-4 rounded-lg border border-stone-700 bg-stone-950/80 p-5 shadow-glow">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">{question.title}</p>
          <h2 className="mt-2 text-xl font-bold text-stone-50">{question.prompt}</h2>
        </div>

        <div className="space-y-3">
          {order.map((event, index) => (
            <div
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-stone-700 bg-stone-900/80 p-3"
              key={event.id}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-400 text-sm font-bold text-stone-950">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-stone-50">
                  {event.label}
                  {event.year ? ` · ${event.year}` : ""}
                </p>
                <p className="text-sm leading-6 text-stone-400">{event.detail}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  aria-label="Yukarı taşı"
                  className="rounded-md border border-stone-700 p-2 text-stone-200 transition hover:border-amber-300 disabled:opacity-30"
                  disabled={answered || index === 0}
                  onClick={() => move(index, -1)}
                  type="button"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  aria-label="Aşağı taşı"
                  className="rounded-md border border-stone-700 p-2 text-stone-200 transition hover:border-amber-300 disabled:opacity-30"
                  disabled={answered || index === order.length - 1}
                  onClick={() => move(index, 1)}
                  type="button"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={answered}
            onClick={checkOrder}
            type="button"
          >
            <CheckCircle2 className="h-4 w-4" />
            Sıralamayı kontrol et
          </button>
          {answered && (
            <button
              className="flex-1 rounded-md border border-teal-400/50 bg-teal-500/10 px-4 py-3 text-sm font-semibold text-teal-100 transition hover:border-teal-300"
              onClick={goNext}
              type="button"
            >
              {questionIndex + 1 >= activity.questions.length ? "Özeti gör" : "Sonraki"}
            </button>
          )}
        </div>
      </section>

      {feedback && (
        <FeedbackPanel type={feedback.correct ? "correct" : "wrong"}>
          <strong>{feedback.message}</strong>
          <p>{feedback.explanation}</p>
          {!feedback.correct && <p className="mt-2">{question.explanation}</p>}
        </FeedbackPanel>
      )}
    </main>
  );
}

function correctOrderLabel(events: TimelineEvent[]) {
  return [...events]
    .sort((a, b) => a.order - b.order)
    .map((event) => `${event.label}${event.year ? ` (${event.year})` : ""}`)
    .join(" → ");
}

function formatXp(result: AnswerResult) {
  return result.bonus > 0 ? `+${result.xpDelta} XP (seri bonusu dahil)` : `${result.xpDelta > 0 ? "+" : ""}${result.xpDelta} XP`;
}
