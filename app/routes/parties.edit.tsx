import {
    Button,
    Group,
    Select,
    TagsInput,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput, TimeInput } from "@mantine/dates";

export default function PartiesEdit() {
    const form = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            location: "",
            court: [],
            date: "",
            timeStart: "",
            timeEnd: "",
            maxPlayers: 0,
        },

        validate: {
            name: (value) => {
                if (value.length < 3) {
                    return "ชื่อปาร์ตี้ต้องมากกว่า 3 ตัวอักษร";
                }

                if (value.length > 100) {
                    return "ชื่อปาร์ตี้ต้องน้อยกว่า 100 ตัวอักษร";
                }

                return null;
            },
        },
    });

    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="text-xl font-bold">เพิ่มปาร์ตี้</div>
                <div>
                    <form
                        onSubmit={form.onSubmit((values) =>
                            console.log(values)
                        )}
                        className="flex flex-col gap-3"
                    >
                        <TextInput
                            className="w-full"
                            withAsterisk
                            label="ชื่อปาร์ตี้"
                            placeholder="กรอกชื่อปาร์ตี้"
                            key={form.key("name")}
                            {...form.getInputProps("name")}
                            size="md"
                        />
                        <div className="flex gap-3">
                            <TextInput
                                className="w-full"
                                withAsterisk
                                label="สถานที่"
                                placeholder="กรอกสถานที่"
                                key={form.key("location")}
                                {...form.getInputProps("location")}
                                size="md"
                            />
                            <TagsInput
                                className="w-full"
                                withAsterisk
                                label="Court"
                                placeholder="กรอก Court"
                                key={form.key("court")}
                                {...form.getInputProps("court")}
                                size="md"
                                clearable
                                maxTags={2}
                            />
                        </div>
                        <DateInput
                            className="w-full"
                            withAsterisk
                            label="วันที่"
                            placeholder="กรอกวันที่"
                            key={form.key("date")}
                            {...form.getInputProps("date")}
                            size="md"
                        />
                        <div className="flex gap-3">
                            <TimeInput
                                className="w-full"
                                key={form.key("timeStart")}
                                {...form.getInputProps("timeStart")}
                                label="เวลาเริ่ม"
                                placeholder="เวลาเริ่ม"
                                size="md"
                            />
                            <TimeInput
                                className="w-full"
                                key={form.key("timeEnd")}
                                {...form.getInputProps("timeEnd")}
                                label="เวลาสิ้นสุด"
                                placeholder="เวลาสิ้นสุด"
                                size="md"
                            />
                        </div>
                        <Select
                            label="จำนวนที่ผู้เล่นเข้าได้สูงสุด"
                            placeholder="เลือกจำนวนที่ผู้เล่นเข้าได้สูงสุด"
                            data={["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]}
                            key={form.key("maxPlayers")}
                            {...form.getInputProps("maxPlayers")}
                        />
                        <Group justify="flex-end" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>
                </div>
            </div>
        </>
    );
}
