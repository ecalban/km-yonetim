import { useEffect, useState } from "react";
import { activities, getChapter, isPlayableChapterId } from "./data/ottomanData";
import { useProgress } from "./hooks/useProgress";
import type { ChapterId, SessionStats } from "./types";
import { HomeScreen } from "./components/HomeScreen";
import { MatchingGame } from "./features/MatchingGame";
import { TimelineGame } from "./features/TimelineGame";
import { DivanGame } from "./features/DivanGame";
import { ClassificationGame } from "./features/ClassificationGame";
import { TrueFalseGame } from "./features/TrueFalseGame";
import { ReviewGame } from "./features/ReviewGame";

function App() {
  const { progress, level, levelProgress, recordAnswer, completeChapter, resetProgress } = useProgress();
  const [activeChapterId, setActiveChapterId] = useState<ChapterId | null>(null);
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeChapterId, runKey]);

  function goHome() {
    setActiveChapterId(null);
  }

  function restart() {
    setRunKey((current) => current + 1);
  }

  function goReview() {
    setActiveChapterId("mistakes");
    setRunKey((current) => current + 1);
  }

  function handleComplete(chapterId: ChapterId, stats: SessionStats) {
    const chapter = getChapter(chapterId);

    if (chapter && stats.correct + stats.wrong > 0) {
      completeChapter(chapterId, chapter.badge);
    }
  }

  if (!activeChapterId) {
    return (
      <HomeScreen
        level={level}
        levelProgress={levelProgress}
        onReset={resetProgress}
        onSelectChapter={(chapterId) => {
          setActiveChapterId(chapterId);
          setRunKey((current) => current + 1);
        }}
        progress={progress}
      />
    );
  }

  if (activeChapterId === "mistakes") {
    return (
      <ReviewGame
        key={`review-${runKey}`}
        mistakeCount={progress.mistakeIds.length}
        mistakeIds={progress.mistakeIds}
        onAnswer={recordAnswer}
        onBack={goHome}
        onRestart={restart}
      />
    );
  }

  if (!isPlayableChapterId(activeChapterId)) {
    return null;
  }

  const chapter = getChapter(activeChapterId);
  const activity = activities[activeChapterId];

  if (!chapter) {
    return null;
  }

  const sharedProps = {
    chapter,
    mistakeCount: progress.mistakeIds.length,
    onAnswer: recordAnswer,
    onBack: goHome,
    onRestart: restart,
    onReview: goReview,
  };

  if (activity.mode === "matching") {
    return (
      <MatchingGame
        key={`${activity.id}-${runKey}`}
        {...sharedProps}
        activity={activity}
        onComplete={(stats) => handleComplete(activeChapterId, stats)}
      />
    );
  }

  if (activity.mode === "timeline") {
    return (
      <TimelineGame
        key={`${activity.id}-${runKey}`}
        {...sharedProps}
        activity={activity}
        onComplete={(stats) => handleComplete(activeChapterId, stats)}
      />
    );
  }

  if (activity.mode === "divan") {
    return (
      <DivanGame
        key={`${activity.id}-${runKey}`}
        {...sharedProps}
        activity={activity}
        onComplete={(stats) => handleComplete(activeChapterId, stats)}
      />
    );
  }

  if (activity.mode === "classification" || activity.mode === "palace") {
    return (
      <ClassificationGame
        key={`${activity.id}-${runKey}`}
        {...sharedProps}
        activity={activity}
        onComplete={(stats) => handleComplete(activeChapterId, stats)}
      />
    );
  }

  if (activity.mode === "truefalse") {
    return (
      <TrueFalseGame
        key={`${activity.id}-${runKey}`}
        {...sharedProps}
        activity={activity}
        onComplete={(stats) => handleComplete(activeChapterId, stats)}
      />
    );
  }

  return null;
}

export default App;
