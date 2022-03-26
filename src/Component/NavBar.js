import ActionButton from "./NavBar/ActionButton";
import ListMenu from "./NavBar/ListMenu";


function NavBar(props) {
    return (
        <div className={props.position == 'fixed'
            ?
            "fixed flex justify-between w-full items-center px-10 font-semibold bg-[#007AFF] z-10"
            :
            "flex justify-between w-full items-center px-10 font-semibold bg-[#007AFF]"
        } style={{ paddingTop: '22px', paddingBottom: '22px' }}>
            <div>
                <img src="\image\logo.png" />
            </div>
            <ListMenu />
            <ActionButton />
        </div>
    );
}

export default NavBar;
