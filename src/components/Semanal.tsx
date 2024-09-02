import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { semanal } from '../data';

const Semanal: React.FC = () => {
    const days = Object.entries(semanal);
    const half = Math.ceil(days.length / 2);
    const leftDays = days.slice(0, half);
    const rightDays = days.slice(half);

    return (
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto p-8">
                {/* Seção de título e endereço */}
                <div className="flex flex-col items-center mb-12">
                    <FaMapMarkerAlt className="text-indigo-600 text-4xl mb-4" />
                    <h4 className="text-3xl font-bold text-gray-900 mb-2">Campus Jaraguá</h4>
                    <p className="text-gray-700 text-lg">Rua Guiomar Novaes, 189 - Jaraguá</p>
                </div>
                {/* Seção de dias com divisão vertical */}
                <div className="flex flex-col md:flex-row">
                    {/* Coluna da esquerda */}
                    <div className="flex-1 flex flex-col items-end pr-6 mb-6 md:mb-0">
                        {leftDays.map(([day, schedule], index) => (
                            <div key={index} className="mb-6 w-full max-w-sm p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                                <p className="text-2xl font-bold text-indigo-400">{day}</p>
                                <p className="text-gray-700 mt-2">{schedule}</p>
                            </div>
                        ))}
                    </div>
                    {/* Barra vertical divisória */}
                    <div className="border-l-2 border-gray-300 h-auto mx-6"></div>
                    {/* Coluna da direita */}
                    <div className="flex-1 flex flex-col items-start pl-6 mb-6 md:mb-0">
                        {rightDays.map(([day, schedule], index) => (
                            <div key={index} className="mb-6 w-full max-w-sm p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                                <p className="text-2xl font-bold text-indigo-400">{day}</p>
                                <p className="text-gray-700 mt-2">{schedule}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Semanal;
