import { Card } from "@mantine/core";
import { useNavigate } from "@remix-run/react";

export default function PartyCard() {
    const navigate = useNavigate();
    return (
        <Card
            padding="lg"
            withBorder
            onClick={() => navigate("/parties/1")}
            className="hover:cursor-pointer hover:border-blue-400 hover:shadow"
        >
            <div className="text-xl font-bold">ตี้โหดตบมัน</div>

            <div className="flex flex-col leading-6 mt-3">
                <div className="flex gap-2">
                    <div className="font-bold">สถานที่:</div>
                    <div>สนามแบดมินตัน ม.เกษตร</div>
                </div>
                <div className="flex gap-2">
                    <div className="font-bold">เวลา:</div>
                    <div>18 ก.ย. 2024 16:00 - 18:00</div>
                </div>
                <div className="flex gap-2">
                    <div className="font-bold">ผู้เข้าร่วม:</div>
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
