
function BottomPart() {
    return (
        <div className="flex flex-row justify-between items-center w-full pt-8 border-t border-[#546071]">
            <div className="w-8/12">
                <span className="text-[#FFFFFF] text-xs">
                    Copyright ©2021 Niagahoster | Hosting powered by PHP8, CloudLinux, CloudFlare, BitNinja and DC DCI-Indonesia | Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology
                </span>
            </div>
            <div className="flex flex-row space-x-2 text-[#FFFFFF] text-xs items-center">
                <span>Syarat dan Ketentuan</span>

                <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.72" d="M0.928219 11.16V0.539999H1.90022V11.16H0.928219Z" fill="white" />
                </svg>

                <span>Kebijakan Privasi</span>
            </div>
        </div>
    );
}

export default BottomPart;
