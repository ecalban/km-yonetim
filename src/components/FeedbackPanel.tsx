import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "../utils/classNames";

interface FeedbackPanelProps {
  type: "correct" | "wrong";
  children: React.ReactNode;
}

export function FeedbackPanel({ type, children }: FeedbackPanelProps) {
  const isCorrect = type === "correct";
  const Icon = isCorrect ? CheckCircle2 : XCircle;

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4 text-sm leading-6 shadow-glow",
        isCorrect
          ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-100"
          : "border-red-400/50 bg-red-500/10 text-red-100",
      )}
      role="status"
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
