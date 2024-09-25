import "@mantine/core/styles.css";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import stylesheet from "~/tailwind.css?url";
import "@mantine/notifications/styles.css";
import AppShellLayout from "./layouts/AppShellLayout";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => {
    return [
        { title: "Bad Buddy" },
        { name: "description", content: "Bad Buddy" },
    ];
};

const themeMantine = createTheme({
    fontFamily: "Anuphan",
    radius: {
        sm: "0.8rem",
    },
});

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={themeMantine}>
                    <Notifications position="top-right" />
                    <AppShellLayout>{children}</AppShellLayout>
                </MantineProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
