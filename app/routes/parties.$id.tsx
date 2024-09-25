import { Button, Card } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
    IconCalendar,
    IconCircleArrowRight,
    IconUserCheck,
} from "@tabler/icons-react";
import BackButton from "~/components/BackButton/BackButton";

export async function loader({ params }: LoaderFunctionArgs) {
    return params.id;
}

export default function PartiesMy() {
    const result = useLoaderData<typeof loader>();
    console.log(result);
    return (
        <div className="flex flex-col gap-3">
            <BackButton />
            <div className="text-2xl font-bold mt-3">ตี้โหดตบมัน</div>
            <div className="flex flex-col leading-5">
                <div className="flex gap-2">
                    <div className="font-bold">สถานที่:</div>
                    <div>สนามแบดมินตัน ม.เกษตร</div>
                </div>
                <div className="flex gap-2">
                    <div className="font-bold">เวลา:</div>
                    <div>18 ก.ย. 2024 16:00 - 18:00</div>
                </div>
                <div className="flex gap-2">
                    <div className="font-bold">Court:</div>
                    <div>3</div>
                </div>
            </div>
            <div className="flex gap-2">
                <Button leftSection={<IconCircleArrowRight size={17} />}>
                    เข้าร่วม
                </Button>
                <Button
                    type="button"
                    variant="default"
                    leftSection={<IconCalendar size={17} />}
                >
                    เพิ่มลงปฏิทิน
                </Button>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <div className="flex gap-2">
                    <div className="font-bold">ผู้เข้าร่วม:</div>
                    <div>4/10</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                    {...new Array(9).fill(0).map((_, index) => (
                        // <div className="w-full px-3 py-2 flex gap-2 border rounded-xl" key={index}>
                        //     <div>t***s</div>
                        // </div>
                        <Card key={index} withBorder>
                            <div className="flex gap-2 items-center">
                                <IconUserCheck className="text-teal-500" />
                                <div>t***s</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
