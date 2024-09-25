import { Button, Drawer, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { notifications } from "@mantine/notifications";
import { IconFilter, IconSearch } from "@tabler/icons-react";

export default function PartiesIndex() {
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
                <div className="text-xl font-bold">สำรวจปาร์ตี้</div>
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
                            // onClick={() =>
                            //     notifications.show({
                            //       title: 'Default notification',
                            //       message: 'Do not forget to star Mantine on GitHub! 🌟',
                            //     })
                            //   }
                            size="md"
                            leftSection={<IconFilter size={17} />}
                        >
                            กรอง
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
