import React from 'react';

export default function CompanyInfo(props) {
    return(
        <>
            <h1> {props.companyInfo.ticker} -  {props.companyInfo.name} </h1>
            <p>{props.companyInfo.long_description}</p>
        </>
    );
}