import React from 'react';
import moment from 'moment';

export default function StockInfo(props) {     
    const date = moment(props.stockInfo.last_time).format("dddd, MMMM Do YYYY, h:mm:ss a");
        
    return(
        <h1>Price: {props.stockInfo.last_price} Last Updated: {date} </h1>
    );
}