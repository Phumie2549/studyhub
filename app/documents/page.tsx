"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type DocumentItem = {
  id: number;
  title: string;
  content: string | null;
};

export default function DocumentsPage() {
  const supabase = createClient();

  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadDocuments() {
    const { data } = await supabase
      .from("documents")
      .select("id, title, content")
      .order("created_at", { ascending: false });

    setDocuments(data || []);
  }

  useEffect(() => {
    loadDocuments();
  }, []);

  async function addDocument() {
    if (!title.trim()) return;

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    await supabase.from("documents").insert({
      user_id: user.id,
      title,
      content,
    });

    setTitle("");
    setContent("");

    await loadDocuments();

    setLoading(false);
  }

  async function deleteDocument(id: number) {
    await supabase
      .from("documents")
      .delete()
      .eq("id", id);

    await loadDocuments();
  }

  return (
    <main className="min-h-screen bg-[#07070a] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/dashboard"
          className="text-sm text-purple-400"
        >
          ← Dashboard
        </a>

        <h1 className="mt-6 text-4xl font-bold">
          📚 บันทึกการเรียน
        </h1>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="หัวข้อ เช่น Database Chapter 1"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-purple-500"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="เขียนเนื้อหาที่ต้องการบันทึก..."
            rows={8}
            className="mt-4 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-purple-500"
          />

          <button
            onClick={addDocument}
            disabled={loading}
            className="mt-4 rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500 disabled:opacity-50"
          >
            {loading ? "กำลังบันทึก..." : "บันทึก"}
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">
                    {doc.title}
                  </h2>

                  <p className="mt-3 whitespace-pre-wrap text-zinc-400">
                    {doc.content}
                  </p>
                </div>

                <button
                  onClick={() => deleteDocument(doc.id)}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}