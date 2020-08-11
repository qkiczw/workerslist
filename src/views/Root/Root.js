import React from 'react';

// Components
import TopBar from '../../components/Topbar/Topbar';
import WorkersList from '../../components/WorkersList/WorkersList';

// Data
import workersArray from '../../data/workersArray';

function Root() {
    const workersTotalAmount = workersArray.length;
    return (
        <>
           <div className="appContainer">
                <TopBar />
                <p>This is main container</p>
                <div>W bazie znajduję się {workersTotalAmount} pracowników</div>
                <WorkersList workers={workersArray}/>
           </div>
        </>
    )
}


export default Root;