export function CapabilityChip({ children }: { children: string }) {
  return (
    <li className="clay-light rounded-[13px] px-4 py-2.5 text-[0.92rem] leading-snug text-navy font-[family-name:var(--font-body)]">
      {children}
    </li>
  );
}
