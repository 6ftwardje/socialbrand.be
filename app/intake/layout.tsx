/**
 * Fullscreen intake layout: no Navbar/Footer.
 * Uses a fixed overlay so the form fills the viewport (100dvh).
 */
export default function IntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 min-h-[100dvh] bg-[var(--background)] text-[var(--foreground)]">
      {children}
    </div>
  );
}
