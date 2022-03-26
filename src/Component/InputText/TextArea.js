import ButtonSmall from "../Button/ButtonSmall";


// cursor-not-allowed 
function TextArea(props) {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
                {props.label[0]
                    ?
                    <span className="text-[#29384E] font-semibold text-sm">
                        {props.label[1]}
                    </span>
                    :
                    null
                }

                <textarea class="text-[#29384E] placeholder-[#A9AFB8] resize border border-[#D9DDE3] focus:outline-[#007AFF] focus:text-[#29384E] p-3.5" style={{ borderRadius: '14px' }} placeholder="Apa yang Anda pikirkan?">

                </textarea>
                {props.caption[0]
                    ?
                    <span className="text-[#7F8895] text-xs">{props.caption[1]}</span>
                    :
                    null}
            </div>
            <div className=" flex justify-end">
                <div className="flex w-1/2">
                    <ButtonSmall title="Cancel" type="Text" property="None"/>
                    <ButtonSmall title="Comment" type="Primary" property="None"/>
                </div>
            </div>
        </div>
    );
}

export default TextArea;
