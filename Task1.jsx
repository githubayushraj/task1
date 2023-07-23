import React, { useState } from 'react';

const Task1 = () => {
  const countriesData = [
    { name: 'India', population: 1428627663, Note:'India is the seventh-largest country and most populous democracy in the world. It is located in South Asia and was officially declared as the Republic of India after its independence from British rule. India is one of the famous countries of the world.'},
    { name: 'Russia', population: 172954319,Note:"Russia is a federation of 86 republics, provinces, territories, and districts, all controlled by the government in Moscow. The head of state is a president elected by the people. The economy is based on a vast supply of natural resources, including oil, coal, iron ore, gold, and aluminum."},
    { name: 'United States', population: 339996563, Note:"The United States of America is the world's third largest country in size and nearly the third largest in terms of population. Located in North America, the country is bordered on the west by the Pacific Ocean and to the east by the Atlantic Ocean. Along the northern border is Canada and the southern border is Mexico." },
    { name: 'China', population: 1425671352, Note:'China is a socialist country situated in eastern Asia. It is also known as “The factory of the world”. It is the most populous country in the world. It is famous for its ancient wall “The great wall of china”' },
    { name: 'Japan', population: 123294513, Note:"Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japan's nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south." },
    { name: 'Pakistan', population: 249566743, Note:"Pakistan is a Muslim country, located in southern Asia. The neighboring countries are India, Iran, Afghanistan, and China. It is officially called the Islamic Republic of Pakistan. In the south, it has long coastline along the Arabian Sea."},
    { name: 'Srilanka', population: 21893579,Note:"Sri Lanka is an island nation located in the Indian Ocean, just off the southeastern coast of India. Despite its modest size—slightly larger than the state of West Virginia—Sri Lanka has a population of about 20 million people, almost equal to the population of Texas"},
    { name: 'Nepal', population: 30896590,Note:"Nepal is a landlocked country with highly diverse and rich geography, culture, and religions. It is situated in South Asia on the lap of the hug Himalayas surrounded by India in the east, south, and west and China in the north. It occupies an area of 147,516 sq. km."},
    { name: 'Bangladesh', population: 172954319,Note:"Bangladesh is a country in Southern Asia and is located on the Bay of Bengal bordered by India on all sides except for a small border with Burma. Bangladesh has flat plains, and most of the country is situated on deltas of large rivers flowing from the Himalayas.,"},
    { name: 'Afghanistan', population: 41000000,Note:"Afghanistan is a country present in the Asian continent and is a landlocked country, meaning it has only land borders. It is the 37th most populated and 41st largest country in the world."}
    // Add more countries here
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredCountries = countriesData.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CountryCard = ({ country }) => {
    return (
      <div className="country-card">
        <h3>{country.name}</h3>
        <p>Population: {country.population}</p>
        <p>Note:{country.Note}</p>
      </div>
    );
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="app">
      <h1>Country Search App</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="card-container">
        {filteredCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search countries"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Task1;
