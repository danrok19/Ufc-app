import { searchDetails } from "../api/queries/searchDetails";

export async function DetailsLoader({ request }: {request: Request}) {
    const { searchParams } = new URL(request.url);
    const first = searchParams.get('first');
    const last = searchParams.get('last');

    if (!first){
        throw new Error('Valid params not provided');
    }
    if (!last){
        throw new Error('Valid params not provided');
    }
    
    return await searchDetails(first, last)
}