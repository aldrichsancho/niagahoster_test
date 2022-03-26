
function Tag(props) {
    return (
        <div className="flex flex-row items-center text-xs space-x-3">
            <div className="bg-[#E0EFFF] text-[#007AFF] rounded-full py-0.5 px-6">
                Hosting
            </div>
            {props.date
                ?
                <div className="flex flex-row items-center space-x-3">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#29384E" />
                    </svg>
                    <span className="text-[#29384E]">28 Desember 2021</span>
                </div>
                :
                null
            }{

            }
            {props.time
                ?
                <div className="flex flex-row items-center space-x-3">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#29384E" />
                    </svg>
                    <span className="text-[#29384E]">5 min read</span>
                </div>
                :
                null
            }


        </div>
    );
}

export default Tag;
