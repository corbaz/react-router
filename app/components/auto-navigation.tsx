import { NavLink } from "react-router";
import { useNavigation } from "~/hooks/use-navigation";

/**
 * Componente de navegación automática
 * Se construye dinámicamente desde la configuración central
 */
export function AutoNavigation() {
    const { navigationItems } = useNavigation();

    return (
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            {navigationItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `text-white hover:text-pink-300 transition-colors font-medium ${
                            isActive
                                ? "text-pink-300 border-b-2 border-pink-300"
                                : ""
                        }`
                    }
                >
                    {item.displayName}
                </NavLink>
            ))}
        </nav>
    );
}
