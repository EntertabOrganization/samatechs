"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/ssr";
import { Container } from "./Container";
import { Logo } from "@/components/brand/Logo";
import { ClayButton } from "@/components/ui/ClayButton";
import { NAV_LINKS, PRIMARY_CTA } from "@/content/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="clay-dark sticky top-0 z-50" data-surface="dark">
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary">
          <Link href="/" className="shrink-0" aria-label="SAMATECHS — Home">
            <Logo tone="light" />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-[family-name:var(--font-body)] text-[0.95rem] font-medium transition-colors ${
                      isActive ? "text-intelligence" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <ClayButton href={PRIMARY_CTA.href} variant="primary">
              {PRIMARY_CTA.label}
            </ClayButton>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="clay-press -mr-2 flex h-11 w-11 items-center justify-center rounded-[14px] text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={26} weight="regular" /> : <List size={26} weight="regular" />}
          </button>
        </nav>
      </Container>

      {open ? (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className="clay-dark fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col overflow-y-auto md:hidden"
          data-surface="dark"
        >
          <Container className="flex flex-1 flex-col justify-between py-10">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block rounded-[14px] px-3 py-4 font-[family-name:var(--font-display)] text-2xl font-semibold ${
                        isActive ? "text-intelligence" : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ClayButton
              href={PRIMARY_CTA.href}
              variant="primary"
              className="mt-10 w-full"
              onClick={() => setOpen(false)}
            >
              {PRIMARY_CTA.label}
            </ClayButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
