import NameTagComment from "./NameTagComment";

function RepliedComment(props) {
    return (
        <div className=" pt-6  " style={{ paddingRight: '30px'}}>
            <div className="flex flex-col border-l-2 border-[#007AFF] space-y-3 pl-3">
                <NameTagComment author={true} intervalDate={true} />
                <span className="text-sm text-[#29384E]">Makasi kak udah bagi informasi</span>
            </div>
        </div>
    );
}

export default RepliedComment;