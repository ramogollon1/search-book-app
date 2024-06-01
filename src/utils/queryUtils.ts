import {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  InfiniteData,
} from '@tanstack/react-query';

export type QueryOptions<TQueryFn> = Omit<
  UseQueryOptions<TQueryFn, unknown, TQueryFn, string[]>,
  'queryKey' | 'queryFn'
>;

export type MutationOptions<TData, TVariables = void> = Omit<
  UseMutationOptions<TData, unknown, TVariables>,
  'mutationFn'
>;

export type InfiniteQueryOptions<TQueryFnData, TPageParams> = Omit<
  UseInfiniteQueryOptions<
    TQueryFnData,
    unknown,
    InfiniteData<TQueryFnData, TPageParams>,
    TQueryFnData,
    string[],
    TPageParams
  >,
  'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'
>;
