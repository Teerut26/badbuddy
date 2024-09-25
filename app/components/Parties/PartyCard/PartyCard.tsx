import { Card } from "@mantine/core";

export default function PartyCard() {
    return (
        <Card
            padding="lg"
            withBorder
            className="hover:cursor-pointer hover:border-blue-400 hover:shadow"
        >
            <div className="text-xl font-bold">ตี้โหดตบมัน</div>

            <div className="flex flex-col leading-5 mt-3">
                <div className="flex gap-2">
                    <div className="font-bold">Location:</div>
                    <div>สนามแบดมินตัน ม.เกษตร</div>
                </div>
                <div className="flex gap-2">
                    <div className="font-bold">Time:</div>
                    <div>18 ก.ย. 2024 16:00 - 18:00</div>
                </div>
                <div className="flex gap-2">
                    <div className="font-bold">Participants:</div>
                    <div>10/10</div>
                </div>
                <div className="flex gap-2">
                    <div className="font-bold">Court:</div>
                    <div>3</div>
                </div>
            </div>
        </Card>
    );
}
