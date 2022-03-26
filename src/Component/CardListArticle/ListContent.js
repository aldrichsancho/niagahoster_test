import NameTag from "./NameTag";
import Tag from "./Tag";
import { Link } from "react-router-dom"

function ListContent(props) {
    return (
        <Link to="/articlePage">
            <div className={props.property == "choosenArticle" ? "flex flex-row items-center" : "flex flex-col-reverse "}>
                <div className="flex flex-col space-y-4">
                    <NameTag date={false} time={false} />
                    <div className="flex flex-col space-y-2">
                        <span className="text-[#29384E] font-bold">
                            4+ Cara Mudah Cek IP Hosting Website
                        </span>
                        <div className="text-xs text-[#546071]">
                            Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat!
                            IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting ...
                        </div>
                    </div>
                    <Tag date={props.property == "choosenArticle" ? true : false} time={true} />
                </div>
                <img src="\image\image.png" height="164px" width="255px" style={ props.property == "choosenArticle"? {marginLeft: '60px'} : null} />
            </div>

        </Link>


    );
}

export default ListContent;
