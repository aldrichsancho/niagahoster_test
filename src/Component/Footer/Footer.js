import BottomPart from "./BottomPart";
import NewsLetter from "./Newsletter";
import SocialMedia from "./SocialMedia";

function Footer() {
    return (
        <div className="flex flex-col items-center bg-[#22273C] pt-24" style={{ paddingBottom: '42px', paddingRight: '165px', paddingLeft: '165px'}}>
            <div className="flex flex-row" style={{marginBottom: '62px'}}>
                <div className="flex flex-col space-y-8 w-1/4">
                    <div className="flex flex-col space-y-4">
                        <div className="text-white">Web Hosting</div>
                        <ul className="text-[#A9AFB8] text-sm space-y-2">
                            <li><a href="#">Hosting Indonesia</a></li>
                            <li><a href="#">Cloud Hosting</a></li>
                            <li><a href="#">Email Hosting</a></li>
                            <li><a href="#">Web Hosting Unlimited</a></li>
                            <li><a href="#">Hosting Terbaik</a></li>
                            <li><a href="#">Hosting Murah</a></li>
                            <li><a href="#">Hosting Singapore SG</a></li>
                            <li><a href="#">Keamanan SSL/HTTPS</a></li>
                            <li><a href="#">Data Center Hosting Terbaik</a></li>
                            <li><a href="#">Hosting Gratis</a></li>
                            <li><a href="#">Transfer Hosting</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="text-white">Domain</div>
                        <ul className="text-[#A9AFB8] text-sm space-y-2">
                            <li><a href="#">Domain</a></li>
                            <li><a href="#">Domain .ID</a></li>
                            <li><a href="#">Domain Gratis</a></li>
                            <li><a href="#">Promosi Domain .COM</a></li>
                            <li><a href="#">WHOIS</a></li>
                            <li><a href="#">Transfer Domain</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col space-y-8  w-1/4">
                    <div className="flex flex-col space-y-4">
                        <div className="text-white">Virtual Private Server</div>
                        <ul className="text-[#A9AFB8] text-sm space-y-2">
                            <li><a href="#">VPS KVM Indonesia</a></li>
                            <li><a href="#">Cloud VPS Hosting</a></li>
                            <li><a href="#">CyberPanel VPS Hosting</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="text-white">WordPress Hosting</div>
                        <ul className="text-[#A9AFB8] text-sm space-y-2">
                            <li><a href="#">WordPress Hosting</a></li>
                            <li><a href="#">Managed WordPress</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="text-white">Website</div>
                        <ul className="text-[#A9AFB8] text-sm space-y-2">
                            <li><a href="#">Website Instan</a></li>
                            <li><a href="#">Jasa Pembuatan Website</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="text-white">Bantuan</div>
                        <ul className="text-[#A9AFB8] text-sm space-y-2">
                            <li><a href="#">Cara Pembayaran</a></li>
                            <li><a href="#">Ebook Gratis</a></li>
                            <li><a href="#">Knowledge Base</a></li>
                            <li><a href="#">Niagahoster Blog</a></li>
                            <li><a href="#">Niagahoster Course</a></li>
                            <li><a href="#">Niagahoster Forum</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-1/2">
                    <div className="flex flex-row space-x-24 mb-8">
                        <div className="flex flex-col w-1/2 space-y-8">
                            <div className="flex flex-col space-y-4">
                                <div className="text-white">Kemitraan</div>
                                <ul className="text-[#A9AFB8] text-sm space-y-2">
                                    <li><a href="#">Niagahoster Poin</a></li>
                                    <li><a href="#">Niagahoster Partner</a></li>
                                    <li><a href="#">Program Afiliasi Niagahoster</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="text-white">Tentang Niagahoster</div>
                                <ul className="text-[#A9AFB8] text-sm space-y-2">
                                    <li><a href="#">Kontak</a></li>
                                    <li><a href="#">Karir</a></li>
                                    <li><a href="#">Event</a></li>
                                    <li><a href="#">Status Layanan</a></li>
                                    <li><a href="#">Review Pelanggan</a></li>
                                    <li><a href="#">Penawaran & Promo Spesial</a></li>
                                    <li><a href="#">Niagahoster Virtual Summit</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-col space-y-4">
                                <img src="\image\logoHorizontal.png" width='254.61px' height='24.29' />
                                <div className="flex flex-col text-[#FFFFFF] text-sm space-y-4">
                                    <p>
                                        Misi kami adalah membantu jutaan orang memanfaatkan potensi yang ada di internet untuk membangun kesuksesan online.
                                    </p>
                                    <p>
                                        Jl. Palagan Tentara Pelajar No 81 Jongkang, Sariharjo, Ngaglik, Sleman
                                        Daerah Istimewa Yogyakarta 55581
                                    </p>
                                    <div>
                                        <p>Telepon: 0274-2885822</p>
                                        <p>WhatsApp: 085943258274</p>
                                        <p>Telegram: @niagahost_bot</p>
                                    </div>
                                </div>
                                <SocialMedia/>
                            </div>
                        </div>
                    </div>
                    <NewsLetter/>
                </div>
            </div>
            <BottomPart/>
        </div>
    );
}

export default Footer;
