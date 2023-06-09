import React from 'react';
import { useEffect, useState } from 'react';
import '../style.css';
const axios = require('axios');

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function populationApi() {
  const [dataAPI, setData] = useState([]);
  const [year, setYear] = useState([]);

  const url =
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    
  const fetchAPI = async () => {
    try {
      const resp = await axios     
        .get(url)
        .then((response) => response.data.data)
        .then((data) => {          
          setData(data);
        });
        
    } catch (error) {}
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const dataYear = [];
  const dataPopulation = [];
  for (let i = 0; i < dataAPI.length; i++) {
    dataYear.push(dataAPI[i]['ID Year']);
    dataPopulation.push(dataAPI[i]['Population']);
  }

  console.log(dataYear.sort());
  console.log(dataPopulation.sort());

  return (
    <div className="population">
      <Tabs>
        <TabList>
          {dataYear.sort().map((years) => (
            <Tab>{years}</Tab>
          ))}
        </TabList>
        <h2>Population in USA:</h2>
        {dataPopulation.sort().map((population) => (
          <li>{population}</li>
        ))}
      </Tabs>
      
      <hr />
      <ol>
        {dataPopulation.sort().map((population) => (
          <li>{population}</li>))}
      </ol>
    </div>
  );
}
