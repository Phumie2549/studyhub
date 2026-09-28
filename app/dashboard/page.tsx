import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, plan")
    .eq("id", user.id)
    .single();

  const { count: documentCount } = await supabase
    .from("documents")
    .select("*", { count: "exact", head: true });

  const { count: taskCount } = await supabase
    .from("tasks")
    .select("*", { count: "exact", head: true });

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <nav className="border-b border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold">
            Study<span className="text-purple-500">Hub</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">
              {user.email}
            </span>

            <form action="/auth/signout" method="post">
              <button className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5">
                ออกจากระบบ
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <p className="text-sm text-purple-400">
            DASHBOARD
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            สวัสดี 👋
          </h1>

          <p className="mt-2 text-zinc-400">
            จัดการการเรียนของคุณได้จากที่นี่
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-zinc-400">
              แผนปัจจุบัน
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {profile?.plan?.toUpperCase() || "FREE"}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-zinc-400">
              เอกสาร
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {documentCount || 0}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-zinc-400">
              งาน
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {taskCount || 0}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/documents"
            className="rounded-2xl border border-white/10 bg-purple-600/10 p-8 hover:bg-purple-600/20"
          >
            <h2 className="text-2xl font-bold">
              📚 บันทึกการเรียน
            </h2>

            <p className="mt-2 text-zinc-400">
              สร้างและจัดเก็บโน้ตการเรียนของคุณ
            </p>
          </Link>

          <Link
            href="/tasks"
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.08]"
          >
            <h2 className="text-2xl font-bold">
              ✅ งานของฉัน
            </h2>

            <p className="mt-2 text-zinc-400">
              จัดการงานและสิ่งที่ต้องทำ
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}