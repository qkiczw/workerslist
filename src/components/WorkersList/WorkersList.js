import React from 'react';

function WorkersList( props ) {
    const [...workers] = props.workers; 
    return (
        <>
            <h2>Tutaj będzie lista pracowników</h2>
            <ul>
                {workers.map( worker => 
                    <li key={worker.id} > 
                        <div>
                            <span> {worker.name} </span>
                            <span> {worker.lastName}</span>
                        </div>
                    </li>)
                }
            </ul>
        </>
    )
}

export default WorkersList;