import type { SearchResult } from "../types/searchResult";

export async function searchDetails(first: string, last: string): Promise<SearchResult>{
    console.log(first + last)

    // const options = {
    //     method: 'GET',
    //     headers: {
    // 	    'x-rapidapi-key': 'UFC_API_KEY',
    // 	    'x-rapidapi-host': 'mmaapi.p.rapidapi.com'
    //     }
    // };
    // const response = await fetch(
    //     `https://ufc-fighters.p.rapidapi.com/fighters/data?first_name=${first}_name=${last}`,
    //     options
    // );

    // const data: SearchResult = await response.json();
    
    //Hardcoded to not consume free reqs
    const data: SearchResult = {
        "first_name":"Conor",
        "last_name":"McGregor",
        "nickname":"The Notorious",
        "height":"5' 9",
        "weight":"155 lbs.",
        "weight_class":"lightweight",
        "reach":"74.0",
        "stance":"Southpaw",
        "wins":"22",
        "losses":"6",
        "draws":"0",
        "belt":"0",
        "date_of_birth":"Jul 14, 1988",
        "SLpM":"5.32",
        "StrAcc":"49%",
        "SApM":"4.66",
        "StrDef":"54%",
        "TDAvg":"0.67",
        "TDAcc":"55%",
        "TDDef":"66%",
        "SubAvg":"0.1"}

    return data

}