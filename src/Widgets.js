import React from "react";

import "./Widgets.css";

function Widgets() {
  return (
    <div className='Widgets'>
      <iframe
        // src='https://vimeo.com/features/livestreaming?vcid=40991&utm_medium=cpc&utm_source=google&utm_campaign=LIVE_Search_US_EN_Google_Generic_Live-Software_Broad&semtype=search&utm_term=live%20video%20software&utm_adgroup=Live+Software&campaignid=15276880769&adgroupid=129306464629&device=c&gclid=EAIaIQobChMI76326piw9AIVDyCtBh3A_AE1EAAYASAAEgLuAfD_BwE&gclsrc=aw.ds'
        src='https://www.universalstudioshollywood.com/web/en/us/things-to-do/events-and-seasonal-activities/holidays-at-universal-studios-hollywood'
        width='270'
        height='100%'
        frameBorder='0'
        style={{ border: "none", overflow: "hidden" }}
        scrolling='no'
        // allowTransparency='true'
        frameBorder='0'
        allow='encrypted-media'
      ></iframe>

      {/* <iframe
        // src='https://www.universalstudioshollywood.com/web/en/us/things-to-do/events-and-seasonal-activities/holidays-at-universal-studios-hollywood'
        src='https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fchrishemsworth%2Fvideos%2F270875721676472%2F&show_text=false&width=476&t=0'
        width='476'
        height='476'
        style='border:none;overflow:hidden'
        scrolling='no'
        frameborder='0'
        allowfullscreen='true'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        allowFullScreen='true'
        width='270'
        height='100%'
        frameborder='0'
        style={{ border: "none", overflow: "hidden" }}
        scrolling='no'
        allowTransparency='true'
        frameborder='0'
        allow='encrypted-media'
      ></iframe> */}
    </div>
  );
}

export default Widgets;
