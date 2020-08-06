import React from 'react';

// components
import TopBar from '../../components/Topbar/Topbar';

function Root() {
    return (
        <>
           <div className="appContainer">
                <TopBar />
                <p>This is main container</p>
           </div>
        </>
    )
}


export default Root;