import React from 'react';
import ReactJson from 'react-json-view';

function Details({ data }: any) {
    return (
        <ReactJson
            theme={'railscasts'}
            displayDataTypes={false}
            displayObjectSize={false}
            enableClipboard={false}
            src={data}
        />
    );
}

export default Details;
