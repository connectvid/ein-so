export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold text-[var(--color-blue)] uppercase tracking-widest mb-3">
      {children}
    </p>
  );
}
