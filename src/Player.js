import React from 'react';
import "./Player.css"
import Body from './Body';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
function Player({ spotify }) {
    return (
        <div>
           
           <div className="player">
               <div className="player__body">
                   <Sidebar />
                    {/*SideBar*/}
                    {/*Body*/}
                    <Body />
               </div>
           </div>
           <Footer />
           {/* Footer */}
        </div>
    );
}

export default Player;