export function Eyebrow({ children, className = "" }: { children: string; className?: string }) {
  return <p className={`eyebrow text-sovereign ${className}`}>{children}</p>;
}
