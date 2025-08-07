interface CardFeedbackProps {
    name: string;
    title: string;
    text: string;
}

export const CradFeedback = ({ name, title, text }: CardFeedbackProps) => {
    return (
        <div className="h-full bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {title}
                    </h3>
                    
                    {/* Stars */}
                    <div className="flex mb-4">
                        {[...Array(5)].map((_, index) => (
                            <svg 
                                key={index}
                                width="16" 
                                height="16" 
                                viewBox="0 0 20 20" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_3202_50950)">
                                    <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#FCD34D" />
                                </g>
                            </svg>
                        ))}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-6">
                        {text}
                    </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                        — <span className="font-medium text-gray-900">{name}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}