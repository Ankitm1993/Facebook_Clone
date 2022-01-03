import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import CloudIcon from "@material-ui/icons/Cloud";
// import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
      <SidebarRow
        // src='https://scontent.fsac1-1.fna.fbcdn.net/v/t1.6435-9/40654345_2026641317387339_7459171394903867392_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=qHNKByje3N8AX-TYm2Z&_nc_ht=scontent.fsac1-1.fna&oh=f2f305d02e05b0908533762714333e3a&oe=61A334BA'

        // title='Er Andy Marwaha'

        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='Covid 19-Information Center'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messsenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={CloudIcon} title='Weather' />
      {/* <SidebarRow Icon={ExpandMoreOutlinedIcon} title='More' /> */}
    </div>
  );
}

export default Sidebar;
