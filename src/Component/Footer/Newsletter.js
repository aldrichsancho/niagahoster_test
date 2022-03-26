import ButtonBigPrimary from "../Button/ButtonBigPrimary";
import ButtonMedium from "../Button/ButtonMedium";
import TextInput from "../InputText/TextInput";


function NewsLetter() {
    return (
        <div className="flex flex-col space-y-4">
            <span className="font-bold text-[#FFFFFF]">Newsletter</span>
            <div className="flex flex-row space-x-3">
                <TextInput />
                <div>
                    <ButtonMedium title="Berlangganan" />
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
