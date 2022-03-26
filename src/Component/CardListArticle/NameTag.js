

function NameTag(props) {
    return (
        <div className="flex flex-row items-center text-xs space-x-3">
            <img src="image\profile.png" className="h-6 w-6 rounded-full object-cover" />
            <span className="text-[#29384E]">
                Nida Regita F
            </span>
            {props.date
                ?
                <div className="flex flex-row items-center space-x-3">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#29384E" />
                    </svg>
                    <span className="text-[#546071]">
                        28 Dec 2021
                    </span>
                </div>
                :
                null
            }

            {props.time
                ?
                <div className="flex flex-row items-center space-x-3">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#29384E" />
                    </svg>
                    <span className="text-[#546071]">
                        5 min read
                    </span>
                </div>
                :
                null
            }

        </div>
    );
}

export default NameTag;
