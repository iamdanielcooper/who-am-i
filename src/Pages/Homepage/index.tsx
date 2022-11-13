import React from 'react';
import { Loader, Details } from '../../Components';
import data from '../../TestData/data.json';

function Homepage() {
    return <>{data ? <Details data={data} /> : <Loader />}</>;
}

export default Homepage;
