import type { SearchResult } from "../types/searchResult";

interface SearchResponse{
    results: SearchResult[]
}

export async function searchQuery(term: string): Promise<SearchResult[]>{
    console.log(term)

    // const options = {
	//     method: 'GET',
	//     headers: {
	// 	    'x-rapidapi-key': 'UFC_API_KEY',
	// 	    'x-rapidapi-host': 'mmaapi.p.rapidapi.com'
	//     }
    // };
    // const response = await fetch(
    //     `https://ufc-fighters.p.rapidapi.com/fighters/search/${term}`,
    //     options
    // );

    // const data: SearchResponse = await response.json();
    
    //Hardcoded to not consume free reqs
    const data: SearchResponse = {"results":[{"first_name":"Conor",
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
        "SubAvg":"0.1"
    }]}

    return data.results.map((item) => {
        return {
           "first_name": item.first_name,
           "last_name": item.last_name,
           "nickname": item?.nickname,
           "height": item.height,
           "weight": item.weight,
           "weight_class": item.weight_class,
           "reach": item.reach,
           "stance": item.stance,
           "wins": item.wins,
           "losses": item.losses,
           "draws": item.draws,
           "belt": item.belt,
           "date_of_birth": item.date_of_birth,
            "SLpM": item.SLpM,
            "StrAcc": item.StrAcc,
            "SApM": item.SApM,
            "StrDef": item.StrDef,
            "TDAvg": item.TDAvg,
            "TDAcc": item.TDAcc,
            "TDDef": item.TDDef,
            "SubAvg": item.SubAvg
        }
    });

}