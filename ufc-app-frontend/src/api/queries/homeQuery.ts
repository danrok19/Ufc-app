import type { RankingResult } from "../types/rankingResult"

const key = import.meta.env.VITE_UFC_API_KEY;

export async function homeQuery(weightclass: string): Promise<RankingResult[]> {


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

    // const data: RankingResult[] = await response.json();

    //Hardcoded to not consume free reqs




    const data: RankingResult[] = [
        {
            "weight_class": "Lightweight", "champion": "Ilia Topuria", "contenders": {
                "1": "Islam Makhachev", "2": "Arman Tsarukyan", "3": "Max Holloway", "4": "Charles Oliveira",
                "5": "Justin Gaethje", "6": "Dan Hooker", "7": "Mateusz Gamrot", "8": "Beneil Dariush", "9": "Paddy Pimblett", "10": "Rafael Fiziev", "11": "Renato Moicano", "12": "Michael Chandler",
                "13": "Benoît Saint Denis", "14": "Grant Dawson", "15": "Joel Álvarez"
            }
        }
    ]

    const data1: RankingResult[] = [
        {
            "champion": "Valentina Shevchenko",
            "contenders": { 1: 'Natalia Silva', 2: 'Manon Fiorot', 3: 'Alexa Grasso', 4: 'Erin Blanchfield', 5: 'Jasmine Jasudavicius', 6: 'Maycee Barber', 7: 'Rose Namajunas', 8: 'Tracy Cortez', 9: 'Jéssica Andrade', 10: 'Miranda Maverick', 11: 'Karine Silva', 12: "Casey O'Neill", 13: 'Wang Cong', 14: 'JJ Aldrich', 15: 'Eduarda Moura' },
            "weight_class": "Women's Flyweight"
        }
    ]

    const data2: RankingResult[] = [
        {
            "champion": "Jack Della Maddalena", "contenders": { 1: 'Belal Muhammad', 2: 'Sean Brady', 3: 'Shavkat Rakhmonov', 4: 'Leon Edwards', 5: 'Kamaru Usman', 6: 'Ian Machado Garry', 7: 'Michael Morales', 8: 'Joaquin Buckley', 9: 'Colby Covington', 10: 'Gilbert Burns', 11: 'Geoff Neal', 12: 'Carlos Prates', 13: 'Daniel Rodriguez', 14: 'Gabriel Bonfim', 15: 'Michael Page' },
            "weight_class": "Welterweight"
        }
    ]

    const data3: RankingResult[] = [
        {
            "champion": "Dricus Du Plessis", "contenders": { 1: 'Nassourdine Imavov', 2: 'Sean Strickland', 3: 'Khamzat Chimaev', 4: 'Israel Adesanya', 5: 'Reinier de Ridder', 6: 'Caio Borralho', 7: 'Anthony Hernandez', 8: 'Robert Whittaker', 9: 'Jared Cannonier', 10: 'Brendan Allen', 11: 'Roman Dolidze', 12: 'Paulo Costa', 13: 'Marvin Vettori', 14: 'Abus Magomedov', 15: 'Roman Kopylov' },
            "weight_class": "Middleweight"
        }
    ]


    const data4: RankingResult[] = [
        {
            "champion": "Tom Aspinall", "contenders": { 1: 'Ciryl Gane', 2: 'Alexander Volkov', 3: 'Sergei Pavlovich', 4: 'Curtis Blaydes', 5: 'Jailton Almeida', 6: 'Waldo Cortes Acosta', 7: 'Marcin Tybura', 8: 'Serghei Spivac', 9: 'Derrick Lewis', 10: 'Tai Tuivasa', 11: 'Shamil Gaziev', 12: 'Mick Parkin', 13: 'Tallison Teixeira', 14: 'Valter Walker', 15: 'Rizvan Kuniev' },
            "weight_class": "Heavyweight"
        }
    ]

    switch (weightclass) {
        case "Flyweight":
            return data1
        case "Lightweight":
            return data
        case "Welterweight":
            return data2
        case "Middleweight":
            return data3
        case "Heavyweight":
            return data4
        default:
            throw new Error('Weight class not found!')
    }
}