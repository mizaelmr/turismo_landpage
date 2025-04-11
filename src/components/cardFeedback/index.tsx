export const CradFeedback = ({ name, title, text }: any) => {
    return (
        <div className="h-[341px] sm:h-[419px] snap-start first:m-0 rounded-2xl bg-[#FEFDF9] pt-5 sm:pt-8 pb-5 sm:pb-6 px-6 sm:px-8 mb-2 relative shadow-custom-card-shadow">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p className="text-xl text-black leading-6 font-normal font-bold text-base-text] mb-1">
                        {title}
                    </p>
                    <div className="flex mb-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3202_50950)">
                                <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                            </g>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3202_50950)">
                                <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                            </g>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3202_50950)">
                                <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                            </g>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3202_50950)">
                                <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                            </g>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3202_50950)">
                                <path d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z" fill="#DAB43B" />
                            </g>
                        </svg>
                    </div>
                    <span className="text-base font-normal leading-6 text-[#454843] line-clamp-7 sm:line-clamp-10">
                        <span>
                            {text}
                        </span>
                    </span>
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-sm font-normal sm:text-base text-[#454843]"> por</span>
                    <span className="text-base text-black font-normal sm:text-lg font-bold text-text-base-text not-italic">{name}</span>
                </div>
            </div>
        </div>
    );
}