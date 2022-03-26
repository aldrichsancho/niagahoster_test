import ButtonBigPrimary from "../Button/ButtonBigPrimary";


function CardBanner(props) {
    return (
        <div className="flex justify-between flex-row  p-9 rounded-3xl items-center" style={{ backgroundImage: 'linear-gradient(45deg,#026CE8, #0094FF)' }}>
            <div className="flex flex-col space-y-6">
                <span className="font-bold text-[#FFFFFF] text-2xl">
                    Ingin jadi yang pertama tau artikel terbaru kami?
                </span>
                <span className="text-[#E0EFFF]">
                    Kami akan mengirimkan pemberitahuan artikel terbaru kami melalui email Anda. Ingin mendapatkan pemberitahuan?
                </span>
            </div>
            <div className={`w-${props.width}`}>
            <ButtonBigPrimary property="None" title="Langganan Sekarang" type="Primary"/>

            </div>
        </div>
    );
}

export default CardBanner;
