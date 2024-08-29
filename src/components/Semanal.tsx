import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { semanal } from '../data';

const Semanal: React.FC = () => {
    const days = Object.entries(semanal);
    const half = Math.ceil(days.length / 2);
    const leftDays = days.slice(0, half);
    const rightDays = days.slice(half);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
                HORÁRIOS
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 w-full max-w-3xl">
                {/* Seção de título e endereço */}
                <div className="flex flex-col items-center mb-8">
                    <FaMapMarkerAlt className="text-gray-600 text-3xl mb-3" />
                    <h4 className="text-3xl font-semibold text-gray-800 text-center mb-2">
                        HOLY FIRE
                    </h4>
                    <p className="text-gray-600 text-center text-lg">R. Guiomar Novaes, 189 - Jaraguá</p>
                </div>
                {/* Seção de dias com divisão vertical */}
                <div className="flex flex-col md:flex-row">
                    {/* Coluna da esquerda */}
                    <div className="flex-1 flex flex-col items-end pr-4 mb-4 md:mb-0">
                        {leftDays.map(([day, schedule], index) => (
                            <div key={index} className="mb-4 text-right">
                                <p className="text-xl font-semibold text-gray-800">{day}</p>
                                <p className="text-gray-600 mt-1">{schedule}</p>
                            </div>
                        ))}
                    </div>
                    {/* Barra vertical divisória */}
                    <div className="border-l-2 border-gray-400 h-auto mx-4 md:mx-6"></div>
                    {/* Coluna da direita */}
                    <div className="flex-1 flex flex-col items-start pl-4 mb-4 md:mb-0">
                        {rightDays.map(([day, schedule], index) => (
                            <div key={index} className="mb-4 text-left">
                                <p className="text-xl font-semibold text-gray-800">{day}</p>
                                <p className="text-gray-600 mt-1">{schedule}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Semanal;
