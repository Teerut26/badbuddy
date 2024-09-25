import { ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export default function SignIn() {
    return <div className="flex justify-center items-center"></div>;
}

export async function action({ request }: ActionFunctionArgs) {
    await authenticator.logout(request, { redirectTo: "/" });
}
