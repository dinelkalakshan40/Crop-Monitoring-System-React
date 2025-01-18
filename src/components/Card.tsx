import React from 'react'

interface CardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
}
function Card({ icon, title, value }: CardProps) {
    return (
        <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 focus:scale-105 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600 transform transition-all duration-300 ease-in-out flex items-center space-x-4 cursor-pointer">
            <div className="text-4xl text-blue-500">{icon}</div>
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
}

export default Card;