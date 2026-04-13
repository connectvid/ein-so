import AnimateIn from "@/components/AnimateIn";

export default function AnswerCapsule({ answer, context }: { answer: string; context?: string }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-10">
              <p className="text-lg text-[var(--color-text)] leading-relaxed">
                <strong dangerouslySetInnerHTML={{ __html: answer }} />
              </p>
            </div>
            {context && (
              <p className="text-[var(--color-text-muted)] leading-relaxed">{context}</p>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
