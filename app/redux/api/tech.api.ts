import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Tech{
  id: number;
  name: string;
  icon:string;
  link:string;
}

export const techApi = createApi({
  reducerPath: "techApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/data" }),
  endpoints: (builder) => ({
    getTech: builder.query<Tech[], void>({
      query: () => "tech.json",
    }),
  }),
});
export const { useGetTechQuery } = techApi;