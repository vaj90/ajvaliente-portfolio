import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
interface ExperienceCardProps {
    role: string;
    company: string;
    location: string;
    details: string[];
    tech: string[];
    image: string;
    date: string;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
    role, 
    company, 
    location, 
    details, 
    tech,
    image,
    date
}) => {
    return (
        <div className="relative md:border-l border-gray-300 sm:border-0 md:pl-4 sm:pl-0 md:ml-2 sm:ml-0 pb-5">
            <div className="bg-white border border-gray-100 rounded-lg p-5 pt-3 shadow-xl transition-all duration-300 hover:border-gray-300">
                <div className="mx-auto pb-2 flex flex-col md:flex-row items-center justify-between space-y-3 sm:space-y-0 md:space-x-3 gap-5">
                    <div className="flex justify-center md:justify-start bg-white/20 rounded-lg">
                        <div className="relative w-full max-w-lg rounded-lg">
                            <Image
                                src={image}
                                alt={company + " logo"}
                                width={120} 
                                height={120}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="w-full text-center mt-4 sm:mt-0 md:text-left space-y-2">
                        <h3 className="text-lg font-rubik m-0 font-semibold text-gray-800">{role}</h3>
                        <p className="text-sm text- font-nunito text-gray-400 mb-4 sm:mb-0">
                            {company} <span className="text-gray-800">| {location}</span>
                        </p>
                    </div>
                    <div className="sm:col-span-1 text-left sm:text-right mb-2 sm:mb-0 w-auto md:w-120">
                        <p className="sticky top-20 text-md font-semibold text-gray-500">
                            {date}
                        </p>
                    </div>
                </div>
                {/* Details */}
                <ul className="space-y-3">
                    {details.map((detail, index) => (
                    <li key={index} className="flex items-start text-base text-gray-400">
                        <ChevronRight 
                        style={{ fontSize: 20 }} 
                        className="text-gray-800 flex-shrink-0 mt-0.5"/>
                        <span className='ml-2 text-md'>{detail}</span>
                    </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-700 text-gray-200">{t}</span>
                    ))}
                </div>
            </div>
        </div> 
    );
}
export default ExperienceCard;