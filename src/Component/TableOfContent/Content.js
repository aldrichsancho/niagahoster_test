
function Content(props) {
    return (
        <div className="flex flex-col">
            <span className="py-3 text-[#007AFF] font-bold">Cara Cek IP Hosting</span>
            <div className="flex flex-col pl-4 space-y-3 text-xs text-[#29384E]">
                <span className="text-[#007AFF] font-bold"><a href="#">Melihat IP Hosting pada email informasi akun hosting</a></span>
                <span><a href="#">Melihat IP Hosting melalui Member Area Niagahoster</a></span>
                <span><a href="#">Melihat IP Hosting melalui cPanel</a></span>
                <span><a href="#">Melihat IP menggunakan CMD</a></span>
                <span><a href="#">Melihat IP dengan web-based tools</a></span>
            </div>
            <span className="py-3 text-[#29384E] font-semibold">Kesimpulan</span>
        </div>
    );
}

export default Content;
