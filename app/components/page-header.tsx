import { getRoutePageData } from "~/config/config";

interface PageHeaderProps {
    /** Ruta actual para obtener datos de configuración */
    routePath: string;
    /** Título H1 personalizado (opcional, sobrescribe configuración) */
    customTitle?: string;
    /** Descripción personalizada (opcional, sobrescribe configuración) */
    customDescription?: string;
    /** Clases CSS adicionales para el contenedor */
    className?: string;
}

export function PageHeader({
    routePath,
    customTitle,
    customDescription,
    className = "",
}: PageHeaderProps) {
    const pageData = getRoutePageData(routePath);

    const title = customTitle ?? pageData?.h1Title ?? "Página";
    const description = customDescription ?? pageData?.h1Description ?? "";

    return (
        <div className={`text-center mb-8 ${className}`}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
            {description && (
                <p className="text-xl text-gray-600">{description}</p>
            )}
        </div>
    );
}
