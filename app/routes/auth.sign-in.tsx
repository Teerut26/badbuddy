import { Button, Card, PasswordInput, TextInput } from "@mantine/core";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export default function SignIn() {
    return (
        <Form className="flex flex-col gap-3" method="post">
            <TextInput
                name="email"
                placeholder="Email"
                withAsterisk
                label="Email"
                size="md"
            />
            <PasswordInput
                name="password"
                placeholder="Password"
                withAsterisk
                size="md"
                label="Password"
            />
            <Button className="mt-3" size="md" type="submit">เข้าสู่ระบบ</Button>
        </Form>
    );
}

export async function action({ request }: ActionFunctionArgs) {
    // we call the method with the name of the strategy we want to use and the
    // request object, optionally we pass an object with the URLs we want the user
    // to be redirected to after a success or a failure
    return await authenticator.authenticate("user-pass", request, {
        successRedirect: "/",
        failureRedirect: "/auth/sign-in",
    });
}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export async function loader({ request }: LoaderFunctionArgs) {
    // If the user is already authenticated redirect to /dashboard directly
    return await authenticator.isAuthenticated(request, {
        successRedirect: "/",
    });
}
