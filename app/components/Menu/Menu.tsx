import { IconLogout, IconHome } from "@tabler/icons-react";
import clsx from "clsx";
import classes from "./Menu.module.css";
import { Button } from "@mantine/core";
import { useLocation, useNavigate } from "@remix-run/react";

const data = [{ link: "/", label: "หน้าหลัก", icon: IconHome }];

export function Menu() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    // const router = useRouter();
    // const pathname = usePathname();

    const isCurrentPath = (link: string) => {
        return pathname.split("/").slice(1)[0] === link.split("/").slice(1)[0];
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
        <nav >
            <div className={clsx(classes.navbarMain, "flex flex-col gap-2")}>
                {links}
            </div>
            <div className={classes.footer}>
                <Button
                    // onClick={() => signOut({ callbackUrl: "/" })}
                    justify="start"
                    variant={"subtle"}
                    color="red"
                    fullWidth
                    leftSection={<IconLogout stroke={1.5} />}
                >
                    ออกจากระบบ
                </Button>
            </div>
        </nav>
    );
}
