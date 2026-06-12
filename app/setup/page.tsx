import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col mx-auto max-w-[420px]">
      <header
        className="flex items-center px-4"
        style={{ height: "56px", borderBottom: "1px solid #f3f3f3" }}
      >
        <Link href="/" className="p-1 -ml-1">
          <ChevronLeft size={24} style={{ color: "#323232" }} />
        </Link>
        <h1 className="text-[17px] font-semibold ml-2 text-body">빠른 매칭 설정</h1>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[14px] text-muted mb-2">S002 화면은 다음 스프린트에서 구현됩니다</p>
        <Link
          href="/home"
          className="text-[14px] text-subdued underline underline-offset-4"
        >
          추천 홈으로 바로 이동 →
        </Link>
      </div>
    </div>
  );
}
