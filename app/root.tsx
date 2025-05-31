import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    NavLink,
} from "react-router";

import type { Route } from "./+types/root";
import { MobileSlideTransition } from "./components/mobile-slide-transition";
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
                <header className="bg-blue-600 text-white shadow-md">
                    <nav className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="text-xl font-bold mb-3 md:mb-0">
                                Mi Sitio Web
                            </div>
                            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `hover:text-blue-200 transition-colors ${
                                                isActive
                                                    ? "border-b-2 border-white"
                                                    : ""
                                            }`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `hover:text-blue-200 transition-colors ${
                                                isActive
                                                    ? "border-b-2 border-white"
                                                    : ""
                                            }`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/usuarios"
                                        className={({ isActive }) =>
                                            `hover:text-blue-200 transition-colors ${
                                                isActive
                                                    ? "border-b-2 border-white"
                                                    : ""
                                            }`
                                        }
                                    >
                                        Usuarios
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className="flex-1 mobile-transition-container">
                    <MobileSlideTransition>{children}</MobileSlideTransition>
                </main>

                <footer className="bg-gray-800 text-white py-6">
                    <div className="container mx-auto px-4 text-center">
                        <p>
                            &copy; 2025 Mi Sitio Web. Todos los derechos
                            reservados.
                        </p>
                    </div>
                </footer>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <MobileSlideTransition>
            <Outlet />
        </MobileSlideTransition>
    );
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
