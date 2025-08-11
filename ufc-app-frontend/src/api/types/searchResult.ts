export interface SearchResult {
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
}