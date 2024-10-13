import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "gpxaaiPUteVQc-DhqqF3GLxbICUzWFNHSgvAwIWoWbg";

//початковий приклад getAsyncImage з 4-ї домашки РЕАКТ
// async function getAsyncImage(query, page = 1) {

//     const response = await axios.get(`/search/photos`, {
//         params: {
//             client_id: API_KEY,
//             query: query,
//             image_type: 'photo',
//             orientation: "landscape",
//             safesearch: true,
//             page,
//             per_page: 12,
//         },
//     });
//     return {
//         results: response.data.results,
//         total_pages: response.data.total_pages,
//     };
// };

interface UserParams {
    client_id: string;
    query: string;
    image_type: 'photo';
    orientation: "landscape";
    safesearch: true,
    page: number;
    per_page: number;
};
const params = {
    client_id: API_KEY,
    query: " ",
    image_type: 'photo',
    orientation: "landscape",
    safesearch: true,
    page: 1,
    per_page: 12,
};
export{params};
// user = params
// приклад універсальної типізації всих функцій!
// async function getAsyncImage<T>(url:string): Promise<T> {
//     try {
//         const response: T = await axios.get(url, {params});
//         return response
//     } catch (error) {
//          console.error(error);
//          throw error
//     }
// };

async function getAsyncImage<T>( query:string, page = 1): Promise<T> {
    try {
        // const response = await axios.get(`/search/photos`, {params});
        const response: T = await axios.get(`/search/photos`, {
            params: {
                client_id: API_KEY,
                query: query,
                image_type: 'photo',
                orientation: "landscape",
                safesearch: true,
                page,
                per_page: 12,
            },
        });
        return response
        // return {
        //     results: response.data.results,
        //     total_pages: response.data.total_pages,
        // };

    } catch (error) {
         console.error(error);
         throw error
    }
};

export { getAsyncImage };