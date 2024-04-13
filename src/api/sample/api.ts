import { client } from '../axios';

export const sampleApi = async (): Promise<unknown> => {
    try {
        const request = await client.get('url');
        return request.data;
    } catch (err) {
        console.log(`error occurred fetching sampleApi request: ${err}`);
    }
};
