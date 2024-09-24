import { useLocation } from "@remix-run/react";

export default function Index() {
    const location = useLocation();
    console.log(location);

    return <div>asdf</div>;
}
