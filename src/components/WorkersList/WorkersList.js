import React from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus, faEdit, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

function WorkersList( props ) {
    const [...workers] = props.workers; 
    return (
        <>
            <h2>Tutaj będzie lista pracowników</h2>
            <table className={'workersListTable'}>
                <thead>
                    <tr>
                        <th>Imię <span><FontAwesomeIcon icon={faSortAlphaUp} /></span></th>
                        <th>Nazwisko <span><FontAwesomeIcon icon={faSortAlphaUp} /></span></th>
                        <th>Stanowisko</th>
                        <th>Działanie</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map( worker =>  
                        <tr key={worker.id} >
                            <td> {worker.name} </td>
                            <td> {worker.lastName}</td>
                            <td> {worker.position}</td>
                            <td>
                                <span><FontAwesomeIcon icon={faEdit} /></span>
                                <span><FontAwesomeIcon icon={faUserMinus} /></span>
                            </td>
                        </tr>
                        )}
                </tbody>    
            </table>
        </>
    )
}

export default WorkersList;