

function ReplyButton(props) {
    return (
        <div className="flex flex-row space-x-1 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9999 9.49994H7.4099L8.7099 8.20994C8.8982 8.02164 9.00399 7.76624 9.00399 7.49994C9.00399 7.23364 8.8982 6.97825 8.7099 6.78994C8.52159 6.60164 8.2662 6.49585 7.9999 6.49585C7.73359 6.49585 7.4782 6.60164 7.2899 6.78994L4.2899 9.78994C4.19886 9.88505 4.12749 9.99719 4.0799 10.1199C3.97988 10.3634 3.97988 10.6365 4.0799 10.8799C4.12749 11.0027 4.19886 11.1148 4.2899 11.2099L7.2899 14.2099C7.38286 14.3037 7.49346 14.3781 7.61532 14.4288C7.73718 14.4796 7.86788 14.5057 7.9999 14.5057C8.13191 14.5057 8.26261 14.4796 8.38447 14.4288C8.50633 14.3781 8.61693 14.3037 8.7099 14.2099C8.80362 14.117 8.87802 14.0064 8.92879 13.8845C8.97956 13.7627 9.00569 13.632 9.00569 13.4999C9.00569 13.3679 8.97956 13.2372 8.92879 13.1154C8.87802 12.9935 8.80362 12.8829 8.7099 12.7899L7.4099 11.4999H16.9999C17.2651 11.4999 17.5195 11.6053 17.707 11.7928C17.8945 11.9804 17.9999 12.2347 17.9999 12.4999V16.4999C17.9999 16.7652 18.1053 17.0195 18.2928 17.207C18.4803 17.3946 18.7347 17.4999 18.9999 17.4999C19.2651 17.4999 19.5195 17.3946 19.707 17.207C19.8945 17.0195 19.9999 16.7652 19.9999 16.4999V12.4999C19.9999 11.7043 19.6838 10.9412 19.1212 10.3786C18.5586 9.81601 17.7955 9.49994 16.9999 9.49994V9.49994Z" fill="#546071" />
            </svg>
            {props.reply > 0 ?
                <span className="text-xs text-[#546071] font-semibold">{props.reply}</span>
                :
                null
            }

        </div>
    );
}

export default ReplyButton;
