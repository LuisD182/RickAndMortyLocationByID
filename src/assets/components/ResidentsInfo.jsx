import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StatusDOA from './StatusDOA';

const ResidentsInfo = ({ residentUrl }) => {
    const [showResident, setShowResident] = useState({})
    useEffect(() => {
        axios.get(residentUrl).then(res => setShowResident(res.data))
    }, [])
    console.log(showResident);

    const deadOrAlive = showResident.status
    const numEpisodesAppeared = showResident.episode?.length

    return (
        <section className='resident-Cards'>
            <div>
                <img
                    className='residentCards-pic'
                    src={showResident.image} alt="" />
                <h3 className='DOA-legend'>
                    <StatusDOA deadOrAlive={deadOrAlive} key={showResident.id} />
                </h3>
            </div>

            <div className='residentCards-info'>
                <h2>{showResident?.name}</h2>
                <h3>Species: <span className='hard-span'>{showResident.species}</span></h3>
                <h3>Origin: <span className='hard-span'>{showResident.origin?.name}</span> </h3>
                <h3>Appeared in  <span className='hard-span'>
                    {
                        (numEpisodesAppeared === 1) ? ('1 episode') : (`${numEpisodesAppeared} episodes`)
                    }
                </span> </h3>
            </div>
        </section>
    );
};

export default ResidentsInfo;