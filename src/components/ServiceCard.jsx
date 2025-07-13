import React from 'react';
import '../index.css'; 

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="relative w-full sm:w-[280px] h-[200px] group perspective">
            <div className="w-full h-full transform transform-style-preserve-3d will-change-transform transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">


                {/* Front Side */}
                <div
                    className="absolute w-full h-full bg-white/10 backdrop-blur-md rounded-xl border border-purple-500/30 p-6 text-white flex flex-col justify-center items-center backface-hidden shadow-md hover:shadow-purple-500/50 transition-shadow duration-300"
                    style={{ transform: 'rotateY(0deg)' }}
                >
                    <div className="text-4xl mb-2 text-purple-400">{icon}</div>
                    <div className="text-lg font-bold">{title}</div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-purple-900/90 rounded-xl p-6 flex flex-col justify-center items-center text-white backface-hidden shadow-md hover:shadow-purple-500/50 transition-shadow duration-300"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <p className="text-sm text-center">{description}</p>
                </div>


            </div>
        </div>
    );
};

export default ServiceCard;
