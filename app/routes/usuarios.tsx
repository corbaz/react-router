import type { Route } from "./+types/usuarios";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Usuarios - Mi Sitio Web" },
        { name: "description", content: "Gestión de usuarios" },
    ];
}

// Datos de ejemplo
const usuarios = [
    { id: 1, nombre: "Ana García", email: "ana@example.com", rol: "Admin" },
    {
        id: 2,
        nombre: "Carlos López",
        email: "carlos@example.com",
        rol: "Usuario",
    },
    {
        id: 3,
        nombre: "María Rodríguez",
        email: "maria@example.com",
        rol: "Editor",
    },
    {
        id: 4,
        nombre: "Luis Martínez",
        email: "luis@example.com",
        rol: "Usuario",
    },
    {
        id: 5,
        nombre: "Sofia Hernández",
        email: "sofia@example.com",
        rol: "Admin",
    },
];

export default function Usuarios() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Gestión de Usuarios
                    </h1>
                    <p className="text-xl text-gray-600">
                        Administra y visualiza todos los usuarios del sistema
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Lista de Usuarios ({usuarios.length})
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Rol
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {usuarios.map((usuario) => (
                                    <tr
                                        key={usuario.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {usuario.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {usuario.nombre}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {usuario.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    usuario.rol === "Admin"
                                                        ? "bg-red-100 text-red-800"
                                                        : usuario.rol ===
                                                          "Editor"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-green-100 text-green-800"
                                                }`}
                                            >
                                                {usuario.rol}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                Editar
                                            </button>
                                            <button className="text-red-600 hover:text-red-900">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Agregar Nuevo Usuario
                    </button>
                </div>
            </div>
        </div>
    );
}
