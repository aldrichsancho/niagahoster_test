import SearchInput from "../SearchInput";
import ListCategoryBlog from "./ListCategoriBlog";


function CardCategoryBlog() {
    return (
        <div className="space-y-9" style={{position: '-webkit-sticky', position: 'sticky', top: '0'}}>
            <SearchInput placeholder="Cari artikel blog . . ." caption={false}/>
            <div className="flex flex-col p-4">
                <span className="font-bold text-[#29384E] text-xl">Kategori Blog</span>
                <ListCategoryBlog title="Tutorial"/>
                <ListCategoryBlog title="Digital Marketing"/>
                <ListCategoryBlog title="Web Development & Design"/>
                <ListCategoryBlog title="Insight Bisnis "/>
                <ListCategoryBlog title="News & Update"/>
            </div>
        </div>
    );
}

export default CardCategoryBlog;
