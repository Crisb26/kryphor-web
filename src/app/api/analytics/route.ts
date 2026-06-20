export const runtime = "edge";

interface PageStat { views: number; lastSeen: string; }
declare global { var __analytics: Map<string, PageStat> | undefined; }
const store: Map<string, PageStat> = globalThis.__analytics ?? (globalThis.__analytics = new Map());

export async function POST(req: Request) {
  try {
    const { path } = await req.json() as { path: string };
    if (!path || typeof path !== "string") return Response.json({ ok: false }, { status: 400 });
    const safe = path.slice(0, 100);
    const prev = store.get(safe) ?? { views: 0, lastSeen: "" };
    store.set(safe, { views: prev.views + 1, lastSeen: new Date().toISOString() });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  if (token !== process.env.ADMIN_EMAIL) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return Response.json(Object.fromEntries(store));
}
