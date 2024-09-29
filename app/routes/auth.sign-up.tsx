import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Form } from "@remix-run/react";

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
            <Button className="mt-3" size="md" type="submit">
                เข้าสู่ระบบ
            </Button>
        </Form>
    );
}
