import {
    IconLogout,
    IconInputSearch,
    IconUser,
    IconLogin,
    IconLogin2,
} from "@tabler/icons-react";
import clsx from "clsx";
import classes from "./Menu.module.css";
import { Button } from "@mantine/core";
import { Form, useLocation, useNavigate } from "@remix-run/react";
import useAuthStore from "~/store/auth.store";

const data = [
    { link: "/parties", label: "สำรวจปาร์ตี้", icon: IconInputSearch },
    { link: "/parties/my", label: "ปาร์ตี้ของฉัน", icon: IconUser },
];

export function Menu() {
    const { pathname } = useLocation();
    const auth = useAuthStore();
    const navigate = useNavigate();

    const isCurrentPath = (link: string) => {
        return pathname === link;
    };

    const links = data.map((item, index) => (
        <Button
            onClick={() => navigate(item.link)}
            justify="start"
            variant={isCurrentPath(item.link) ? "gradient" : "subtle"}
            leftSection={<item.icon stroke={1.5} />}
            fullWidth
            key={index}
        >
            {item.label}
        </Button>
    ));

    return (
        <nav>
            <div className={clsx("flex flex-col gap-2")}>{links}</div>
            {auth.user !== null ? (
                <Form
                    className={classes.footer}
                    method="post"
                    action="/auth/sign-out"
                >
                    <Button
                        type="submit"
                        justify="start"
                        variant={"subtle"}
                        color="red"
                        fullWidth
                        leftSection={<IconLogout stroke={1.5} />}
                    >
                        ออกจากระบบ
                    </Button>
                </Form>
            ) : (
                <div className={classes.footer}>
                    <Button
                        onClick={() => navigate("/auth/sign-in")}
                        justify="start"
                        variant={"subtle"}
                        fullWidth
                        leftSection={<IconLogin2 stroke={1.5} />}
                    >
                        ออกจากระบบ
                    </Button>
                </div>
            )}
        </nav>
    );
}
