import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-dark";

const baseClass =
  "clay-press inline-flex items-center justify-center gap-2 rounded-[16px] px-7 py-3.5 text-[0.95rem] font-semibold font-[family-name:var(--font-body)] transition-colors";

const variantClass: Record<Variant, string> = {
  primary: "clay-blue text-white",
  secondary: "clay-light text-navy",
  "ghost-dark": "border border-white/25 text-white hover:border-white/50 hover:bg-white/5",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

type ClayButtonProps = LinkButtonProps | NativeButtonProps;

export function ClayButton(props: ClayButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${baseClass} ${variantClass[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<LinkButtonProps, "variant" | "className" | "children">;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
