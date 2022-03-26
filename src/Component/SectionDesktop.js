import ButtonBigPrimary from "./Button/ButtonBigPrimary";
import ActionButton from "./NavBar/ActionButton";
import ListMenu from "./NavBar/ListMenu";


function SectionDesktop() {
  return (
    <div style={{ backgroundImage: 'linear-gradient(45deg,#026CE8, #0094FF)' }}>
      <div className="" style={{ backgroundImage: 'url("/image/logo-pattern.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="flex flex-row justify-center" style={{ paddingTop: '92px', paddingBottom: '92px' }}>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center space-y-7">
              <span className="font-bold text-[#FFFFFF]" style={{ fontSize: '40px' }}>Awali Kesuksesan Anda Bersama Niagahoster</span>
              <span className="text-[#FFFFFF]">Kini tidak lagi sulit mewujudkan website impian. Performa hebat, keamanan ekstra, dan layanan dukungan teknis yang bisa diandalkan - semua dengan harga terjangkau!</span>
            </div>
            <a href="https://www.niagahoster.co.id/" target="_blank">
              <div style={{ marginTop: '42px' }}>
                <ButtonBigPrimary title="Mulai Sekarang" property="None" type="Primary" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SectionDesktop;
