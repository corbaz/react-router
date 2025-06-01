import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { MobileSlideTransition } from "./components/mobile-slide-transition";
import { TransitionProvider } from "./contexts/transition-context";
import { SpeedSelector } from "./components/speed-selector";
import { AutoNavigation } from "./components/auto-navigation";
import { SYSTEM_CONFIG } from "./config/config";
import "./app.css";

export const links: Route.LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
];

function LayoutContent({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header
                className={`${SYSTEM_CONFIG.header.backgroundColor} ${SYSTEM_CONFIG.header.textColor} shadow-md`}
            >
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 lg:mb-0">
                            <div className="text-xl font-bold mb-3 md:mb-0">
                                {SYSTEM_CONFIG.header.siteName}
                            </div>
                            {SYSTEM_CONFIG.header.showSpeedSelector && (
                                <div className="md:ml-6">
                                    <SpeedSelector />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <AutoNavigation />
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex-1 mobile-transition-container">
                <MobileSlideTransition>{children}</MobileSlideTransition>
            </main>

            <footer
                className={`${SYSTEM_CONFIG.footer.backgroundColor} ${SYSTEM_CONFIG.footer.textColor} py-6`}
            >
                <div className="container mx-auto px-4 text-center">
                    <p>{SYSTEM_CONFIG.footer.copyrightText}</p>{" "}
                    <p className="text-sm mt-2 opacity-80">
                        {SYSTEM_CONFIG.footer.secondaryText}
                    </p>
                </div>
            </footer>
        </>
    );
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="min-h-screen flex flex-col">
                <TransitionProvider>
                    <LayoutContent>{children}</LayoutContent>
                </TransitionProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
