export function Footer() {
    return (
        <footer className="w-full border-t border-border/60 bg-background/80">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row md:px-8 lg:px-12">
                <p>© 2026 Pug Overflow. All rights reserved.</p>

                <p>
                    Source code available on{" "}
                    <a
                        href="https://github.com/pugoverflow/pugoverflow.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 hover:opacity-80"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </footer>
    )
}