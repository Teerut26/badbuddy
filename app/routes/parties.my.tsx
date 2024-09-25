import { Button, Drawer, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter, IconSearch } from "@tabler/icons-react";
import PartyCard from "~/components/Parties/PartyCard/PartyCard";

export default function PartiesMy() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Drawer
                opened={opened}
                onClose={close}
                title="กรอง"
                position="right"
            >
                {/* Drawer content */}
            </Drawer>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">ปาร์ตี้ของฉัน</div>
                <div className="flex gap-3">
                    <TextInput
                        placeholder="ค้นหา"
                        size="md"
                        leftSection={<IconSearch size={17} />}
                        className="w-full"
                        maw={500}
                    />
                    <div>
                        <Button
                            onClick={open}
                            size="md"
                            leftSection={<IconFilter size={17} />}
                        >
                            กรอง
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                    {...new Array(9)
                        .fill(0)
                        .map((_, index) => <PartyCard key={index} />)}
                </div>
            </div>
        </>
    );
}
