import { useEffect, useMemo, useState } from "react";
import type { AnswerResult, BadgeName, ChapterId, ProgressState } from "../types";

const STORAGE_KEY = "payitaht-akademisi-progress-v1";

const defaultProgress: ProgressState = {
  xp: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  completedChapters: [],
  badges: [],
  mistakeIds: [],
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const level = useMemo(() => Math.floor(progress.xp / 100) + 1, [progress.xp]);
  const levelProgress = useMemo(() => progress.xp % 100, [progress.xp]);

  function recordAnswer(questionId: string, isCorrect: boolean): AnswerResult {
    const nextStreak = isCorrect ? progress.streak + 1 : 0;
    const bonus = isCorrect && nextStreak % 5 === 0 ? 20 : 0;
    const xpDelta = isCorrect ? 10 + bonus : -2;

    setProgress({
      ...progress,
      xp: Math.max(0, progress.xp + xpDelta),
      correct: progress.correct + (isCorrect ? 1 : 0),
      wrong: progress.wrong + (isCorrect ? 0 : 1),
      streak: nextStreak,
      mistakeIds: isCorrect
        ? progress.mistakeIds.filter((id) => id !== questionId)
        : Array.from(new Set([...progress.mistakeIds, questionId])),
    });

    return { xpDelta, bonus, nextStreak };
  }

  function completeChapter(chapterId: ChapterId, badge?: BadgeName) {
    setProgress((current) => ({
      ...current,
      completedChapters: current.completedChapters.includes(chapterId)
        ? current.completedChapters
        : [...current.completedChapters, chapterId],
      badges: badge && !current.badges.includes(badge) ? [...current.badges, badge] : current.badges,
    }));
  }

  function resetProgress() {
    setProgress(defaultProgress);
  }

  return {
    progress,
    level,
    levelProgress,
    recordAnswer,
    completeChapter,
    resetProgress,
  };
}

function loadProgress(): ProgressState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return defaultProgress;
    }

    const parsed = JSON.parse(raw) as Partial<ProgressState>;

    return {
      ...defaultProgress,
      ...parsed,
      completedChapters: parsed.completedChapters ?? [],
      badges: parsed.badges ?? [],
      mistakeIds: parsed.mistakeIds ?? [],
    };
  } catch {
    return defaultProgress;
  }
}
