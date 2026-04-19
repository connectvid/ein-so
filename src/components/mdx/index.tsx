import Link from "next/link";
import type { MDXComponents } from "mdx/types";

import Section from "./Section";
import Capsule from "./Capsule";
import Label from "./Label";
import Accent from "./Accent";
import { NumberedCards, Card, FeatureCards, FeatureCard, ProcessSteps, ProcessStep } from "./Cards";
import { Steps, Step } from "./Steps";
import Alert from "./Alert";
import InfoBox from "./InfoBox";
import { InternalLinks, InternalLink } from "./InternalLinks";
import FAQSection from "./FAQSection";
import PenaltyGrid, { PenaltyStat } from "./PenaltyGrid";
import LinkButton from "./LinkButton";
import PromoBox from "./PromoBox";

export const mdxComponents: MDXComponents = {
  // Standard element overrides
  p: (props) => <p className="text-[var(--color-text-muted)] leading-relaxed mb-6" {...props} />,
  h2: (props) => (
    <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] mb-8" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3" {...props} />
  ),
  strong: (props) => <strong className="text-[var(--color-text)]" {...props} />,
  a: (props) => (
    <Link
      href={props.href || "#"}
      className="text-[var(--color-blue)] hover:underline font-semibold"
    >
      {props.children}
    </Link>
  ),
  ol: (props) => (
    <ol className="space-y-3 text-[var(--color-text-muted)] list-decimal list-inside" {...props} />
  ),
  ul: (props) => (
    <ul className="space-y-2 text-[var(--color-text-muted)] list-disc list-inside" {...props} />
  ),
  table: (props) => (
    <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] my-8">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead {...props} />,
  tbody: (props) => <tbody className="divide-y divide-[var(--color-border)]" {...props} />,
  tr: (props) => <tr className="even:bg-[var(--color-surface)] odd:bg-white" {...props} />,
  th: (props) => (
    <th className="text-left p-4 font-bold bg-[var(--color-navy)] text-white" {...props} />
  ),
  td: (props) => <td className="p-4 text-[var(--color-text-muted)]" {...props} />,

  // Custom components
  Section,
  Capsule,
  Label,
  Accent,
  NumberedCards,
  Card,
  FeatureCards,
  FeatureCard,
  ProcessSteps,
  ProcessStep,
  Steps,
  Step,
  Alert,
  InfoBox,
  LinkButton,
  PromoBox,
  InternalLinks,
  InternalLink,
  FAQSection,
  PenaltyGrid,
  PenaltyStat,
};
