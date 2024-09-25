import "@mantine/core/styles.css";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useNavigation,
} from "@remix-run/react";
import type {
    LinksFunction,
    LoaderFunctionArgs,
    MetaFunction,
} from "@remix-run/node";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import stylesheet from "~/tailwind.css?url";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import AppShellLayout from "./layouts/AppShellLayout";
import { useEffect } from "react";
import { authenticator } from "./services/auth.server";
import useAuthStore from "./store/auth.store";

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
    const navigation = useNavigation();
    useEffect(() => {
        if (navigation.state !== "idle") {
            nprogress.start();
        } else {
            nprogress.complete();
        }
    }, [navigation.state]);

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
                    <NavigationProgress />
                    <Notifications position="top-right" />
                    {children}
                </MantineProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export async function loader({ request }: LoaderFunctionArgs) {
    const user = await authenticator.isAuthenticated(request);

    if (user) {
        // here the user is authenticated
        return user;
    } else {
        // here the user is not authenticated
        return null;
    }
}

export default function App() {
    const user = useLoaderData<typeof loader>();
    const auth = useAuthStore();

    useEffect(() => {
        auth.setUser(user);
    }, [user]);

    return (
        <AppShellLayout>
            <Outlet />
        </AppShellLayout>
    );
}
