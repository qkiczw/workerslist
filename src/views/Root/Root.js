import React from 'react';

// Components
import TopBar from '../../components/Topbar/Topbar';
import WorkersList from '../../components/WorkersList/WorkersList';

// Data
import data from '../../data/data';

function Root() {
    const workersTotalAmount = data.length;
    return (
        <>
           <div className="appContainer">
                <TopBar />
                <p>This is main container</p>
                <div>W bazie znajduję się {workersTotalAmount} pracowników</div>
                <WorkersList />
           </div>
        </>
    )
}


export default Root;