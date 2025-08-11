import type { SearchResult } from "../types/searchResult";

interface SearchResponse{
    results:
    {
        entity: {
            country: {
                alpha2: string,
                name: string
            },
            gender: string,
            id: number,
            name: string,
            teamColors: {
                primary: string,
                secondary: string,
                text: string
            }
    },
    score: number
    }[]
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
    //     `https://mmaapi.p.rapidapi.com/api/mma/search/${term}`,
    //     options
    // );

    // const data: SearchResponse = await response.json();
    
    //Hardcoded to not consume free reqs
    const data: SearchResponse = {"results":[{"entity":{"country":{"alpha2":"IE","name":"Ireland"},"gender":"M","id":471736,"name":"Conor McGregor","teamColors":{"primary":"#374df5","secondary":"#374df5","text":"#ffffff"}},"score":394979.5},{"entity":{"country":{"alpha2":"SX","name":"Scotland"},"gender":"M","id":1042784,"name":"Lee McGregor","teamColors":{"primary":"#374df5","secondary":"#374df5","text":"#ffffff"}},"score":7083.1953}]}

    return data.results.map((item) => {
        return {
           entity: {
            country: {
                alpha2: item.entity.country.alpha2,
                name: item.entity.country.name
            },
            gender: item.entity.gender,
            id: item.entity.id,
            name: item.entity.name,
            teamColors: {
                primary: item.entity.teamColors.primary,
                secondary: item.entity.teamColors.secondary,
                text: item.entity.teamColors.text
            }
        },
        score: item.score 
        }
    });

}