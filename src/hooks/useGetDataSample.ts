import { useQuery } from '@tanstack/react-query';
import { sampleApi } from '../api/sample/api';

export const useGetDataSample = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['useGetDataSample'],
        queryFn: () => sampleApi()
    });

    return { data, isLoading, isError };
};
