import CommentButton from "../Button/CommentButton";
import LikeButton from "../Button/LikeButton";
import ShareButton from "../Button/ShareButton";
import NameTag from "../CardListArticle/NameTag";
import { useState } from "react";
import ChatPage from "../../Page/ChatPage";

function Header(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            
            <div className={`flex flex-col space-y-4 ${props.position != 'center' ? `pr-9` : null}`}>

                <span className="mt-9 font-bold text-[#29384E]"
                    style={props.position == 'center' ? { fontSize: '40px' } : { fontSize: '20px' }}>
                    4+ Cara Mudah Cek IP Hosting Website
                </span>
                <div className={`flex flex-${props.position == 'center' ? `row` : `col`} justify-between `}>


                    <NameTag date={props.position == 'center' ? true : false} time={true} />
                    {props.position == 'center'
                        ?
                        null
                        :
                        <div class="border-t border-[#D9DDE3] my-6 mr-9"> </div>
                    }
                    <div className="flex flex-row space-x-6 ">

                        <LikeButton like='111' />
                        <button type="button" onClick={() => props.show('setIsActive(true)')}>
                            <CommentButton comment='4' />
                        </button>
                        <ShareButton />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Header;
