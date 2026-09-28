export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#07070a]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            Study<span className="text-violet-500">Hub</span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#features" className="transition hover:text-white">
              เครื่องมือ
            </a>
            <a href="#pricing" className="transition hover:text-white">
              ราคา
            </a>
            <a href="#about" className="transition hover:text-white">
              เกี่ยวกับเรา
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="rounded-xl px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              เข้าสู่ระบบ
            </a>

            <a
              href="/register"
              className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold transition hover:bg-violet-500"
            >
              สมัครสมาชิก
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 text-center md:pt-32">
          <div className="mx-auto mb-6 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            🚀 เครื่องมือสำหรับนักศึกษายุคใหม่
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            เรียนง่ายขึ้น
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              ในที่เดียว
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            รวมเครื่องมือสำหรับนักศึกษาไว้ในที่เดียว
            ช่วยจัดการบทเรียน งานเอกสาร และการเรียนให้สะดวกยิ่งขึ้น
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/register"
              className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500"
            >
              เริ่มใช้งานฟรี →
            </a>

            <a
              href="#pricing"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              ดูแพ็กเกจ
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              FEATURES
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              ทุกอย่างที่จำเป็นสำหรับการเรียน
            </h2>

            <p className="mt-4 text-zinc-400">
              เครื่องมือที่เราจะพัฒนาให้ใช้งานได้จริงใน StudyHub
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon="📝"
              title="สรุปบทเรียน"
              description="ช่วยจัดระเบียบและสรุปเนื้อหาที่เรียน"
            />

            <Feature
              icon="🤖"
              title="AI Assistant"
              description="ผู้ช่วยสำหรับค้นหาและทำความเข้าใจบทเรียน"
            />

            <Feature
              icon="📚"
              title="จัดการงาน"
              description="บันทึกและจัดการงานของคุณไว้ในที่เดียว"
            />

            <Feature
              icon="📊"
              title="Presentation"
              description="ช่วยสร้างโครงสร้างสำหรับงานนำเสนอ"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              PRICING
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              เลือกแพ็กเกจที่เหมาะกับคุณ
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Free */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-lg font-semibold">FREE</p>

              <div className="mt-5">
                <span className="text-5xl font-bold">฿0</span>
                <span className="text-zinc-500"> / เดือน</span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-zinc-400">
                <li>✓ เครื่องมือพื้นฐาน</li>
                <li>✓ ใช้งานแบบจำกัด</li>
                <li>✓ บันทึกงาน</li>
                <li>✓ สร้างบัญชีฟรี</li>
              </ul>

              <a
                href="/register"
                className="mt-8 block rounded-xl border border-white/10 py-3 text-center font-semibold transition hover:bg-white/5"
              >
                เริ่มใช้ฟรี
              </a>
            </div>

            {/* Pro */}
            <div className="relative rounded-3xl border border-violet-500/50 bg-violet-500/[0.07] p-8 shadow-2xl shadow-violet-900/20">
              <div className="absolute right-6 top-6 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold">
                POPULAR
              </div>

              <p className="text-lg font-semibold text-violet-300">
                PRO
              </p>

              <div className="mt-5">
                <span className="text-5xl font-bold">฿99</span>
                <span className="text-zinc-500"> / เดือน</span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-zinc-300">
                <li>✓ เครื่องมือทั้งหมด</li>
                <li>✓ AI Tools</li>
                <li>✓ ใช้งานได้มากขึ้น</li>
                <li>✓ เก็บประวัติงาน</li>
                <li>✓ ฟีเจอร์ Premium</li>
              </ul>

              <a
                href="/register"
                className="mt-8 block rounded-xl bg-violet-600 py-3 text-center font-semibold transition hover:bg-violet-500"
              >
                สมัคร PRO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="about"
        className="border-t border-white/10 bg-[#0a0a0f]"
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">
            พร้อมเริ่มใช้งานหรือยัง?
          </h2>

          <p className="mt-5 text-zinc-400">
            สร้างบัญชีฟรีและเริ่มใช้ StudyHub ได้ทันที
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            สร้างบัญชีฟรี →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 StudyHub. All rights reserved.
          </p>

          <p>
            Built for students.
          </p>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/[0.05]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
}