import React from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus, faEdit, faSortAlphaUp, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function WorkersList( props ) {
    const [...workers] = props.workers; 
    return (
        
            <table className={'workersListTable'}>
                <thead className={'workersListTable__titles'}>
                    <tr>
                        <th className={'workersListTable__cell workersListTable__cell--title workersListTable__col--name'}>Imię <span><FontAwesomeIcon icon={faSortAlphaUp} /></span></th>
                        <th className={'workersListTable__cell workersListTable__cell--title workersListTable__col--last-name'}>Nazwisko <span><FontAwesomeIcon icon={faSortAlphaUp} /></span></th>
                        <th className={'workersListTable__cell workersListTable__cell--title workersListTable__col--position'}>Stanowisko</th>
                        <th className={'workersListTable__cell workersListTable__cell--title workersListTable__col--action'}>Działanie</th>
                    </tr>
                </thead>
                <tbody className={'workersListTable__content'}>
                    {workers.map( worker =>  
                        <tr key={worker.id} className={'workersListTable__row'}>
                            <td className={'workersListTable__cell workersListTable__col--name'}> {worker.name} </td>
                            <td className={'workersListTable__cell workersListTable__col--last-name'}> {worker.lastName}</td>
                            <td className={'workersListTable__cell workersListTable__col--position'}> {worker.position}</td>
                            <td className={'workersListTable__cell workersListTable__col--action'}>
                                <FontAwesomeIcon icon={faInfoCircle } className={'workersListTable__cell__action-icon'} />
                                <FontAwesomeIcon icon={faEdit} className={'workersListTable__cell__action-icon'}/>
                                <FontAwesomeIcon icon={faUserMinus} className={'workersListTable__cell__action-icon'}/>
                            </td>
                        </tr>
                        )}
                </tbody>    
            </table>
    )
}

export default WorkersList;