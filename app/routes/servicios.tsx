import type { Route } from "./+types/servicios";
import { getRouteMeta } from "~/config/config";
import { PageHeader } from "~/components/page-header";

export function meta({}: Route.MetaArgs) {
    const meta = getRouteMeta("/servicios");
    return [
        { title: meta?.title || "Servicios" },
        {
            name: "description",
            content: meta?.description || "Nuestros servicios profesionales",
        },
    ];
}

// Datos de ejemplo para servicios
const servicios = [
    {
        id: 1,
        titulo: "Desarrollo Web",
        descripcion: "Creamos sitios web modernos y responsive",
        icono: "🌐",
        precio: "Desde $500",
    },
    {
        id: 2,
        titulo: "Aplicaciones Móviles",
        descripcion: "Apps nativas e híbridas para iOS y Android",
        icono: "📱",
        precio: "Desde $1,200",
    },
    {
        id: 3,
        titulo: "E-commerce",
        descripcion: "Tiendas online completas y seguras",
        icono: "🛒",
        precio: "Desde $800",
    },
    {
        id: 4,
        titulo: "Consultoría IT",
        descripcion: "Asesoramiento tecnológico especializado",
        icono: "💼",
        precio: "Desde $100/hora",
    },
    {
        id: 5,
        titulo: "SEO y Marketing Digital",
        descripcion: "Optimización y estrategias de marketing online",
        icono: "📈",
        precio: "Desde $300/mes",
    },
    {
        id: 6,
        titulo: "Mantenimiento Web",
        descripcion: "Soporte técnico y actualizaciones continuas",
        icono: "🔧",
        precio: "Desde $150/mes",
    },
];

export default function Servicios() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <PageHeader routePath="/servicios" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicios.map((servicio) => (
                        <div
                            key={servicio.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="text-4xl mb-4 text-center">
                                {servicio.icono}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                                {servicio.titulo}
                            </h3>
                            <p className="text-gray-600 mb-4 text-center">
                                {servicio.descripcion}
                            </p>
                            <div className="text-center">
                                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {servicio.precio}
                                </span>
                            </div>
                            <div className="mt-4 text-center">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                    Solicitar Información
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            ¿Necesitas un servicio personalizado?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Contáctanos para discutir tus necesidades
                            específicas y crear una solución a medida.
                        </p>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-lg font-medium">
                            Contactar Ahora
                        </button>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                            Proceso de Trabajo
                        </h2>
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                    1
                                </div>
                                <h3 className="font-semibold mb-2">Consulta</h3>
                                <p className="text-sm text-gray-600">
                                    Analizamos tus necesidades
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                    2
                                </div>
                                <h3 className="font-semibold mb-2">
                                    Propuesta
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Creamos una solución personalizada
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                    3
                                </div>
                                <h3 className="font-semibold mb-2">
                                    Desarrollo
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Implementamos la solución
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                                    4
                                </div>
                                <h3 className="font-semibold mb-2">Entrega</h3>
                                <p className="text-sm text-gray-600">
                                    Lanzamos y damos soporte
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
