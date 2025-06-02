import { PageHeader } from "~/components/page-header";
import { getRouteMeta } from "~/config/config";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    const meta = getRouteMeta("/");
    return [
        { title: meta?.title ?? "Inicio" },
        {
            name: "description",
            content: meta?.description ?? "Página de inicio",
        },
    ];
}

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <PageHeader routePath="/" className="mb-12" />

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-4xl mb-4">🎯</div>
                        <h2 className="text-2xl font-semibold mb-3 text-blue-600">
                            Nuestros Servicios
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ofrecemos soluciones innovadoras y personalizadas para satisfacer todas
                            tus necesidades.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-4xl mb-4">💼</div>
                        <h2 className="text-2xl font-semibold mb-3 text-green-600">Experiencia</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Con años de experiencia en el sector, garantizamos calidad y
                            profesionalismo en cada proyecto.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-4xl mb-4">🤝</div>
                        <h2 className="text-2xl font-semibold mb-3 text-purple-600">Compromiso</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nos comprometemos a brindar el mejor servicio al cliente y superar tus
                            expectativas.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Listo para empezar?</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Explora nuestras páginas para conocer más sobre nosotros y nuestros
                        servicios.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                            ✨ Navegación fluida
                        </span>
                        <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            📱 Diseño responsivo
                        </span>
                        <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                            🚀 Experiencia moderna
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
