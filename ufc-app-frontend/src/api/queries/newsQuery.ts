import type { NewsResult } from '../types/newsResult'
import axios from 'axios'

export async function newsQuery() {
    try {
        const response = await axios.get<NewsResult>(
            "http://localhost:5077/api/Common/news"
        );
        console.log("response: ", response)
        return response.data;
    } catch (err) {
        console.log("Error: ", err)
    }
}
