import ListMenu_2 from "./ListMenu_2";


function Menu(props) {
    return (
      <div className={props.position == 'absolute' ? "absolute flex w-full space-x-10 text-[#FFFFFF] bg-[#0057B2] justify-center py-3.5 z-0"
    : "flex w-full space-x-10 text-[#FFFFFF] bg-[#0057B2] justify-center py-3.5 "} style={props.position == 'absolute'? {marginTop: '90px'} : null} >
         <div className="flex justify-between space-x-10 font-semibold">
             <ListMenu_2/>
         </div>
      </div>
    );
  }
  
  export default Menu;
  