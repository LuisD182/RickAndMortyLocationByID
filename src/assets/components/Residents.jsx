import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoaderImages from './LoaderImages';
import ResidentsFounded from './ResidentsFounded';
import ResidentsInfo from './ResidentsInfo';




const Residents = () => {

    const randomNum = Math.ceil(Math.random() * 126)
    const [rickyM, setrickyM] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${randomNum}`).then(res => {
            setrickyM(res.data)
            setLoading(false)
        })
    }, [])
    // console.log(rickyM);

    const residentsAvailable = rickyM.residents?.length

    // INPUT SEARCH BY ID
    const [typeALocation, setTypeALocation] = useState('')
    const search = () => {
        if ((typeALocation > 0) && (typeALocation < 127)) {
            axios.get(`https://rickandmortyapi.com/api/location/${Math.ceil(typeALocation)}`).then(res => {
                setrickyM(res.data)
                setLoading(false)
            }
            ),
                setTypeALocation('')
        } else {
            setTypeALocation('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTypeALocation(typeALocation)
    }
    // INPUT SEARCH BY LOCATION
    // Pendiente! 



    return (
        <main className='main'>
            {loading ? (
                <LoaderImages />
            ) : (

                <section className='full-info'>

                    <form
                        className='form'
                        onSubmit={handleSubmit} noValidate >
                        <input
                            className='input-btn'
                            type="text"
                            value={typeALocation}
                            onChange={(e) => setTypeALocation(e.target.value)}
                            placeholder={'Type an ID location (1-126)'}
                            required />
                        <button
                            className='btn-btn'
                            onClick={search}>Go!</button>
                    </form>
                    {/* <h1>Rick y Morty Wiki</h1> */}

                    <section className='info-container'>
                        <h2 className='nameNID'> {rickyM.name} <span className='light-span'>{`(#${rickyM.id})`} </span> </h2>
                        <div className='info-location'>
                            <h3 >Type: <span className='light-span'>{rickyM.type}</span> </h3>
                            <h3>Origin: <span className='light-span'>{rickyM.dimension}</span></h3>
                            <h3>Population:  <span className='light-span'>{residentsAvailable}</span> </h3>
                            <br />
                        </div>                      
                    </section>
                    <h2><ResidentsFounded residentsAvailable={residentsAvailable} /></h2>

                    <section >
                        <ul>
                            <div>
                                <div className='resident-full-info'>
                                    {
                                        rickyM.residents?.map(currentResident => (
                                            <ResidentsInfo className='resident-full-info'
                                                residentUrl={currentResident}
                                                key={currentResident} />
                                        ))
                                    }
                                </div>
                            </div>
                        </ul>
                    </section>
                </section>
            )
            }
        </main>
    );
};

export default Residents;