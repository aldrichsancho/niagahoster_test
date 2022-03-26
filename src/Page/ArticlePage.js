import CardBanner from "../Component/Banner/CardBanner";
import Breadcrumbs from "../Component/Breadcrumbs";
import ButtonBigPrimary from "../Component/Button/ButtonBigPrimary";
import CommentButton from "../Component/Button/CommentButton";
import LikeButton from "../Component/Button/LikeButton";
import ShareButton from "../Component/Button/ShareButton";
import ListContent from "../Component/CardListArticle/ListContent";
import NameTag from "../Component/CardListArticle/NameTag";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import NavBar from "../Component/NavBar";
import Menu from "../Component/NavBar/Menu/Menu";
import SectionDesktop from "../Component/SectionDesktop";
import TableOfContent from "../Component/TableOfContent/TableOfContent";
import { useState } from "react";
import Comment from "../Component/Comment/Comment"
import TextArea from "../Component/InputText/TextArea"
import { Link } from "react-router-dom"
import ChatPage from "./ChatPage";

function ArticlePage() {
    const [isOpen, setIsOpen] = useState(false);
    const showDiv = () => {
        // const myID = document.getElementById('headerLeftPosition');
        // var y = window.scrollY;
        // if (y >= 100) {
        //     console.log("abc");
        //     return setIsActive(true);
        // } else {
        //     console.log("cde");
        //     return setIsActive(false);
        // }
    }
    return (
        <>
            <div className="flex flex-col h-screen overflow-y-auto">

                <NavBar position='notFixed' />
                <Menu position='notAbsolute' />
                <div className="flex flex-col justify-center items-center w-full " style={{ marginTop: '54px' }}>
                    <div className="flex- flex-col w-3/4">
                        <div className="flex flex-row">

                            <div className=" w-1/4">
                                <div id="headerLeftPosition">
                                    {/* {isActive && (
                                    <> */}
                                    <Breadcrumbs position='left' />
                                    <Header position='left' />
                                    {/* </>
                                )} */}

                                </div>
                            </div>
                            <div className="flex flex-col w-1/2 mb-20">
                                <div className="flex justify-start ">
                                    <Breadcrumbs position='center' />
                                </div>
                                {/* <button type="button" onClick={() => setIsOpen(!isOpen)}> */}
                                    <Header position='center' show={isOpen => setIsOpen(isOpen)}/>
                                {/* </button> */}
                                <div className="rounded-xl my-9" style={{ width: '635px' }}>
                                    <img src='\image\articleImage.png' className="object-cover rounded-xl" alt='image' style={{ width: '635px' }} />
                                </div>
                                <div>
                                    <p>Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat!</p> <br />
                                    <p>IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting website. Dengan IP tersebut, website Anda dapat dikenali dan diakses melalui jaringan internet.</p><br />
                                    <p>Saat Anda mengakses website, Anda memang tidak bisa melihat IP secara langsung. Alasannya, IP tersebut sudah diwakili oleh sebuah domain agar lebih mudah diingat. </p><br />
                                    <p>Kalau begitu, bagaimana cara mengetahui hosting IP suatu website? Yuk, simak panduan lengkap cara cek IP web hosting di bawah ini!</p>
                                </div>

                                <TableOfContent />

                                <div className="flex flex-col space-y-9 text-[#29384E] mt-9">
                                    {/* isi article */}
                                    <span className="font-bold" style={{ fontSize: '28px' }}>Cara Cek IP Hosting</span>
                                    <span style={{ fontSize: '18px' }}>
                                        Anda dapat melakukan cek IP hosting dengan berbagai cara, diantaranya adalah:
                                        <ul className="font-bold list-disc list-inside">
                                            <li>Melihat IP Hosting pada Email Informasi Akun Hosting</li>
                                            <li>Melihat IP Hosting Melalui Member Area Niagahoster</li>
                                            <li>Melihat IP Hosting Melalui cPanel</li>
                                            <li>Mengecek IP Menggunakan CMD</li>
                                            <li>Mengecek IP dengan Web-based Tools</li>
                                        </ul>
                                        Nah, berikut ini penjelasan lengkapnya:
                                    </span>
                                    <span className="font-bold" style={{ fontSize: '28px' }}>1. Melihat IP Hosting pada Email Informasi Akun Hosting</span>
                                    <span style={{ fontSize: '18px' }}>
                                        Ketika Anda membeli layanan hosting, pihak penyedia hosting akan mengirimkan email berupa
                                        informasi detail akun hosting Anda. Pada email ini, Anda bisa cek IP di bagian Informasi
                                        Akun seperti ini:
                                    </span>
                                    <span className="font-bold" style={{ fontSize: '28px' }}>Kesimpulan</span>
                                    <div>
                                        <p>Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat!</p> <br />
                                        <p>IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting website. Dengan IP tersebut, website Anda dapat dikenali dan diakses melalui jaringan internet.</p><br />
                                        <p>Saat Anda mengakses website, Anda memang tidak bisa melihat IP secara langsung. Alasannya, IP tersebut sudah diwakili oleh sebuah domain agar lebih mudah diingat. </p><br />
                                        <p>Kalau begitu, bagaimana cara mengetahui hosting IP suatu website? Yuk, simak panduan lengkap cara cek IP web hosting di bawah ini!</p>
                                    </div>
                                    <ButtonBigPrimary property="None" title="Berlangganan Hosting Niagahoster Sekarang Juga!" type="Secondary" />


                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-row space-x-9">
                                            <LikeButton like='111' />
                                            <CommentButton comment='4' />
                                        </div>
                                        <ShareButton />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <CardBanner width='1/2' />
                        <div className="mt-20 py-20 flex flex-col items-center">
                            <span className="font-bold" style={{ fontSize: '32px' }}>
                                Baca Artikel Terkait
                            </span>
                            <div className="grid grid-cols-4 mt-9 gap-x-7 gap-y-14">
                                <ListContent />
                                <ListContent />
                                <ListContent />
                                <ListContent />
                                <ListContent />
                                <ListContent />
                            </div>
                        </div>
                    </div>
                </div>
                <SectionDesktop />
                <Footer />
                {isOpen && (
                    <ChatPage hide={isOpen => setIsOpen(isOpen)}/>
                )}
            </div>
        </>
    );
}

export default ArticlePage;
