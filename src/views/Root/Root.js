import React, {useState} from 'react';

// Components
import TopBar from '../../components/Topbar/Topbar';
import WorkersList from '../../components/WorkersList/WorkersList';

// Data
import workersArray from '../../data/workersArray';
import dataBase from '../../data/dataBase';

function Root() {
    
    const workersTotalAmount = workersArray.length;

    return (
        <>
           <div className="appContainer">
                <TopBar />
                <p>This is main container</p>
                <div>W bazie znajduję się {workersTotalAmount} pracowników</div>
                <WorkersList workers={dataBase.workers}/>
           </div>
        </>
    )
}


export default Root;