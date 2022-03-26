

function TextInput() {
    return (
        <div className="bg-[#FFFFFF] px-8 py-3 rounded-full border border-solid border-[#C4C4C4] w-full focus:border-[#007AFF]
                         focus:border-2 ">
            <input className="focus:outline-none focus:text-[#29384E] "
                type='text' placeholder="Write your input here" />

        </div>
    );
}

export default TextInput;
