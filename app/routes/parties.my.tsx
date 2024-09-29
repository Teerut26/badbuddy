import { Button, Drawer, TextInput } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "@remix-run/react";
import { IconFilter, IconPlus, IconSearch } from "@tabler/icons-react";
import PartyCard from "~/components/Parties/PartyCard/PartyCard";

export default function PartiesMy() {
    const [opened, { open, close }] = useDisclosure(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const navigate = useNavigate();
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
                <div className="flex flex-col-reverse md:flex-row justify-between items-end gap-y-4">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="text-xl font-bold">ปาร์ตี้ของฉัน</div>
                        <div className="flex gap-3 w-full">
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
                    </div>
                    <div className="flex justify-end ml-3 w-full md:w-fit">
                        <Button
                            size="md"
                            leftSection={<IconPlus size={17} />}
                            fullWidth={isMobile}
                            onClick={() => navigate("/parties/new")}
                        >
                            เพิ่มปาร์ตี้
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
