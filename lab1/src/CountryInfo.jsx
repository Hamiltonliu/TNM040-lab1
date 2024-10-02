import countries from 'world-countries';
import './CountryInfo.css';

function CountrySort() {
    // Sort countries by area in ascending order
    const countriesSorted = countries.sort((a, b) => b.area - a.area);
    const filteredCountries = countriesSorted.filter(country => country.name.common !== 'Antarctica'); 
    const topArea = filteredCountries.slice(0, 15);
    console.log(countries);
    
    const maxArea = topArea[0].area;
    return (
        <div>
            <div>
                <h1 className='title'>Countries Sorted by Area</h1>
            </div>
            
            {}
        {topArea.map((country,index) => (
            <CountryInfo key={country.cca3} country={country} maxArea={maxArea} detail={index <= 4}/>
         ))}
        </div>  
        
    );
}

function CountryInfo({ country, maxArea, detail }) {
    const areaRatio = (country.area / maxArea) * 100; 
    if (!country) {
        return <div>No country data available</div>; 
    }
    return (
        <div className='package'>
            <div className="countryInfo">
                <div className="countryBox">
                    <h2>{country.name.common}</h2>
                    {detail ? (
                        <>
                            <p className="cP">Region: {country.region}</p>
                            <p className="cP">Subregion: {country.subregion}</p>
                        </>
                    ) : null}
                    <p className="cP">Area: {country.area} km<sup>2</sup></p>
                </div>
            <div className="cProgress"><div className="progress" style={{width: `${areaRatio.toFixed(0)}%`}}></div></div>
            
            </div>
        </div>

        

    );
}

export { CountryInfo, CountrySort };

export default CountryInfo;