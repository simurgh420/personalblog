import { createBrowserRouter } from "react-router";
import Layout from "./Layout.tsx";
<<<<<<< HEAD
import { About } from "@/pages/About.tsx";
import { Works } from "@/components/Works.tsx";
import { Contact } from "@/pages/Contact.tsx";
import Home from "@/pages/Home.tsx";
import NotFound from "@/pages/NotFound.tsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "works", element: <Works /> },
                { path: "contact", element: <Contact /> },
            ],
        },
    ],
    {
        basename: "/personalblog",
    }
);
=======
import {About} from "@/pages/About.tsx";
import {Works} from "@/components/Works.tsx";
import {Contact} from "@/pages/Contact.tsx";
import Home from "@/pages/Home.tsx";
import NotFound from "@/pages/NotFound.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:<NotFound/>,
        children: [
            {index: true, element:<Home/>},
            { path: "about", element: <About /> },
            { path: "works", element: <Works /> },
            { path: "contact", element: <Contact /> },



        ],
    },
]);
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
