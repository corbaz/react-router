import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home - Mi Sitio Web" },
        { name: "description", content: "Página principal de mi sitio web" },
    ];
}

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Bienvenido a Mi Sitio Web
                    </h1>
                    <p className="text-xl text-gray-600">
                        Una aplicación moderna construida con React Router v7
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3 text-blue-600">
                            ¿Qué ofrecemos?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nuestra plataforma te permite gestionar usuarios de
                            manera eficiente y conocer más sobre nuestros
                            servicios. Explora las diferentes secciones del
                            sitio.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3 text-green-600">
                            Tecnología Moderna
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Construido con las últimas tecnologías: React 19,
                            React Router v7, Tailwind CSS y Bun para una
                            experiencia rápida y fluida.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
