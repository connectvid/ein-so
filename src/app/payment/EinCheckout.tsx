"use client";

/* EIN single-page checkout — ported from the Checkout Conversion Playbook design
   (pay-shared.jsx + ein-checkout.jsx). The site's global Header/Footer wrap this,
   so the design's own header bar is intentionally omitted.

   Flow: 1) Choose your speed (plan + email)  2) Your business  3) Review & pay.
   Plan picker drives a dynamic price through the summary, CTA and mobile bar.
   Express wallets (Apple/Google/Link) + card via @stripe/react-stripe-js. */

import React from "react";
import { loadStripe, type Appearance } from "@stripe/stripe-js";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  ExpressCheckoutElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

/* ---------- tokens ---------- */
const NEUT = {
  text: "#1f2937",
  muted: "#5b6573",
  faint: "#98a1b0",
  line: "#e3e8ee",
  lineSoft: "#eef1f5",
  bg: "#f5f7fa",
  surface: "#ffffff",
  sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
};

/* EIN brand (blue) */
const B = { ink: "#0c1730", accent: "#2563eb", accentDk: "#1d4ed8", accentSoft: "#eaf0fe" };

const WHATSAPP_NUMBER = "8801750278508";

const fmt = (n: number) => "$" + n.toLocaleString("en-US");

const press = {
  down: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(.99)";
  },
  up: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "";
  },
};

/* ---------- Field ---------- */
interface FieldProps {
  label: string;
  value?: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  help?: string;
  optional?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  validate?: (v: string) => boolean;
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  help,
  optional,
  inputMode,
  autoComplete,
  validate,
}: FieldProps) {
  const [focus, setFocus] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const v = value || "";
  const isValid = validate ? validate(v) : v.trim().length > 0;
  const showCheck = isValid && v.length > 0;
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 0 }}>
      <span style={{ font: `600 12.5px ${NEUT.sans}`, color: NEUT.muted }}>
        {label}
        {optional ? (
          <span style={{ fontWeight: 400, color: NEUT.faint }}> (optional)</span>
        ) : (
          <span style={{ color: B.accent }}> *</span>
        )}
      </span>
      <div style={{ position: "relative" }}>
        <input
          type={type}
          value={v}
          placeholder={placeholder}
          inputMode={inputMode}
          autoComplete={autoComplete}
          autoCapitalize={type === "email" ? "none" : undefined}
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
            setTouched(true);
          }}
          style={{
            font: `500 15px/1.2 ${NEUT.sans}`,
            color: NEUT.text,
            padding: "12px 38px 12px 13px",
            border: `1.5px solid ${
              focus ? B.accent : touched && !isValid ? "#e0654f" : NEUT.line
            }`,
            borderRadius: 11,
            outline: "none",
            background: NEUT.surface,
            width: "100%",
            boxSizing: "border-box",
            boxShadow: focus ? `0 0 0 4px ${B.accent}22` : "none",
            transition: "border-color .15s, box-shadow .15s",
          }}
        />
        {showCheck && (
          <span
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: B.accent,
              fontSize: 15,
              fontWeight: 800,
            }}
          >
            ✓
          </span>
        )}
      </div>
      {help && (
        <span style={{ font: `400 11.5px/1.4 ${NEUT.sans}`, color: NEUT.faint }}>{help}</span>
      )}
    </label>
  );
}

/* ---------- Progress ---------- */
function Progress({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={s}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  font: `700 12px ${NEUT.sans}`,
                  background: done ? B.accent : active ? B.accentSoft : NEUT.lineSoft,
                  color: done ? "#fff" : active ? B.accentDk : NEUT.faint,
                  border: active ? `1.5px solid ${B.accent}` : "none",
                }}
              >
                {done ? "✓" : i + 1}
              </span>
              <span
                style={{
                  font: `${active ? 650 : 500} 12.5px ${NEUT.sans}`,
                  color: active ? NEUT.text : done ? NEUT.muted : NEUT.faint,
                  whiteSpace: "nowrap",
                }}
                className="prog-label"
              >
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span
                style={{
                  flex: 1,
                  height: 1.5,
                  margin: "0 10px",
                  background: done ? B.accent : NEUT.line,
                  minWidth: 16,
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ---------- Stripe trust badge ---------- */
function StripeBadge() {
  const net = (label: string, bg: string, fg: string) => (
    <span
      style={{
        font: `700 9px ${NEUT.sans}`,
        color: fg,
        background: bg,
        padding: "3px 5px",
        borderRadius: 4,
        letterSpacing: ".02em",
      }}
    >
      {label}
    </span>
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          font: `600 12px ${NEUT.sans}`,
          color: NEUT.muted,
        }}
      >
        <span style={{ fontSize: 12 }}>&#128274;</span> Secured by{" "}
        <b style={{ color: "#635bff" }}>Stripe</b>
      </span>
      <span style={{ display: "flex", gap: 4 }}>
        {net("VISA", "#1434cb", "#fff")}
        {net("MC", "#eb001b", "#fff")}
        {net("AMEX", "#006fcf", "#fff")}
      </span>
    </div>
  );
}

/* ---------- Trust stack ---------- */
function TrustStack({
  countries,
  guarantee,
  identity,
}: {
  countries: React.ReactNode;
  guarantee: React.ReactNode;
  identity?: React.ReactNode;
}) {
  const item = (icon: React.ReactNode, text: React.ReactNode) => (
    <li
      style={{
        display: "flex",
        gap: 9,
        alignItems: "flex-start",
        font: `500 13px/1.4 ${NEUT.sans}`,
        color: NEUT.text,
      }}
    >
      <span style={{ color: B.accent, flexShrink: 0 }}>{icon}</span>
      {text}
    </li>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {item("✓", countries)}
        {item("✓", guarantee)}
        {item(
          "✆",
          <span>
            Questions?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi, I have a question about getting my EIN.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: B.accentDk, fontWeight: 600, textDecoration: "none" }}
            >
              Chat with us on WhatsApp
            </a>
          </span>,
        )}
      </ul>
      {identity && (
        <p style={{ margin: 0, font: `400 11px/1.5 ${NEUT.sans}`, color: NEUT.faint }}>
          {identity}
        </p>
      )}
    </div>
  );
}

/* ---------- Persistent itemized summary ---------- */
interface LineItem {
  label: string;
  note?: string;
  price: number;
}
function SummaryLines({ lineItems, total }: { lineItems: LineItem[]; total: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {lineItems.map((li) => (
        <div
          key={li.label}
          style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}
        >
          <span style={{ font: `500 13.5px ${NEUT.sans}`, color: NEUT.text }}>
            {li.label}
            {li.note && (
              <span style={{ display: "block", font: `400 11.5px ${NEUT.sans}`, color: NEUT.muted }}>
                {li.note}
              </span>
            )}
          </span>
          <span style={{ font: `600 13.5px ${NEUT.sans}`, color: NEUT.text, whiteSpace: "nowrap" }}>
            {fmt(li.price)}
          </span>
        </div>
      ))}
      <div style={{ height: 1, background: NEUT.line, margin: "2px 0" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ font: `700 15px ${NEUT.sans}`, color: B.ink }}>Total due today</span>
        <span style={{ font: `800 22px ${NEUT.sans}`, color: B.ink, letterSpacing: "-.02em" }}>
          {fmt(total)}
        </span>
      </div>
      <span style={{ font: `400 11.5px ${NEUT.sans}`, color: NEUT.muted }}>
        No hidden fees. One payment, all-inclusive.
      </span>
    </div>
  );
}

/* ---------- Review row ---------- */
function ReviewRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value?: string;
  onEdit: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "12px 0",
        borderBottom: `1px solid ${NEUT.lineSoft}`,
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ font: `500 11.5px ${NEUT.sans}`, color: NEUT.faint }}>{label}</div>
        <div
          style={{
            font: `600 14px ${NEUT.sans}`,
            color: NEUT.text,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value || <span style={{ color: NEUT.faint, fontStyle: "italic" }}>Not provided</span>}
        </div>
      </div>
      <button
        onClick={onEdit}
        style={{
          flexShrink: 0,
          background: "none",
          border: "none",
          cursor: "pointer",
          font: `600 13px ${NEUT.sans}`,
          color: B.accentDk,
        }}
      >
        Edit
      </button>
    </div>
  );
}

/* ---------- Pay button ---------- */
function PayButton({
  label,
  sub,
  busy,
  onClick,
}: {
  label: React.ReactNode;
  sub?: string;
  busy?: boolean;
  onClick: () => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 9, alignItems: "center" }}>
      <button
        onClick={onClick}
        disabled={busy}
        style={{
          width: "100%",
          minHeight: 54,
          borderRadius: 13,
          border: "none",
          cursor: busy ? "default" : "pointer",
          background: B.accent,
          color: "#fff",
          font: `650 16px ${NEUT.sans}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
          padding: "8px 16px",
          boxShadow: `0 8px 22px ${B.accent}44`,
          transition: "transform .1s",
          opacity: busy ? 0.85 : 1,
        }}
        onMouseDown={(e) => !busy && (e.currentTarget.style.transform = "scale(.99)")}
        onMouseUp={press.up}
        onMouseLeave={press.up}
      >
        {busy ? <Spinner /> : label}
      </button>
      {sub && (
        <span style={{ font: `400 12px ${NEUT.sans}`, color: NEUT.muted, textAlign: "center" }}>
          {sub}
        </span>
      )}
    </div>
  );
}

function StepButton({
  label,
  onClick,
  disabled,
}: {
  label: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={() => !disabled && onClick()}
      aria-disabled={disabled}
      style={{
        width: "100%",
        minHeight: 52,
        borderRadius: 13,
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        background: B.ink,
        color: "#fff",
        font: `650 15px ${NEUT.sans}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        transition: "transform .1s",
      }}
      onMouseDown={(e) => !disabled && press.down(e)}
      onMouseUp={press.up}
      onMouseLeave={press.up}
    >
      {label}
    </button>
  );
}

function Spinner() {
  return (
    <span
      style={{
        width: 18,
        height: 18,
        border: "2.5px solid rgba(255,255,255,.4)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        display: "inline-block",
        animation: "pp-spin .7s linear infinite",
      }}
    />
  );
}

/* ---------- Confirmation ---------- */
interface TimelineStep {
  t: string;
  d: string;
}
function Confirmation({
  total,
  timeline,
  reference,
}: {
  total: number;
  timeline: TimelineStep[];
  reference: string;
}) {
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "40px 22px", textAlign: "center" }}>
      <span
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: B.accentSoft,
          color: B.accent,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
        }}
      >
        &#10003;
      </span>
      <h2
        style={{
          margin: "16px 0 6px",
          font: `700 25px ${NEUT.sans}`,
          color: B.ink,
          letterSpacing: "-.02em",
        }}
      >
        Payment confirmed
      </h2>
      <p style={{ margin: 0, font: `400 14.5px/1.6 ${NEUT.sans}`, color: NEUT.muted }}>
        We&apos;ve charged {fmt(total)}. Reference{" "}
        <b style={{ color: NEUT.text }}>{reference}</b>, also emailed to you.
      </p>
      <div
        style={{
          textAlign: "left",
          background: NEUT.surface,
          border: `1px solid ${NEUT.line}`,
          borderRadius: 16,
          padding: 20,
          margin: "22px 0",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        <div
          style={{
            font: `650 13px ${NEUT.sans}`,
            color: NEUT.muted,
            textTransform: "uppercase",
            letterSpacing: ".05em",
            marginBottom: 14,
          }}
        >
          What happens next
        </div>
        {timeline.map((t, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: 12, paddingBottom: i < timeline.length - 1 ? 16 : 0 }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: B.accentSoft,
                  color: B.accentDk,
                  font: `700 11px ${NEUT.sans}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              {i < timeline.length - 1 && (
                <span style={{ flex: 1, width: 1.5, background: NEUT.line, marginTop: 2 }} />
              )}
            </div>
            <div style={{ paddingBottom: 2 }}>
              <div style={{ font: `650 14px ${NEUT.sans}`, color: NEUT.text }}>{t.t}</div>
              <div style={{ font: `400 12.5px/1.5 ${NEUT.sans}`, color: NEUT.muted }}>{t.d}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Hi, I just completed my EIN payment. My reference is ${reference}.`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 20px",
            borderRadius: 11,
            border: "none",
            background: "#25D366",
            color: "#fff",
            font: `650 14px ${NEUT.sans}`,
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          ✆ Message us on WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ---------- layout + small helpers ---------- */
function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${NEUT.line}`,
        borderRadius: 16,
        padding: 22,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {children}
    </div>
  );
}

interface ChipOption {
  label: string;
  icon?: string;
}
function ChipGrid({
  options,
  value,
  onPick,
}: {
  options: ChipOption[];
  value: string | null;
  onPick: (label: string) => void;
}) {
  return (
    <div className="pp-chipgrid">
      {options.map((o) => {
        const on = value === o.label;
        return (
          <button
            key={o.label}
            onClick={() => onPick(o.label)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 13px",
              cursor: "pointer",
              textAlign: "left",
              position: "relative",
              border: `1.5px solid ${on ? B.accent : NEUT.line}`,
              borderRadius: 12,
              background: on ? B.accentSoft : "#fff",
              transition: "all .14s",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                flexShrink: 0,
                fontSize: 17,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: on ? "#fff" : NEUT.bg,
                border: `1px solid ${on ? B.accent + "44" : NEUT.line}`,
              }}
            >
              {o.icon || "•"}
            </span>
            <span
              style={{
                font: `${on ? 650 : 500} 13px ${NEUT.sans}`,
                color: on ? B.accentDk : NEUT.text,
              }}
            >
              {o.label}
            </span>
            {on && (
              <span
                style={{
                  position: "absolute",
                  top: 9,
                  right: 10,
                  color: B.accent,
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

interface Plan {
  id: string;
  name: string;
  price: number;
  eta: string;
  tag: string;
  popular?: boolean;
}
function PlanPicker({
  plans,
  value,
  onPick,
}: {
  plans: Plan[];
  value: string;
  onPick: (id: string) => void;
}) {
  return (
    <div className="pp-planpicker">
      {plans.map((p) => {
        const on = value === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onPick(p.id)}
            style={{
              textAlign: "left",
              cursor: "pointer",
              position: "relative",
              border: `1.5px solid ${on ? B.accent : NEUT.line}`,
              borderRadius: 14,
              padding: "15px 16px",
              background: on ? B.accentSoft : "#fff",
              boxShadow: on ? `0 0 0 3px ${B.accent}22` : "none",
              transition: "all .15s",
            }}
          >
            {p.popular && (
              <span
                style={{
                  position: "absolute",
                  top: -9,
                  right: 14,
                  padding: "2px 8px",
                  borderRadius: 999,
                  font: `700 10px ${NEUT.sans}`,
                  letterSpacing: ".03em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: B.accent,
                }}
              >
                Most popular
              </span>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: `2px solid ${on ? B.accent : "#c5ccd8"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: on ? B.accent : "transparent",
                  }}
                />
              </span>
              <b style={{ font: `700 15px ${NEUT.sans}`, color: B.ink }}>{p.name}</b>
              <b
                style={{
                  marginLeft: "auto",
                  font: `800 18px ${NEUT.sans}`,
                  color: B.ink,
                  letterSpacing: "-.02em",
                }}
              >
                {fmt(p.price)}
              </b>
            </div>
            <div
              style={{
                font: `600 12.5px ${NEUT.sans}`,
                color: on ? B.accentDk : NEUT.text,
                paddingLeft: 27,
              }}
            >
              Ready in {p.eta}
            </div>
            <div style={{ font: `400 12px ${NEUT.sans}`, color: NEUT.muted, paddingLeft: 27, marginTop: 2 }}>
              {p.tag}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function OrDivider({ text = "or pay by card" }: { text?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ flex: 1, height: 1, background: NEUT.line }} />
      <span style={{ font: `500 12px ${NEUT.sans}`, color: NEUT.faint }}>{text}</span>
      <span style={{ flex: 1, height: 1, background: NEUT.line }} />
    </div>
  );
}

const cardElementStyle = {
  style: {
    base: {
      color: NEUT.text,
      fontFamily: "Inter, -apple-system, system-ui, sans-serif",
      fontSize: "15px",
      "::placeholder": { color: NEUT.faint },
    },
    invalid: { color: "#e0654f" },
  },
};

function CardField({
  label,
  Element,
  placeholder,
}: {
  label: string;
  Element: typeof CardNumberElement | typeof CardExpiryElement | typeof CardCvcElement;
  placeholder?: string;
}) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 0 }}>
      <span style={{ font: `600 12.5px ${NEUT.sans}`, color: NEUT.muted }}>
        {label}
        <span style={{ color: B.accent }}> *</span>
      </span>
      <div
        style={{
          padding: "13px",
          border: `1.5px solid ${focus ? B.accent : NEUT.line}`,
          borderRadius: 11,
          background: NEUT.surface,
          boxShadow: focus ? `0 0 0 4px ${B.accent}22` : "none",
          transition: "border-color .15s, box-shadow .15s",
        }}
      >
        <Element
          options={{ ...cardElementStyle, placeholder }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </label>
  );
}

function CardSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
      <CardField label="Card number" Element={CardNumberElement} placeholder="1234 1234 1234 1234" />
      <div style={{ display: "flex", gap: 11 }}>
        <div style={{ flex: 1 }}>
          <CardField label="Expiry" Element={CardExpiryElement} />
        </div>
        <div style={{ flex: 1 }}>
          <CardField label="CVC" Element={CardCvcElement} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Stripe ---------- */
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = PUBLISHABLE_KEY ? loadStripe(PUBLISHABLE_KEY) : null;

const appearance: Appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: B.accent,
    colorText: NEUT.text,
    colorDanger: "#e0654f",
    fontFamily: "Inter, -apple-system, system-ui, sans-serif",
    borderRadius: "11px",
    spacingUnit: "4px",
  },
};

/* ---------- shared state + bridges ---------- */
interface BodyState {
  step: number;
  go: (n: number) => void;
  plan: string;
  pickPlan: (id: string) => void;
  f: Record<string, string>;
  set: (k: string, v: string) => void;
  entity: string | null;
  setEntity: (e: string) => void;
  summaryOpen: boolean;
  setSummaryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  price: number;
}
interface PayBridge {
  node: React.ReactNode;
  onPay: () => void;
  paying: boolean;
  loading: boolean;
  error: string | null;
}

const STEPS = ["Choose your speed", "Your business", "Review & pay"];
const PLANS: Plan[] = [
  { id: "standard", name: "Standard", price: 49, eta: "30 business days", tag: "SS-4 prep + IRS filing" },
  {
    id: "express",
    name: "Express",
    price: 97,
    eta: "14 business days",
    tag: "Priority fax + status updates",
    popular: true,
  },
];
const ENTITIES: ChipOption[] = [
  { label: "LLC", icon: "🏢" },
  { label: "C-Corporation", icon: "🏛️" },
  { label: "S-Corporation", icon: "📈" },
  { label: "Sole proprietor", icon: "👤" },
  { label: "Nonprofit", icon: "🤝" },
  { label: "Other", icon: "✏️" },
];

const HOW_IT_WORKS: [string, string][] = [
  ["Pick your speed & pay", "Takes about two minutes. No account needed."],
  ["Answer a few questions", "We email a short form for your business details."],
  ["We prepare & file Form SS-4", "Your specialist handles the IRS. No government forms for you."],
  ["Your EIN lands in your inbox", "Use it for US banking, Amazon, Stripe, and taxes."],
];

function PaymentPlaceholder({ message }: { message: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 96,
        borderRadius: 12,
        border: `1px dashed ${NEUT.line}`,
        background: NEUT.bg,
        font: `500 13px ${NEUT.sans}`,
        color: NEUT.muted,
        textAlign: "center",
        padding: 16,
      }}
    >
      {message}
    </div>
  );
}

/* ---------- Presentational checkout body (no Stripe hooks) ---------- */
function CheckoutBody({ s, pay }: { s: BodyState; pay: PayBridge }) {
  const { step, go, plan, pickPlan, f, set, entity, setEntity, summaryOpen, setSummaryOpen, price } = s;
  const planObj = PLANS.find((p) => p.id === plan) || PLANS[1];
  const isPayStep = step >= 2;
  const payBusy = pay.paying || pay.loading;

  const emailValid = /.+@.+\..+/.test(f.email || "");
  const entityValid =
    Boolean(entity) && (entity !== "Other" || (f.entityOther || "").trim().length > 0);
  const businessValid = (f.biz || "").trim().length > 0 && entityValid;
  const canAdvance = step === 0 ? emailValid : step === 1 ? businessValid : true;
  const advance = () => {
    if (canAdvance) go(step + 1);
  };

  const PAY_SUB = `You won't be charged until you confirm. Ready in ${planObj.eta} or your money back.`;

  const main = (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Progress steps={STEPS} current={step} />

      {step === 0 && (
        <>
          <Panel>
            <div>
              <h3 style={{ margin: "0 0 4px", font: `650 17px ${NEUT.sans}`, color: B.ink }}>
                How fast do you need it?
              </h3>
              <p style={{ margin: 0, font: `400 12.5px ${NEUT.sans}`, color: NEUT.muted }}>
                Both include full SS-4 preparation and IRS filing. No hidden fees.
              </p>
            </div>
            <PlanPicker plans={PLANS} value={plan} onPick={pickPlan} />
            <Field
              label="Email address"
              type="email"
              value={f.email}
              onChange={(v) => set("email", v)}
              placeholder="you@email.com"
              autoComplete="email"
              inputMode="email"
              help="Where we send your EIN. No SSN or US address needed."
              validate={(v) => /.+@.+\..+/.test(v)}
            />
            <div className="pp-inline-cta">
              <StepButton
                label={`Continue to ${STEPS[1].toLowerCase()} →`}
                onClick={advance}
                disabled={!canAdvance}
              />
            </div>
          </Panel>
          <Panel>
            <h3 style={{ margin: 0, font: `650 15px ${NEUT.sans}`, color: B.ink }}>How it works</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {HOW_IT_WORKS.map(([t, dsc], i, arr) => (
                <div key={t} style={{ display: "flex", gap: 12 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: B.accentSoft,
                        color: B.accentDk,
                        font: `700 12px ${NEUT.sans}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    {i < arr.length - 1 && (
                      <span style={{ flex: 1, width: 1.5, background: NEUT.line, marginTop: 2 }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < arr.length - 1 ? 16 : 0 }}>
                    <div style={{ font: `650 13.5px ${NEUT.sans}`, color: NEUT.text }}>{t}</div>
                    <div style={{ font: `400 12px/1.5 ${NEUT.sans}`, color: NEUT.muted }}>{dsc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </>
      )}

      {step === 1 && (
        <Panel>
          <div>
            <h3 style={{ margin: "0 0 4px", font: `650 17px ${NEUT.sans}`, color: B.ink }}>
              Tell us about your business
            </h3>
            <p style={{ margin: 0, font: `400 12.5px ${NEUT.sans}`, color: NEUT.muted }}>
              Just the essentials. We collect the rest after payment.
            </p>
          </div>
          <Field
            label="Business name"
            value={f.biz}
            onChange={(v) => set("biz", v)}
            placeholder="Your Business LLC"
            autoComplete="organization"
          />
          <div>
            <span
              style={{
                display: "block",
                font: `600 12.5px ${NEUT.sans}`,
                color: NEUT.muted,
                marginBottom: 8,
              }}
            >
              Entity type <span style={{ color: B.accent }}>*</span>
            </span>
            <ChipGrid options={ENTITIES} value={entity} onPick={setEntity} />
            {entity === "Other" && (
              <input
                autoFocus
                value={f.entityOther || ""}
                onChange={(e) => set("entityOther", e.target.value)}
                placeholder="What type of entity is it? We'll confirm with you after payment."
                style={{
                  marginTop: 8,
                  font: `500 13.5px ${NEUT.sans}`,
                  color: NEUT.text,
                  padding: "12px 14px",
                  width: "100%",
                  boxSizing: "border-box",
                  border: "none",
                  borderRadius: 11,
                  outline: "none",
                  background: NEUT.bg,
                  boxShadow: `inset 0 0 0 1.5px ${B.accent}55`,
                }}
              />
            )}
          </div>
          <div className="pp-inline-cta">
            <StepButton
              label={`Continue to ${STEPS[2].toLowerCase()} →`}
              onClick={advance}
              disabled={!canAdvance}
            />
          </div>
        </Panel>
      )}

      {step === 2 && (
        <>
          <Panel>
            <h3 style={{ margin: 0, font: `650 16px ${NEUT.sans}`, color: B.ink }}>
              Review your details
            </h3>
            <div>
              <ReviewRow
                label="Speed"
                value={`${planObj.name} · ${planObj.eta} · ${fmt(price)}`}
                onEdit={() => go(0)}
              />
              <ReviewRow label="Business name" value={f.biz} onEdit={() => go(1)} />
              <ReviewRow
                label="Entity type"
                value={entity === "Other" ? f.entityOther || "Other" : entity || undefined}
                onEdit={() => go(1)}
              />
              <ReviewRow label="Email" value={f.email} onEdit={() => go(0)} />
            </div>
          </Panel>
          <Panel>
            <h3 style={{ margin: 0, font: `650 16px ${NEUT.sans}`, color: B.ink }}>Payment</h3>
            {pay.node}
            <StripeBadge />
            {pay.error && (
              <p
                style={{
                  margin: 0,
                  font: `500 12.5px ${NEUT.sans}`,
                  color: "#e0654f",
                  textAlign: "center",
                }}
              >
                {pay.error}
              </p>
            )}
            <div className="pp-inline-cta">
              <PayButton
                label={`🔒 Pay ${fmt(price)} & file my EIN`}
                busy={payBusy}
                onClick={pay.onPay}
                sub={PAY_SUB}
              />
            </div>
            <div style={{ height: 1, background: NEUT.lineSoft }} />
            <TrustStack
              countries="Filed for founders in 50+ countries"
              guarantee="100% money-back guarantee"
              identity="ein.so is an independent service that prepares and files Form SS-4 with the IRS. Not affiliated with the IRS."
            />
          </Panel>
        </>
      )}
    </div>
  );

  const incl = [
    "Complete Form SS-4 preparation",
    "Direct IRS fax submission",
    "A dedicated specialist on your file",
    "EIN delivered to your inbox",
  ];
  const line: LineItem[] = [
    { label: `${planObj.name} EIN filing`, note: `Ready in ${planObj.eta}`, price },
  ];
  const summaryHead = <SummaryLines lineItems={line} total={price} />;
  const summaryExtras = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div
          style={{
            font: `650 11px ${NEUT.sans}`,
            color: NEUT.faint,
            textTransform: "uppercase",
            letterSpacing: ".06em",
            marginBottom: 10,
          }}
        >
          What&apos;s included
        </div>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {incl.map((t) => (
            <li
              key={t}
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                font: `500 13px/1.4 ${NEUT.sans}`,
                color: NEUT.text,
              }}
            >
              <span style={{ color: B.accent, flexShrink: 0, fontWeight: 800 }}>✓</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          gap: 11,
          alignItems: "center",
          padding: "11px 13px",
          borderRadius: 12,
          background: "linear-gradient(180deg,#fbfdff,#f1f5fe)",
          border: `1px solid ${B.accent}30`,
        }}
      >
        <span
          style={{
            position: "relative",
            width: 38,
            height: 38,
            flexShrink: 0,
            borderRadius: "50%",
            background: B.accent,
            boxShadow: `0 0 0 3px ${B.accentSoft}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 800, lineHeight: 1 }}>✓</span>
        </span>
        <span style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
          <span style={{ font: `750 13.5px ${NEUT.sans}`, color: B.ink, letterSpacing: "-.01em" }}>
            Money-Back Guarantee
          </span>
          <span style={{ font: `400 11.5px ${NEUT.sans}`, color: NEUT.muted }}>
            Full refund if we can&apos;t file.
          </span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <span style={{ fontSize: 16, flexShrink: 0 }}>🌍</span>
        <span style={{ font: `400 12px/1.5 ${NEUT.sans}`, color: NEUT.muted }}>
          No SSN and no US address required. We file for founders in 50+ countries.
        </span>
      </div>
    </div>
  );
  const summary = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {summaryHead}
      <div style={{ height: 1, background: NEUT.lineSoft }} />
      {summaryExtras}
    </div>
  );

  return (
    <div style={{ background: NEUT.bg, color: NEUT.text, font: `400 14px ${NEUT.sans}` }}>
      <style dangerouslySetInnerHTML={{ __html: PP_CSS }} />
      <div className="pp-wrap">
        <h1 className="pp-h1" style={{ color: B.ink }}>
          Get your US EIN, the easy way.
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 20px",
            marginTop: 8,
            marginBottom: 26,
          }}
        >
          {["Money-back guarantee", "Ready in 14 days", "No SSN required"].map((t) => (
            <span
              key={t}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                font: `500 13px ${NEUT.sans}`,
                color: NEUT.muted,
              }}
            >
              <span style={{ color: B.accent, fontWeight: 800 }}>✓</span>
              {t}
            </span>
          ))}
        </div>

        {/* mobile collapsible summary */}
        <div className="pp-summary-mobile">
          <button
            onClick={() => setSummaryOpen((o) => !o)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 16px",
              background: "#fff",
              border: `1px solid ${NEUT.line}`,
              borderRadius: summaryOpen ? "14px 14px 0 0" : 14,
              cursor: "pointer",
            }}
          >
            <span style={{ font: `600 13.5px ${NEUT.sans}`, color: B.accentDk }}>
              {summaryOpen ? "Hide" : "Show"} order summary
              <span
                style={{
                  fontSize: 10,
                  marginLeft: 6,
                  display: "inline-block",
                  transform: summaryOpen ? "rotate(180deg)" : "none",
                }}
              >
                ▾
              </span>
            </span>
            <b style={{ font: `800 18px ${NEUT.sans}`, color: B.ink }}>{fmt(price)}</b>
          </button>
          {summaryOpen && (
            <div
              style={{
                background: "#fff",
                border: `1px solid ${NEUT.line}`,
                borderTop: "none",
                borderRadius: "0 0 14px 14px",
                padding: 16,
              }}
            >
              {summary}
            </div>
          )}
        </div>

        <div className="pp-grid">
          <div>{main}</div>
          <aside className="pp-summary-desktop">
            <div
              style={{
                background: "#fff",
                border: `1px solid ${NEUT.line}`,
                borderRadius: 16,
                padding: 20,
                position: "sticky",
                top: 20,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {summaryHead}
              {isPayStep ? (
                <PayButton
                  label={`🔒 Pay ${fmt(price)} & file my EIN`}
                  busy={payBusy}
                  onClick={pay.onPay}
                  sub="You won't be charged until you confirm."
                />
              ) : (
                <StepButton
                  label={`Continue to ${STEPS[step + 1].toLowerCase()} →`}
                  onClick={advance}
                  disabled={!canAdvance}
                />
              )}
              <StripeBadge />
              <div style={{ height: 1, background: NEUT.lineSoft }} />
              {summaryExtras}
            </div>
          </aside>
        </div>
      </div>

      {/* mobile sticky thumb-zone CTA */}
      <div className="pp-mobilebar">
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ font: `400 11px ${NEUT.sans}`, color: NEUT.faint }}>Total</div>
          <div style={{ font: `800 19px ${NEUT.sans}`, color: B.ink }}>{fmt(price)}</div>
        </div>
        <div style={{ flex: 1 }}>
          {isPayStep ? (
            <PayButton label={`Pay ${fmt(price)} & file →`} busy={payBusy} onClick={pay.onPay} />
          ) : (
            <StepButton label="Continue →" onClick={advance} disabled={!canAdvance} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Pay step: real Stripe wallets + card fields ---------- */
function PaymentStep({
  s,
  clientSecret,
  onPaid,
}: {
  s: BodyState;
  clientSecret: string;
  onPaid: (reference: string) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [walletsReady, setWalletsReady] = React.useState(false);

  const finish = (
    confirmError: { message?: string } | undefined,
    paymentIntent: { id: string; status: string } | undefined | null,
  ) => {
    if (confirmError) {
      setError(confirmError.message ?? "Payment could not be completed. Please try again.");
      setPaying(false);
      return;
    }
    if (paymentIntent && paymentIntent.status === "succeeded") {
      onPaid(`EIN-${paymentIntent.id.slice(-6).toUpperCase()}`);
      return;
    }
    setPaying(false);
  };

  const onPay = async () => {
    if (!stripe || !elements || paying) return;
    const cardNumber = elements.getElement(CardNumberElement);
    if (!cardNumber) return;
    setPaying(true);
    setError(null);
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumber,
        billing_details: { email: s.f.email || undefined, name: s.f.biz || undefined },
      },
    });
    finish(confirmError, paymentIntent);
  };

  const onExpressConfirm = async () => {
    if (!stripe || !elements) return;
    setPaying(true);
    setError(null);
    const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: { return_url: `${window.location.origin}/payment/?status=success` },
    });
    finish(confirmError, paymentIntent);
  };

  const pay: PayBridge = {
    node: (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <ExpressCheckoutElement
          onConfirm={onExpressConfirm}
          onReady={(event) => setWalletsReady(Boolean(event.availablePaymentMethods))}
          options={{
            buttonHeight: 48,
            layout: { maxColumns: 3, maxRows: 2 },
            paymentMethods: { applePay: "always", googlePay: "always", link: "auto" },
          }}
        />
        {walletsReady && <OrDivider />}
        <CardSection />
      </div>
    ),
    onPay,
    paying,
    loading: false,
    error,
  };

  return <CheckoutBody s={s} pay={pay} />;
}

/* ---------- page-scoped responsive CSS (design relies on these classes) ---------- */
const PP_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@keyframes pp-spin { to { transform: rotate(360deg); } }
.pp-wrap { max-width: 980px; margin: 0 auto; padding: 32px 22px 56px; }
.pp-h1 { margin: 0 0 6px; font: 700 30px "Inter", sans-serif; letter-spacing: -.025em; text-wrap: balance; }
.pp-grid { display: grid; grid-template-columns: minmax(0,1.6fr) minmax(300px,1fr); gap: 32px; align-items: start; }
.pp-summary-mobile, .pp-mobilebar { display: none; }
.pp-inline-cta { display: none; }
.pp-chipgrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
.pp-planpicker { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
@media (max-width: 860px) {
  .pp-grid { grid-template-columns: 1fr; gap: 18px; }
  .pp-summary-desktop { display: none; }
  .pp-summary-mobile { display: block; margin-bottom: 18px; }
  .pp-h1 { font-size: 24px; }
  .pp-wrap { padding: 22px 16px 120px; }
  .pp-planpicker { grid-template-columns: 1fr; }
  .pp-mobilebar { display: flex; position: fixed; left: 0; right: 0; bottom: 0; gap: 14px; align-items: center;
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom)) 16px; background: rgba(255,255,255,.95);
    backdrop-filter: blur(8px); border-top: 1px solid #e3e8ee; z-index: 50; }
}
@media (max-width: 430px) { .prog-label { display: none; } }
`;

/* ---------- Page entry: state machine + Stripe provider ---------- */
export default function EinCheckout() {
  const [step, setStep] = React.useState(0);
  const [plan, setPlan] = React.useState("express");
  const [f, setF] = React.useState<Record<string, string>>({});
  const [entity, setEntity] = React.useState<string | null>(null);
  const [summaryOpen, setSummaryOpen] = React.useState(false);
  const [stage, setStage] = React.useState<"form" | "done">("form");
  const [clientSecret, setClientSecret] = React.useState<string | null>(null);
  const [reference, setReference] = React.useState("EIN-4M8X1");

  const planObj = PLANS.find((p) => p.id === plan) || PLANS[1];
  const price = planObj.price;

  const set = (k: string, v: string) => setF((prev) => ({ ...prev, [k]: v }));
  const go = (n: number) => {
    setStep(n);
    window.scrollTo({ top: 0 });
  };
  // Changing the plan invalidates any created PaymentIntent so the amount stays
  // correct when the customer returns to the pay step.
  const pickPlan = (id: string) => {
    setPlan(id);
    setClientSecret(null);
  };

  // Create the PaymentIntent once the customer reaches the pay step.
  React.useEffect(() => {
    if (step !== 2 || clientSecret || !stripePromise) return;
    let cancelled = false;
    fetch("/api/payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plan,
        email: f.email ?? "",
        businessName: f.biz ?? "",
        entity: entity === "Other" ? f.entityOther || "Other" : entity ?? "",
        testCoupon:
          (typeof window !== "undefined" && window.localStorage.getItem("test_coupon")) || "",
      }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("payment_intent_failed"))))
      .then((d) => {
        if (!cancelled && d?.clientSecret) setClientSecret(d.clientSecret as string);
      })
      .catch((err) => console.error("[payment] failed to start payment:", err));
    return () => {
      cancelled = true;
    };
  }, [step, clientSecret, plan, f.email, f.biz, f.entityOther, entity]);

  if (stage === "done") {
    return (
      <div style={{ background: NEUT.bg, color: NEUT.text }}>
        <style dangerouslySetInnerHTML={{ __html: PP_CSS }} />
        <Confirmation
          total={price}
          reference={reference}
          timeline={[
            {
              t: "We prepare your Form SS-4",
              d: "Your specialist completes every line, no government forms for you to touch.",
            },
            {
              t: "We fax it to the IRS",
              d: "With priority follow-up. We chase it until it is confirmed.",
            },
            {
              t: `Your EIN arrives, ready in ${planObj.eta}`,
              d: "A 9-digit EIN, delivered straight to your inbox.",
            },
            {
              t: "Start using it immediately",
              d: "US banking, Amazon, Stripe, PayPal, tax filing, everything.",
            },
          ]}
        />
      </div>
    );
  }

  const s: BodyState = {
    step,
    go,
    plan,
    pickPlan,
    f,
    set,
    entity,
    setEntity,
    summaryOpen,
    setSummaryOpen,
    price,
  };

  if (step === 2 && clientSecret && stripePromise) {
    return (
      <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
        <PaymentStep
          s={s}
          clientSecret={clientSecret}
          onPaid={(ref) => {
            setReference(ref);
            setStage("done");
            window.scrollTo({ top: 0 });
          }}
        />
      </Elements>
    );
  }

  const pay: PayBridge = {
    node: (
      <PaymentPlaceholder
        message={
          stripePromise
            ? "Loading secure payment…"
            : "Online payment is temporarily unavailable. Please message us on WhatsApp to complete your order."
        }
      />
    ),
    onPay: () => {},
    paying: false,
    loading: Boolean(stripePromise),
    error: stripePromise
      ? null
      : "Online payment is temporarily unavailable. Please contact us on WhatsApp.",
  };

  return <CheckoutBody s={s} pay={pay} />;
}
