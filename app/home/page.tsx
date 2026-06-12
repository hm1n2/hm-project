"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Settings,
  Home,
  Search,
  Plus,
  Heart,
  User,
  CheckCircle,
  RotateCcw,
  Users,
} from "lucide-react";

type ViewState = "default" | "empty" | "loading" | "error";

interface PersonCard {
  id: string;
  type: "person";
  name: string;
  age: number;
  verified: boolean;
  reviewScore: number;
  reviewCount: number;
  tags: string[];
  quote: string;
  reason: string;
}

interface RecruitCard {
  id: string;
  type: "recruit";
  name: string;
  age: number;
  verified: boolean;
  reviewScore: number;
  reviewCount: number;
  tags: string[];
  quote: string;
  reason: string;
  currentCount: number;
  maxCount: number;
}

type FeedCard = PersonCard | RecruitCard;

const FEED_CARDS: FeedCard[] = [
  {
    id: "1",
    type: "person",
    name: "지수",
    age: 27,
    verified: true,
    reviewScore: 4.8,
    reviewCount: 12,
    tags: ["조용한 전시파", "사진 좋아함", "느긋한 일정"],
    quote: "오르세 반나절 같이 볼 사람 구해요",
    reason: "같은 지역 · 전시 취향 비슷",
  },
  {
    id: "2",
    type: "recruit",
    name: "민호",
    age: 30,
    verified: true,
    reviewScore: 4.5,
    reviewCount: 8,
    tags: ["맛집", "수다 가능"],
    quote: "스테이크 같이 먹을 1명",
    reason: "오늘 저녁 · 2명 모집 중",
    currentCount: 1,
    maxCount: 2,
  },
  {
    id: "3",
    type: "person",
    name: "현아",
    age: 25,
    verified: false,
    reviewScore: 0,
    reviewCount: 0,
    tags: ["야경", "산책"],
    quote: "에펠탑 야경 산책 같이 할 분",
    reason: "오늘 저녁 · 야경 취향 비슷",
  },
];

const NAV_ITEMS = [
  { icon: Home, label: "홈", href: "/home", active: true, isCreate: false },
  { icon: Search, label: "탐색", href: "#", active: false, isCreate: false },
  { icon: Plus, label: "", href: "#", active: false, isCreate: true },
  { icon: Heart, label: "찜", href: "#", active: false, isCreate: false },
  { icon: User, label: "나", href: "#", active: false, isCreate: false },
] as const;

export default function HomePage() {
  const [viewState, setViewState] = useState<ViewState>("default");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  function toggleBookmark(id: string, e: React.MouseEvent) {
    e.preventDefault();
    setBookmarks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header
        className="fixed top-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[420px] flex items-center justify-between px-4 bg-white"
        style={{ height: "56px", borderBottom: "1px solid #f3f3f3" }}
      >
        <span
          className="text-[20px] font-bold text-primary"
          style={{ letterSpacing: "-0.5px" }}
        >
          TRADDY
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-subdued">파리 마레 · 오늘 저녁</span>
          <Link href="/setup" aria-label="매칭 설정 변경">
            <Settings size={20} className="text-body" />
          </Link>
        </div>
      </header>

      {/* Mockup state switcher */}
      <div
        className="fixed z-10 left-1/2 -translate-x-1/2 w-full max-w-[420px] flex items-center gap-1 px-4"
        style={{ top: "56px", height: "38px", background: "#f9f9f9", borderBottom: "1px solid #eeeeee" }}
      >
        <span className="text-[10px] font-medium mr-1" style={{ color: "#c2c2c2" }}>MOCKUP</span>
        {(["default", "empty", "loading", "error"] as ViewState[]).map((s) => (
          <button
            key={s}
            onClick={() => setViewState(s)}
            className="flex-1 text-[11px] font-medium rounded h-[22px]"
            style={{
              background: viewState === s ? "#eb2b51" : "#ffffff",
              color: viewState === s ? "#ffffff" : "#999999",
              border: "1px solid #e5e5e5",
            }}
          >
            {s === "default" ? "기본" : s === "empty" ? "빈 상태" : s === "loading" ? "로딩" : "오류"}
          </button>
        ))}
      </div>

      {/* Scrollable content area */}
      <main
        className="flex-1 overflow-y-auto"
        style={{ paddingTop: "94px", paddingBottom: "68px" }}
      >
      <div className="max-w-[420px] mx-auto px-4">
        {viewState === "default" && (
          <>
            <p className="text-[14px] text-subdued pt-3 pb-4">
              오늘 저녁, 마레 근처에 맞는 동행이에요
            </p>
            <div className="flex flex-col gap-3">
              {FEED_CARDS.map((card) => (
                <Link
                  key={card.id}
                  href={`/companion/${card.id}`}
                  className="block rounded-[8px] p-4 bg-white"
                  style={{ border: "1px solid #e5e5e5" }}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold text-white flex-shrink-0"
                        style={{ background: card.type === "recruit" ? "#1ec7be" : "#eb2b51" }}
                      >
                        {card.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {card.type === "recruit" && (
                            <span
                              className="text-[11px] font-medium px-1.5 py-0.5 rounded"
                              style={{ background: "rgba(30,199,190,0.1)", color: "#1ec7be" }}
                            >
                              모집중
                            </span>
                          )}
                          <span className="text-[15px] font-semibold text-body">{card.name}</span>
                          <span className="text-[14px] text-muted">{card.age}</span>
                          {card.verified && (
                            <span
                              className="flex items-center gap-0.5 text-[11px] font-medium"
                              style={{ color: "#1ec7be" }}
                            >
                              <CheckCircle size={12} />
                              인증완료
                            </span>
                          )}
                        </div>
                        {card.reviewCount > 0 && (
                          <p className="text-[12px] text-muted mt-0.5">
                            후기 {card.reviewScore} ({card.reviewCount}개)
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Bookmark */}
                    <button
                      onClick={(e) => toggleBookmark(card.id, e)}
                      aria-label={bookmarks.has(card.id) ? "찜 해제" : "찜하기"}
                      className="p-1 -mr-1 flex-shrink-0"
                    >
                      <Heart
                        size={20}
                        fill={bookmarks.has(card.id) ? "#eb2b51" : "none"}
                        stroke={bookmarks.has(card.id) ? "#eb2b51" : "#cccccc"}
                      />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: "#f3f3f3", color: "#666666" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mt-2.5 text-[14px] text-body font-medium">
                    &ldquo;{card.quote}&rdquo;
                  </p>

                  {/* Reason label + count */}
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className="text-[12px] font-medium px-2 py-0.5 rounded"
                      style={{ background: "rgba(235,43,81,0.07)", color: "#eb2b51" }}
                    >
                      {card.reason}
                    </span>
                    {card.type === "recruit" && (
                      <span className="text-[12px] text-muted">
                        {(card as RecruitCard).currentCount}/{(card as RecruitCard).maxCount}명
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {viewState === "empty" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: "#f3f3f3" }}
            >
              <Users size={28} style={{ color: "#c2c2c2" }} />
            </div>
            <p className="text-[15px] text-muted mb-1">
              아직 딱 맞는 동행은 안 보이네요
            </p>
            <p className="text-[14px] mb-7" style={{ color: "#bbbbbb" }}>
              비슷한 루트부터 가볍게 둘러볼 수 있어요
            </p>
            <button
              className="flex items-center justify-center px-6 text-[15px] font-semibold text-white rounded-[6px]"
              style={{ height: "40px", background: "#17181a" }}
            >
              둘러볼 수 있어요
            </button>
          </div>
        )}

        {viewState === "loading" && (
          <div className="flex flex-col gap-3 pt-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-[8px] p-4 animate-pulse"
                style={{ border: "1px solid #e5e5e5" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 rounded bg-surface w-28" />
                    <div className="h-3 rounded bg-surface w-20" />
                  </div>
                </div>
                <div className="flex gap-1.5 mt-3">
                  <div className="h-5 rounded-full bg-surface w-20" />
                  <div className="h-5 rounded-full bg-surface w-14" />
                </div>
                <div className="h-4 rounded bg-surface w-44 mt-3" />
                <div className="h-5 rounded bg-surface w-28 mt-2" />
              </div>
            ))}
          </div>
        )}

        {viewState === "error" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-[15px] text-body font-medium mb-1.5">
              잠시 연결이 흔들렸어요
            </p>
            <p className="text-[14px] text-subdued mb-7">
              한 번만 다시 불러올게요
            </p>
            <button
              className="flex items-center gap-2 px-5 text-[15px] font-medium rounded-[6px]"
              style={{
                height: "40px",
                color: "#1ec7be",
                border: "1px solid #1ec7be",
              }}
            >
              <RotateCcw size={16} />
              다시 시도
            </button>
          </div>
        )}
      </div>
      </main>

      {/* Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[420px] flex items-center bg-white"
        style={{ height: "52px", borderTop: "1px solid #e5e5e5" }}
      >
        {NAV_ITEMS.map(({ icon: Icon, label, href, active, isCreate }) => (
          <Link
            key={label || "create"}
            href={href}
            className="flex-1 flex flex-col items-center justify-center"
          >
            {isCreate ? (
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#eb2b51" }}
              >
                <Icon size={18} color="#ffffff" />
              </div>
            ) : (
              <>
                <Icon size={22} color={active ? "#eb2b51" : "#999999"} />
                <span className="text-[10px] mt-0.5" style={{ color: active ? "#eb2b51" : "#999999" }}>
                  {label}
                </span>
              </>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
