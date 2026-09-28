"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TasksPage() {
  const supabase = createClient();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  async function loadTasks() {
    const { data } = await supabase
      .from("tasks")
      .select("id, title, completed")
      .order("created_at", { ascending: false });

    setTasks(data || []);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask() {
    if (!title.trim()) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    await supabase.from("tasks").insert({
      user_id: user.id,
      title,
    });

    setTitle("");

    loadTasks();
  }

  async function toggleTask(task: Task) {
    await supabase
      .from("tasks")
      .update({
        completed: !task.completed,
      })
      .eq("id", task.id);

    loadTasks();
  }

  async function deleteTask(id: number) {
    await supabase
      .from("tasks")
      .delete()
      .eq("id", id);

    loadTasks();
  }

  return (
    <main className="min-h-screen bg-[#07070a] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/dashboard"
          className="text-sm text-purple-400"
        >
          ← Dashboard
        </a>

        <h1 className="mt-6 text-4xl font-bold">
          ✅ งานของฉัน
        </h1>

        <div className="mt-8 flex gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
            placeholder="เพิ่มงาน..."
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-purple-500"
          />

          <button
            onClick={addTask}
            className="rounded-xl bg-purple-600 px-6 font-semibold hover:bg-purple-500"
          >
            เพิ่ม
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <button
                onClick={() => toggleTask(task)}
                className="flex items-center gap-3 text-left"
              >
                <span className="text-xl">
                  {task.completed ? "☑️" : "⬜"}
                </span>

                <span
                  className={
                    task.completed
                      ? "text-zinc-500 line-through"
                      : ""
                  }
                >
                  {task.title}
                </span>
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-sm text-red-400"
              >
                ลบ
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}