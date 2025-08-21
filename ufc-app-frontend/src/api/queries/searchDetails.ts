import type { SearchResult } from "../types/searchResult";
//import axios from 'axios'

//const api_key = import.meta.env.VITE_UFC_API_KEY
export async function searchDetails(first: string, last: string): Promise<SearchResult | undefined> {
    console.log(first + last)


    // try {
    //     const options = {
    //         headers: {
    //             'x-rapidapi-key': api_key,
    //             'X-RapidAPI-host': 'ufc-fighters.p.rapidapi.com'
    //         }
    //     };

    //     const response = await axios.get<SearchResult>(
    //         `https://ufc-fighters.p.rapidapi.com/fighters/data?first_name=${last}&last_name=${first}`,
    //         options
    //     )

    //     return response.data
    // } catch (err) {
    //     console.error("Smth went wrong: ", err)
    //     return undefined;
    // }

    //Hardcoded to not consume free reqs
    const data: SearchResult = {
        "first_name": "Mateusz",
        "last_name": "Gamrot",
        "nickname": "Gamer",
        "height": "5' 10",
        "weight": "155 lbs",
        "weight_class": "lightweight",
        "reach": "70.0",
        "stance": "Southpaw",
        "wins": "25",
        "losses": "3",
        "draws": "0",
        "belt": "0",
        "date_of_birth": "Dec 11, 1990",
        "SLpM": "3.35",
        "StrAcc": "51%",
        "SApM": "3.04",
        "StrDef": "59%",
        "TDAvg": "0.67",
        "TDAcc": "36%",
        "TDDef": "90%",
        "SubAvg": "0.1"
    }

     return data

}