import { searchQuery } from "../api/queries/searchQuery";

export async function SearchLoader({ request }: {request: Request}) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');

    if (!term){
        throw new Error('Valid params not provided');
    }
    
    return await searchQuery(term)
}