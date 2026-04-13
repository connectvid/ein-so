export default function LastUpdated({ date }: { date: string }) {
  return (
    <p className="text-sm text-[var(--color-text-muted)]">
      Last updated: {date}
    </p>
  );
}
