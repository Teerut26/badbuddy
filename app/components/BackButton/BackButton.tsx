import { Button } from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { IconChevronLeft } from "@tabler/icons-react";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <div>
            <Button
                leftSection={<IconChevronLeft size={17} />}
                onClick={() => navigate(-1)}
                variant={"transparent"}
                className="-translate-x-4"
            >
                กลับ
            </Button>
        </div>
    );
}
