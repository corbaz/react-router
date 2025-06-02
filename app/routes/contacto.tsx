import { PageHeader } from "~/components/page-header";
import { getRouteMeta } from "~/config/config";
import type { Route } from "./+types/contacto";

export function meta({}: Route.MetaArgs) {
    const meta = getRouteMeta("/contacto");
    return [
        { title: meta?.title ?? "Contacto" },
        { name: "description", content: meta?.description ?? "Contáctanos" },
    ];
}

export default function Contacto() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <PageHeader routePath="/contacto" />

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6 text-blue-600">
                            Envíanos un Mensaje
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="¿En qué podemos ayudarte?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-6 text-green-600">
                            Información de Contacto
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <span className="text-green-600 text-xl">📧</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Email</h3>
                                    <p className="text-gray-600">contacto@misitio.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <span className="text-green-600 text-xl">📱</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Teléfono</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <span className="text-green-600 text-xl">📍</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Dirección</h3>
                                    <p className="text-gray-600">
                                        123 Web Street
                                        <br />
                                        Digital City, DC 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <span className="text-green-600 text-xl">⏰</span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Horarios</h3>
                                    <p className="text-gray-600">
                                        Lun - Vie: 9:00 AM - 6:00 PM
                                        <br />
                                        Sáb: 10:00 AM - 4:00 PM
                                        <br />
                                        Dom: Cerrado
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
