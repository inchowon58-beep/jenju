export default function FloatingBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/80 bg-white/95 backdrop-blur-md"
      role="complementary"
      aria-label="빠른 연락 바로가기"
    >
      <div className="mx-auto flex max-w-3xl gap-2 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:gap-3 sm:px-6">
        <a
          href="https://www.agapetstory.co.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3 text-center text-sm font-semibold text-brand-900 shadow-sm transition hover:border-brand-500 hover:bg-brand-50 sm:px-4 sm:text-base"
        >
          아가펫홈페이지 바로가기
        </a>
        <a
          href="tel:0505-707-0401"
          className="flex flex-1 items-center justify-center rounded-xl bg-accent-500 px-3 py-3 text-center text-sm font-bold text-white shadow-md transition hover:bg-accent-600 sm:px-4 sm:text-base"
        >
          강아지파양 전화문의
        </a>
      </div>
    </div>
  );
}
