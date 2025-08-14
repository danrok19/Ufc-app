import type { RankingResult } from "../types/rankingResult"

const key = import.meta.env.VITE_UFC_API_KEY;

export async function homeQuery(weightclass: string): Promise<RankingResult[]>{


    console.log(weightclass, key)
    // const options = {
    //     method: 'GET',
    //     headers: {
    // 	    'x-rapidapi-key': key,
    // 	    'X-RapidAPI-host': 'ufc-fighters.p.rapidapi.com'
    //     }
    // };
    // const response = await fetch(
    //     `https://ufc-fighters.p.rapidapi.com/rankings/${weightclass}`,
    //     options
    // );

    // const data: RankingResult = await response.json();

    //Hardcoded to not consume free reqs


    const data: RankingResult[] = [
        {
            "weight_class":"Lightweight","champion":"Ilia Topuria","contenders":{"1":"Islam Makhachev","2":"Arman Tsarukyan","3":"Max Holloway","4":"Charles Oliveira",
                "5":"Justin Gaethje","6":"Dan Hooker","7":"Mateusz Gamrot","8":"Beneil Dariush","9":"Paddy Pimblett","10":"Rafael Fiziev","11":"Renato Moicano","12":"Michael Chandler",
                "13":"Benoît Saint Denis","14":"Grant Dawson","15":"Joel Álvarez"}
        }
    ]

    return data;
    
}