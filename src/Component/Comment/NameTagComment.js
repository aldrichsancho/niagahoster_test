
function NameTagComment(props) {
    return (
        <div className="flex flex-row items-center space-x-3">
            <img src="image\profile.png" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-3">
                    <span className="text-[#29384E] font-semibold">Adam Muiz</span>
                    {props.author
                        ?
                        <>
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="2" r="2" fill="#29384E" />
                            </svg>
                            <span className="text-[#007AFF] text-xs">Author</span>
                        </>
                        :
                        null
                    }

                </div>
                {props.intervalDate
                    ?
                    <span className="text-[#7F8895] text-xs">29 hari yang lalu</span>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default NameTagComment;
