import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { getNavigationRoutes, SYSTEM_CONFIG } from "~/config/config";

export function Header() {
    const location = useLocation();
    const routes = getNavigationRoutes();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Cerrar menú al cambiar de ruta
    useEffect(() => {
        closeMobileMenu();
    }, [location.pathname]);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                closeMobileMenu();
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Prevenir scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("mobile-menu-open");
        } else {
            document.body.classList.remove("mobile-menu-open");
        }

        return () => {
            document.body.classList.remove("mobile-menu-open");
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            ref={headerRef}
            className={`${SYSTEM_CONFIG.header.backgroundColor} ${SYSTEM_CONFIG.header.textColor} shadow-lg sticky top-0 z-50`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Sitio */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-xl font-bold hover:text-gray-300 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            {SYSTEM_CONFIG.header.siteName}
                        </Link>
                    </div>

                    {/* Navegación Desktop */}
                    <nav className="hidden md:flex space-x-8">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                to={route.path}
                                className={`hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                                    location.pathname === route.path ? "bg-gray-700 text-white" : ""
                                }`}
                            >
                                {route.displayName}
                            </Link>
                        ))}
                    </nav>

                    {/* Botón Hamburguesa - Solo Mobile */}
                    {SYSTEM_CONFIG.header.mobile?.showHamburger && (
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className={`${SYSTEM_CONFIG.header.mobile.hamburgerColor} hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors`}
                                aria-label="Abrir menú"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMobileMenuOpen ? (
                                        // Icono X para cerrar
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        // Icono hamburguesa
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Menú Mobile - Desplegable */}
                {SYSTEM_CONFIG.header.mobile?.showHamburger && (
                    <div
                        className={`md:hidden transition-all duration-300 ease-in-out ${
                            isMobileMenuOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                    >
                        <nav
                            className={`${SYSTEM_CONFIG.header.mobile.mobileMenuBg} ${SYSTEM_CONFIG.header.mobile.mobileMenuText} px-2 pt-2 pb-3 space-y-1 border-t border-gray-700`}
                        >
                            {routes.map((route) => (
                                <Link
                                    key={route.path}
                                    to={route.path}
                                    onClick={closeMobileMenu}
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors ${
                                        location.pathname === route.path
                                            ? "bg-gray-700 text-white"
                                            : "text-gray-300"
                                    }`}
                                >
                                    {route.displayName}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
