import React, {useState} from 'react';

import firebase from '../../data/firebase';

// Components
import TopBar from '../../components/Topbar/Topbar';
import WorkersList from '../../components/WorkersList/WorkersList';

// Data
import workersArray from '../../data/workersArray';
import dataBase from '../../data/database';

// firebase.firestore().collection('users').add({
//     name: 'Łukasz',
//     lastName: 'Sztormowski',
//     position: 'Boss',
//     workers: [{
//         id: 1,
//         name: 'Wojciech',
//         lastName: 'Kowalski',
//         position: 'Kierownik',
//     },
//     {
//         id: 2,
//         name: 'Rafał',
//         lastName: 'Nizielski',
//         position: 'Pracownik',
//     },
//     {
//         id: 3,
//         name: 'Łukasz',
//         lastName: 'Tomalski',
//         position: 'Pracownik',
//     },
//     {
//         id: 4,
//         name: 'Daniel',
//         lastName: 'Zagralski',
//         position: 'Pracownik',
//     },
//     {
//         id: 5,
//         name: 'Janusz',
//         lastName: 'Lipski',
//         position: 'Pracownik',
//     },
//     {
//         id: 6,
//         name: 'Bartosz',
//         lastName: 'Smużewski',
//         position: 'Pracownik',
//     },
//     {
//         id: 7,
//         name: 'Teodor',
//         lastName: 'Villan',
//         position: 'Pracownik',
//     },
//     {
//         id: 8,
//         name: 'Maciej',
//         lastName: 'Wilk',
//         position: 'Pracownik',
//     },
//     {
//         id: 9,
//         name: 'Roman',
//         lastName: 'Basar',
//         position: 'Pracownik',
//     },
//     {
//         id: 10,
//         name: 'Grand',
//         lastName: 'Torino',
//         position: 'Pracownik',
//     },]
// })

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