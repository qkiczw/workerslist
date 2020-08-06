import React from 'react';


function Topbar() {
    return(
        <>
            <header className='topBar'>
                <div className='appTitleArea'>
                    <p className='appTitle'>Workers List</p>
                </div>
                <div className='logArea'>
                    <div className="logBtn">
                        LOG
                    </div>
                </div>
            </header>
        </>

    )
}


export default Topbar;