import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tech } from "./tech.api";

export interface Project{
    id: number;
    imageUrl: string;
    link:string;
    techs: Tech[];
}

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/data" }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => "projects.json",
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;