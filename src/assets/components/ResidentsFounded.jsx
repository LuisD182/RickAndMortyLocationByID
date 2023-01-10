import React from 'react';

const ResidentsFounded = ({ residentsAvailable }) => {
    if (residentsAvailable === 0) {
        return (
            <div className='noPopulation'>
                <h4>Currently, there are no alive species in this location, try another one!</h4>
                <img className='loader' src="https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-005-920x518.jpg" alt=""  />
            </div>
        )
    }
    else {
        return (
            <div className='population'>
                <h3>Residents</h3>
            </div>
        )
    }
};

export default ResidentsFounded;