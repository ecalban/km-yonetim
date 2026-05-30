interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
}

export function ProgressBar({ value, max, label }: ProgressBarProps) {
  const percentage = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-stone-400">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-md bg-stone-800">
        <div
          className="h-full rounded-md bg-gradient-to-r from-amber-400 via-teal-300 to-rose-400 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
