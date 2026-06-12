import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10">
          <span
            className="text-[38px] font-[800] tracking-[-1px] text-primary"
            style={{ fontFamily: "var(--font-paperozi)" }}
          >
            TRADDY
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-10 space-y-3">
          <h1
            className="text-[24px] font-[700] leading-[1.5] text-dark tracking-[-0.4px]"
            style={{ fontFamily: "var(--font-paperozi)" }}
          >
            혼자 떠난 여행도,
            <br />
            누군가와 함께라면
            <br />
            또 다른 하루가 될 수 있어요
          </h1>
          <p className="text-[15px] leading-[1.6] text-subdued">
            오늘 일정·무드에 맞는
            <br />
            여행 동행을 바로 추천해줘요
          </p>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col items-center gap-5">
          <Link
            href="/setup"
            className="w-full flex items-center justify-center h-[50px] bg-primary text-white text-[16px] font-semibold rounded-[8px] transition-opacity active:opacity-80"
          >
            내 일정으로 추천받기
          </Link>
          <Link
            href="/home"
            className="text-[14px] text-muted underline-offset-4 hover:underline"
          >
            둘러보기만 먼저 할래요
          </Link>
        </div>
      </div>
    </div>
  );
}
