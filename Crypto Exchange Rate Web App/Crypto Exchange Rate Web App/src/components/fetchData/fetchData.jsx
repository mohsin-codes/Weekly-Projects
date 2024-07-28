import axios from "axios";

export function fetchData(fromCurrency, toCurrency){
    const options = {
        method : 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: { from_currency : fromCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency},
        headers: { 'X-RapidAPI-Key': '6f164f35b1msh2d3ffe36aad7886p18516ejsned77b4f5f58d', 'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'}
    };

    return axios.request(options)
    .then(res => {return res.data; })
    .catch((err) => {return err; })
}