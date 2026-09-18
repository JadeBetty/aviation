export function Footer() {
  return (
    <footer className="mt-20 border-t border-border pt-6 pb-10 text-xs text-text-faint">
      <p>
        <span className="mr-1">©</span>2026{" "}
        <a
          href={process.env.NEXT_PUBLIC_PORTFOLIO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted underline decoration-border underline-offset-2 transition-colors hover:text-text"
        >
          {process.env.NEXT_PUBLIC_NAME}
        </a>
        {", "}
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted underline decoration-border underline-offset-2 transition-colors hover:text-text"
        >
          github
        </a>
      </p>
    </footer>
  );
}
