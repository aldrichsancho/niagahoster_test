import ButtonSmall from "../Button/ButtonSmall";
import LikeButton from "../Button/LikeButton";
import ReplyButton from "../Button/ReplyButton";
import NameTagComment from "./NameTagComment";
import RepliedComment from "./RepliedComment";
import { useState } from "react";

function Comment(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="flex flex-col pt-6 space-y-3" style={{ paddingRight: '30px', paddingLeft: '30px' }}>
            <NameTagComment author={false} intervalDate={true} />
            <span className="text-sm text-[#29384E]">Makasi kak udah bagi informasi</span>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row  space-x-2">
                    <LikeButton like="0" />
                    <button type="button" onClick={() => setIsOpen(true)}>
                        <ReplyButton reply={props.reply} />
                    </button>
                </div>
                {isOpen && (
                    <button type="button" onClick={() => setIsOpen(false)} className="w-1/2">
                        <ButtonSmall title="Sembunyikan Balasan" type="Text" />
                    </button>
                )}
            </div>
            {isOpen && (
                <RepliedComment />
            )}
        </div>
    );
}

export default Comment;
