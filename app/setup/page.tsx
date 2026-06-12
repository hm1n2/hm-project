"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const REGIONS = ["파리 1구", "마레", "오르세", "몽마르트", "샹젤리제"];
const TIMES = ["오늘 저녁", "오늘 오후", "내일 오전", "자유롭게"];
const MOODS = ["맛집", "전시", "수다", "가볍게", "야경", "투어"];

type Selection = { region: string | null; time: string | null; moods: Set<string> };

export default function SetupPage() {
  const router = useRouter();
  const [sel, setSel] = useState<Selection>({ region: null, time: null, moods: new Set() });

  // Morphing input state
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Animate chips
  const [lastPop, setLastPop] = useState<string | null>(null);

  const canSubmit =
    (sel.region !== null || locationValue.trim().length > 0) ||
    sel.time !== null ||
    sel.moods.size > 0;

  function selectRegion(r: string) {
    pop(r);
    setSel((s) => ({ ...s, region: s.region === r ? null : r }));
    if (locationExpanded) collapseInput();
  }

  function selectTime(t: string) {
    pop(t);
    setSel((s) => ({ ...s, time: s.time === t ? null : t }));
  }

  function toggleMood(m: string) {
    pop(m);
    setSel((s) => {
      const next = new Set(s.moods);
      next.has(m) ? next.delete(m) : next.add(m);
      return { ...s, moods: next };
    });
  }

  function pop(key: string) {
    setLastPop(key);
    setTimeout(() => setLastPop(null), 260);
  }

  function expandInput() {
    setLocationExpanded(true);
    setSel((s) => ({ ...s, region: null }));
    setTimeout(() => inputRef.current?.focus(), 30);
  }

  function collapseInput() {
    if (!locationValue) {
      setLocationExpanded(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto max-w-[420px]">
      {/* Header */}
      <header
        className="flex items-center px-4 flex-shrink-0"
        style={{ height: "56px", borderBottom: "1px solid #f3f3f3" }}
      >
        <Link href="/" className="p-1 -ml-1">
          <ChevronLeft size={24} className="text-body" />
        </Link>
        <h1
          className="text-[18px] font-[700] ml-2 text-dark tracking-[-0.3px]"
          style={{ fontFamily: "var(--font-paperozi)" }}
        >
          빠른 매칭 설정
        </h1>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        {/* Section 1 — Region */}
        <section>
          <p className="text-[15px] font-semibold text-body mb-3">오늘 어디에 있나요?</p>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => selectRegion(r)}
                className={lastPop === r ? "chip-pop" : ""}
                style={{
                  height: "34px",
                  padding: "0 14px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: sel.region === r ? 600 : 400,
                  background: sel.region === r ? "rgba(30,199,190,0.12)" : "#f3f3f3",
                  color: sel.region === r ? "#1ec7be" : "#666666",
                  border: sel.region === r ? "1.5px solid #1ec7be" : "1.5px solid transparent",
                  transition: "background 180ms ease, color 180ms ease, border-color 180ms ease",
                }}
              >
                {r}
              </button>
            ))}

            {/* Morphing input chip */}
            <div
              style={{
                height: "34px",
                borderRadius: locationExpanded ? "8px" : "9999px",
                background: locationExpanded ? "#ffffff" : "#f3f3f3",
                border: locationExpanded ? "1.5px solid #1ec7be" : "1.5px solid transparent",
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                overflow: "hidden",
                width: locationExpanded ? "100%" : "auto",
                minWidth: locationExpanded ? "100%" : "0",
                transition:
                  "width 320ms cubic-bezier(0.4, 0, 0.2, 1), border-radius 320ms cubic-bezier(0.4, 0, 0.2, 1), background 200ms ease, border-color 200ms ease",
                cursor: locationExpanded ? "text" : "pointer",
                marginTop: locationExpanded ? "4px" : "0",
              }}
              onClick={() => !locationExpanded && expandInput()}
            >
              {!locationExpanded && (
                <span style={{ fontSize: "14px", color: "#999999", whiteSpace: "nowrap" }}>
                  직접 입력 ...
                </span>
              )}
              {locationExpanded && (
                <input
                  ref={inputRef}
                  type="text"
                  value={locationValue}
                  onChange={(e) => setLocationValue(e.target.value)}
                  onBlur={collapseInput}
                  placeholder="장소를 입력하세요"
                  style={{
                    width: "100%",
                    background: "transparent",
                    outline: "none",
                    fontSize: "14px",
                    color: "#323232",
                    caretColor: "#1ec7be",
                  }}
                />
              )}
            </div>
          </div>
        </section>

        {/* Section 2 — Time */}
        <section>
          <p className="text-[15px] font-semibold text-body mb-3">어떤 시간을 찾고 있나요?</p>
          <div className="flex flex-wrap gap-2">
            {TIMES.map((t) => (
              <button
                key={t}
                onClick={() => selectTime(t)}
                className={lastPop === t ? "chip-pop" : ""}
                style={{
                  height: "34px",
                  padding: "0 14px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: sel.time === t ? 600 : 400,
                  background: sel.time === t ? "rgba(30,199,190,0.12)" : "#f3f3f3",
                  color: sel.time === t ? "#1ec7be" : "#666666",
                  border: sel.time === t ? "1.5px solid #1ec7be" : "1.5px solid transparent",
                  transition: "background 180ms ease, color 180ms ease, border-color 180ms ease",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Section 3 — Mood (multi-select) */}
        <section>
          <p className="text-[15px] font-semibold text-body mb-3">어떤 느낌이 좋아요?</p>
          <div className="flex flex-wrap gap-2">
            {MOODS.map((m) => (
              <button
                key={m}
                onClick={() => toggleMood(m)}
                className={lastPop === m ? "chip-pop" : ""}
                style={{
                  height: "34px",
                  padding: "0 14px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: sel.moods.has(m) ? 600 : 400,
                  background: sel.moods.has(m) ? "rgba(30,199,190,0.12)" : "#f3f3f3",
                  color: sel.moods.has(m) ? "#1ec7be" : "#666666",
                  border: sel.moods.has(m) ? "1.5px solid #1ec7be" : "1.5px solid transparent",
                  transition: "background 180ms ease, color 180ms ease, border-color 180ms ease",
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-6 pt-3 flex-shrink-0" style={{ borderTop: "1px solid #f3f3f3" }}>
        <button
          disabled={!canSubmit}
          onClick={() => canSubmit && router.push("/home")}
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#ffffff",
            background: canSubmit ? "#1ec7be" : "#e5e5e5",
            transition: "background 250ms ease",
            cursor: canSubmit ? "pointer" : "not-allowed",
          }}
        >
          추천 받기
        </button>
      </div>
    </div>
  );
}
