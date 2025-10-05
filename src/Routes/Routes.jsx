import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import  Root  from "../pages/Root/Root"

import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import ListedBook from '../pages/ListedBook/ListedBook';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import PageToRead from '../pages/pageToRead/PageToRead';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch("/public/booksData.json"),
            path:"/",
            Component: Home

        },
        {
          path:'/ReadList',
          loader:()=>fetch('/public/booksData.json'),
          Component: ReadList
        },
        {
          path:'/PageToRead',
          loader:()=>fetch('/public/booksData.json'),
          Component:PageToRead
        },
        {
          path:'/BookDetails/:id',
          loader:()=>fetch('/public/booksData.json'),
          Component:BookDetails
        }
    ]
  },
]);


