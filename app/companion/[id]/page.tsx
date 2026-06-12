import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CompanionPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col mx-auto max-w-[420px]">
      <header
        className="flex items-center px-4"
        style={{ height: "56px", borderBottom: "1px solid #f3f3f3" }}
      >
        <Link href="/home" className="p-1 -ml-1">
          <ChevronLeft size={24} style={{ color: "#323232" }} />
        </Link>
        <h1 className="text-[17px] font-semibold ml-2" style={{ color: "#323232" }}>
          동행 상세
        </h1>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[14px] mb-2" style={{ color: "#999999" }}>
          S004 동행 상세 화면은 다음 스프린트에서 구현됩니다
        </p>
        <Link
          href="/home"
          className="text-[14px] underline underline-offset-4"
          style={{ color: "#666666" }}
        >
          추천 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
