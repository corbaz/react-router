import { PageHeader } from "~/components/page-header";
import { getRouteMeta } from "~/config/config";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
    const meta = getRouteMeta("/about");
    return [
        { title: meta?.title ?? "Nosotros" },
        {
            name: "description",
            content: meta?.description ?? "Conoce más sobre nosotros",
        },
    ];
}

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <PageHeader routePath="/about" />

                <div className="grid md:grid-cols-1 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                            Nuestra Historia
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Fundada en 2025, nuestra empresa nació con la visión
                            de crear soluciones web modernas y eficientes que
                            ayuden a las empresas a crecer en el mundo digital.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Utilizamos las últimas tecnologías para ofrecer
                            experiencias de usuario excepcionales y sistemas
                            robustos que impulsan el éxito de nuestros clientes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 text-green-600">
                                Misión
                            </h3>
                            <p className="text-gray-700">
                                Desarrollar aplicaciones web innovadoras que
                                transformen la manera en que las empresas
                                interactúan con sus usuarios.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 text-purple-600">
                                Visión
                            </h3>
                            <p className="text-gray-700">
                                Ser líderes en el desarrollo de soluciones web
                                que impulsen la transformación digital de las
                                empresas.
                            </p>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
