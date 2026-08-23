import Link from "next/link";

const GITHUB_URL = "https://github.com/XhuuLL/Resuma";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <div>
          <span className="font-bold italic bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            Resuma
          </span>
        </div>
        <nav className="flex items-center gap-5">
          <Link href="/editor" className="hover:text-foreground">
            Editor
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
        <span>Created by fatkhul</span>
      </div>
    </footer>
  );
}
