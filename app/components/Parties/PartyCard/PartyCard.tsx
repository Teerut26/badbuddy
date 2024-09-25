import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

export default function PartyCard() {
    return (
        <Card padding="lg" withBorder>
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

            <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
}
