import { Link } from "react-router-dom"

function CommentButton(props) {
    return (
        // <Link to="/chatPage">
            <div className="flex flex-row space-x-3 items-center" >
                <svg className='hover:opacity-50' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4V17.17L18.83 16H4V4H20ZM20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2ZM18 12H6V14H18V12ZM18 9H6V11H18V9ZM18 6H6V8H18V6Z" fill="#546071" />
                </svg>

                {props.comment > 0 ?
                    <span className="text-xs text-[#546071]">{props.comment}</span>
                    :
                    null
                }
            </div>
        // </Link>
    );
}

export default CommentButton;
