
function LikeButton(props) {
    return (
        <div className="flex flex-row space-x-3 items-center">
            <svg className="hover:opacity-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM9 9L13.34 4.66L12 10H21V12L18 19H9V9ZM1 9H5V21H1V9Z" fill="#546071" />
            </svg>
            {props.like > 0 ?
                <span className="text-xs text-[#546071]">{props.like}</span>
                :
                null
            }

        </div>
    );
}

export default LikeButton;
