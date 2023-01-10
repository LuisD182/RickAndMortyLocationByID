import React from 'react';

const StatusDOA = ({ deadOrAlive }) => {
    if (deadOrAlive === 'Alive') {
        return (
            <section className='status-parent'>
                <div className='status'>
                    <img className='DOA-ball' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Green_Light_Icon.svg/232px-Green_Light_Icon.svg.png?20100207232914" alt="" />
                    <h3>Alive</h3>
                </div>
            </section>
        )
    } else if (deadOrAlive === 'Dead') {
        return (
            <section className='status-parent'>
                <div className='status'>
                    <img className='DOA-ball' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Red_Light_Icon.svg/232px-Red_Light_Icon.svg.png?20100207233018" alt="" />
                    <h3>Dead</h3>
                </div>
            </section>
        )
    } else {
        return (
            <section className='status-parent'>
                <div className='status'>
                    <img className='DOA-ball' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Yellow_Light_Icon.svg/232px-Yellow_Light_Icon.svg.png?20100207233041" alt="" />
                    <h3>Unknown</h3>
                </div>
            </section>
        )
    }

};

export default StatusDOA;