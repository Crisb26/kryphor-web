import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>
      <AdminSidebar />
      <main className="flex-1 ml-60 p-8 min-h-screen" style={{ background: "var(--bg)" }}>{children}</main>
    </div>
  );
}
