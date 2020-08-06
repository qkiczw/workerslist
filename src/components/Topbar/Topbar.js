import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Topbar() {
    return(
        <>
            <header className='topBar'>
                <div className='appTitleArea'>
                    <p className='appTitle'>Workers List</p>
                </div>
                <div className='logArea'>
                    <div className="logBtn">
                        <FontAwesomeIcon icon={faUser} size="lg"/>
                    </div>
                </div>
            </header>
        </>

    )
}


export default Topbar;