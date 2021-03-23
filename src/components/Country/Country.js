import React from 'react';

const Country = (props) => {
    const {name, population, region, flag, area} =props.country;
    const flagStyle={height:'50px'}
    const countryStyle ={border:'1px solid gray', margin:'10px', padding:'10px'};
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>this is a {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population: {population}</p>
            <p>region: {region}</p>
            <p>Area{area}</p>
            <button onClick={() => handleAddCountry (props.country)}>add country</button>
            
        </div>
    );
};

export default Country;