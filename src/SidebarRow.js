import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.css";

function SidebarRow({ title, src, Icon }) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      {/* Alternative Code: */}
      {/* {src ? <Avatar src={src} /> : <Icon />} */}
      {/* {Icon ? <Icon /> : <Avatar src={src} />} */}
      <h4> {title} </h4>
    </div>
  );
}

export default SidebarRow;
