"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, Heart, CheckCircle, Star, Info } from "lucide-react";

type PageState = "default" | "closed" | "applied";
type DrawerState = "closed" | "open" | "closing";

const DUMMY = {
  name: "지수",
  age: 27,
  verified: true,
  score: 4.8,
  reviewCount: 12,
  tags: ["조용한 전시파", "사진 좋아함", "느긋한 일정"],
  activity: "오르세 미술관 반나절",
  time: "내일 오전",
  place: "오르세 근처",
  current: 1,
  max: 2,
  gender: "여성만 가능",
  cost: "무료",
  reviews: [
    { id: "r1", text: "시간 약속이 정확했어요", name: "민호" },
    { id: "r2", text: "부담 없이 같이 다니기 좋았어요", name: "현아" },
  ],
};

export default function CompanionPage() {
  const [pageState, setPageState] = useState<PageState>("default");
  const [bookmarked, setBookmarked] = useState(false);
  const [heartAnim, setHeartAnim] = useState(false);
  const [drawerState, setDrawerState] = useState<DrawerState>("closed");
  const [isPaid, setIsPaid] = useState(false);

  // Drag-to-dismiss
  const dragStartY = useRef(0);
  const isDragging = useRef(false);
  const [dragY, setDragY] = useState(0);

  function openDrawer() {
    setDrawerState("open");
  }

  function closeDrawer() {
    setDragY(0);
    setDrawerState("closing");
    setTimeout(() => setDrawerState("closed"), 310);
  }

  function handleDragStart(e: React.PointerEvent) {
    dragStartY.current = e.clientY;
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function handleDragMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    const dy = e.clientY - dragStartY.current;
    setDragY(Math.max(0, dy));
  }

  function handleDragEnd() {
    isDragging.current = false;
    if (dragY > 90) {
      setDragY(0);
      closeDrawer();
    } else {
      setDragY(0);
    }
  }

  function toggleBookmark() {
    setBookmarked((b) => !b);
    if (!bookmarked) {
      setHeartAnim(true);
      setTimeout(() => setHeartAnim(false), 320);
    }
  }

  const isClosed = pageState === "closed";
  const isApplied = pageState === "applied";

  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto max-w-[420px] relative">

      {/* Mockup switcher */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-[420px] flex items-center gap-1 px-3"
        style={{ height: "32px", background: "#f9f9f9", borderBottom: "1px solid #eee" }}
      >
        <span className="text-[10px] text-[#c2c2c2] mr-1 font-medium">MOCKUP</span>
        {(["default", "closed", "applied"] as PageState[]).map((s) => (
          <button
            key={s}
            onClick={() => setPageState(s)}
            className="flex-1 text-[11px] font-medium rounded h-[20px]"
            style={{
              background: pageState === s ? "#1ec7be" : "#fff",
              color: pageState === s ? "#fff" : "#999",
              border: "1px solid #e5e5e5",
            }}
          >
            {s === "default" ? "기본" : s === "closed" ? "마감" : "신청중"}
          </button>
        ))}
      </div>

      {/* Header */}
      <header
        className="flex items-center justify-between px-4"
        style={{ height: "56px", borderBottom: "1px solid #f3f3f3", marginTop: "32px" }}
      >
        <Link href="/home" className="p-1 -ml-1">
          <ChevronLeft size={24} className="text-body" />
        </Link>
        <button
          onClick={toggleBookmark}
          aria-label={bookmarked ? "찜 해제" : "찜하기"}
          className={`p-1 -mr-1 ${heartAnim ? "heart-pop" : ""}`}
        >
          <Heart
            size={22}
            fill={bookmarked ? "#ff3c78" : "none"}
            stroke={bookmarked ? "#ff3c78" : "#323232"}
          />
        </button>
      </header>

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto pb-[80px]">

        {/* Profile */}
        <div className="px-4 pt-6 pb-5">
          <div className="flex items-center gap-4">
            {/* Avatar with gradient ring */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] font-bold text-white flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #ff3c78 0%, #1ec7be 100%)",
                padding: "2px",
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-white text-[22px] font-bold"
                style={{ background: "#ff3c78" }}
              >
                {DUMMY.name[0]}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[20px] font-bold text-dark">{DUMMY.name}</span>
                <span className="text-[16px] text-muted">{DUMMY.age}</span>
              </div>
              <div className="flex items-center gap-2">
                {DUMMY.verified && (
                  <span
                    className="flex items-center gap-1 text-[12px] font-medium"
                    style={{ color: "#1ec7be" }}
                  >
                    <CheckCircle size={13} />
                    인증완료
                  </span>
                )}
                <span className="flex items-center gap-0.5 text-[12px] text-muted">
                  <Star size={12} fill="#ffd84d" stroke="#ffd84d" />
                  {DUMMY.score} ({DUMMY.reviewCount}개)
                </span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {DUMMY.tags.map((tag) => (
              <span
                key={tag}
                className="text-[13px] font-medium px-3 py-1 rounded-full"
                style={{ background: "rgba(30,199,190,0.08)", color: "#1ec7be" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ height: "1px", background: "#f3f3f3", margin: "0 16px" }} />

        {/* Activity conditions */}
        <div className="px-4 py-5">
          <p className="text-[14px] font-semibold text-body mb-3">활동 조건</p>
          <div className="space-y-2.5">
            {[
              ["일시", `${DUMMY.time} · ${DUMMY.activity}`],
              ["장소", DUMMY.place],
              ["모집", `${DUMMY.current}/${DUMMY.max}명 모집 중`],
              ["조건", DUMMY.gender],
              ["비용", DUMMY.cost],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-3">
                <span className="text-[13px] text-muted w-8 flex-shrink-0">{label}</span>
                <span className="text-[14px] text-body">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {isClosed && (
          <div
            className="mx-4 mb-4 px-4 py-3 rounded-[8px] text-center"
            style={{ background: "rgba(239,67,67,0.07)" }}
          >
            <p className="text-[14px] font-semibold" style={{ color: "#ef4343" }}>
              이미 마감된 모집이에요
            </p>
            <button
              className="mt-2 text-[13px] font-medium underline underline-offset-2"
              style={{ color: "#666666" }}
            >
              유사 모집글 보기
            </button>
          </div>
        )}

        {isApplied && (
          <div
            className="mx-4 mb-4 px-4 py-3 rounded-[8px] text-center"
            style={{ background: "rgba(30,199,190,0.08)" }}
          >
            <p className="text-[14px] font-semibold" style={{ color: "#1ec7be" }}>
              이미 신청 중이에요
            </p>
          </div>
        )}

        <div style={{ height: "1px", background: "#f3f3f3", margin: "0 16px" }} />

        {/* Reviews */}
        <div className="px-4 py-5">
          <p className="text-[14px] font-semibold text-body mb-3">
            후기 {DUMMY.score} · {DUMMY.reviewCount}개
          </p>
          <div className="space-y-3">
            {DUMMY.reviews.map((r) => (
              <div key={r.id} className="rounded-[8px] p-3" style={{ background: "#f9f9f9" }}>
                <p className="text-[14px] text-body">&ldquo;{r.text}&rdquo;</p>
                <p className="text-[12px] text-muted mt-1">{r.name}</p>
              </div>
            ))}
          </div>
          <button className="mt-3 text-[13px] font-medium" style={{ color: "#1ec7be" }}>
            더보기 →
          </button>
        </div>
      </main>

      {/* Bottom CTA */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] px-4 pb-5 pt-3 bg-white"
        style={{ borderTop: "1px solid #f3f3f3" }}
      >
        <button
          onClick={() => !isClosed && !isApplied && openDrawer()}
          disabled={isClosed || isApplied}
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#ffffff",
            background: isClosed || isApplied ? "#e5e5e5" : "#1ec7be",
            cursor: isClosed || isApplied ? "not-allowed" : "pointer",
            transition: "background 200ms ease",
          }}
        >
          합류 요청하기
        </button>
      </div>

      {/* S005 — Bottom Drawer (physics) */}
      {drawerState !== "closed" && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-end"
          style={{ maxWidth: "420px", left: "50%", transform: "translateX(-50%)" }}
        >
          {/* Scrim */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0,0,0,0.15)",
              animation: drawerState === "open"
                ? "scrim-in 200ms ease forwards"
                : "scrim-out 310ms ease forwards",
            }}
            onClick={closeDrawer}
          />

          {/* Drawer panel */}
          <div
            className="relative bg-white rounded-t-[20px] px-5 pb-6"
            style={{
              transform: `translateY(${dragY}px)`,
              animation: drawerState === "open"
                ? "drawer-in 420ms cubic-bezier(0.32, 0.72, 0, 1) forwards"
                : "drawer-out 310ms cubic-bezier(0.4, 0, 1, 1) forwards",
              transition: isDragging.current ? "none" : dragY > 0 ? "none" : "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)",
              touchAction: "none",
            }}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={handleDragStart}
            onPointerMove={handleDragMove}
            onPointerUp={handleDragEnd}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-4">
              <div className="w-9 h-1 rounded-full" style={{ background: "#e5e5e5" }} />
            </div>

            <h2 className="text-[17px] font-semibold text-dark mb-4">합류 요청 확인</h2>

            {/* Summary */}
            <div className="rounded-[10px] p-4 mb-4" style={{ background: "#f9f9f9" }}>
              <div className="space-y-2">
                {[
                  [`${DUMMY.name} · ${DUMMY.place}`, ""],
                  [DUMMY.time, ""],
                  [`현재 ${DUMMY.current}/${DUMMY.max}명`, ""],
                  [DUMMY.gender, ""],
                ].map(([v], i) => (
                  <p key={i} className="text-[14px] text-subdued">{v}</p>
                ))}
              </div>
            </div>

            {/* Paid/Free toggle for mockup */}
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={(e) => { e.stopPropagation(); setIsPaid(false); }}
                className="text-[11px] font-medium px-2 py-0.5 rounded"
                style={{ background: !isPaid ? "rgba(30,199,190,0.12)" : "#f3f3f3", color: !isPaid ? "#1ec7be" : "#999" }}
              >
                무료
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setIsPaid(true); }}
                className="text-[11px] font-medium px-2 py-0.5 rounded"
                style={{ background: isPaid ? "rgba(30,199,190,0.12)" : "#f3f3f3", color: isPaid ? "#1ec7be" : "#999" }}
              >
                유료
              </button>
              <span className="text-[10px] text-muted ml-1">← 목업 전환</span>
            </div>

            {/* Escrow notice (paid only) */}
            {isPaid && (
              <div
                className="flex items-start gap-2 rounded-[8px] px-3 py-3 mb-4"
                style={{ background: "rgba(30,199,190,0.07)" }}
              >
                <Info size={16} style={{ color: "#1ec7be", flexShrink: 0, marginTop: "1px" }} />
                <div>
                  <p className="text-[13px] font-medium" style={{ color: "#1ec7be" }}>
                    참가비 15,000원
                  </p>
                  <p className="text-[12px] mt-0.5" style={{ color: "#1ec7be" }}>
                    참가비는 일정 완료 후 안전하게 정산돼요
                  </p>
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              style={{
                width: "100%",
                height: "56px",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: 500,
                color: "#ffffff",
                background: "#1ec7be",
              }}
              onClick={closeDrawer}
            >
              신청하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
