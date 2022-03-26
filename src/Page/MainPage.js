
import Article from "../Component/Article";
import CardBanner from "../Component/Banner/CardBanner";
import ListContent from "../Component/CardListArticle/ListContent";
import CardCategoryBlog from "../Component/CategoryBlog/CardCategoryBlog";
import Footer from "../Component/Footer/Footer";
import NavBar from "../Component/NavBar";
import Menu from "../Component/NavBar/Menu/Menu";
import Pagination from "../Component/Pagination";
import SearchInput from "../Component/SearchInput";
import SectionDesktop from "../Component/SectionDesktop";


function MainApp() {
  return (
    <div className="flex flex-col" style={{ backgroundImage: 'linear-gradient(45deg,#026CE8, #0094FF)' }}>
      <div className="h-screen" style={{ backgroundImage: 'url("/image/logo-pattern.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="h-1/4">
          <NavBar position='fixed'/>
          <Menu position='absolute'/>
        </div>

        <div className="flex flex-col items-center justify-center text-[#FFFFFF] h-3/4" >
          <div className="flex flex-col items-center space-y-8" style={{ marginBottom: '72px' }}>
            <div className="flex flex-col items-center font-bold" style={{ fontSize: '56px' }}>
              <span>Dapatkan Artikel</span>
              <span>Tutorial Hosting</span>
              <span>Terbaik Disini</span>
            </div>
            <span className="">Temukan artikel berisi solusi terbaik untuk segala permasalahan Anda</span>
          </div>

          <SearchInput caption={false} placeholder="Cari topic artikel yang ingin Anda cari . . ." size="55" />

        </div>
      </div>

      <div className="bg-white flex flex-row space-x-8 pt-20 pb-44" style={{ paddingLeft: '165px', paddingRight: '165px' }}>
        <div className="w-3/4 flex flex-col space-y-20">
          <div className="flex flex-col space-y-16">
            <Article name="Terbaru" />
            <Article name="Populer" />
          </div>

          <CardBanner width='full'/>
          {/* banner */}
          <div className="flex flex-col">
            <span className="font-bold" style={{ fontSize: '32px' }}>Semua Artikel</span>
            {/* <div className="flex flex-row space-y-12 ">
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
            </div> */}
            <div className="grid grid-cols-3 mt-9 mb-14 gap-x-7 gap-y-14">
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
              <ListContent property="allArticles" />
            </div>

            <Pagination />
          </div>
        </div>

        {/* kanan */}
        <CardCategoryBlog />
      </div>
      <SectionDesktop/>
      <Footer/>
    </div >
  );
}

export default MainApp;
