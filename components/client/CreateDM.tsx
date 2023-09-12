"use client";

import {
    Button,
    Modal,
    Group,
    Stack,
    Tooltip,
    Avatar,
    Checkbox,
    ScrollArea,
    createStyles,
    List,
} from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";
import { useDisclosure } from "@mantine/hooks";

type ComponentProps = {};

const useStyles = createStyles((theme) => ({
    itemWrapper: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function CreateDM({ }) {
    const [opened, { open, close }] = useDisclosure(false);
    const { classes } = useStyles();

    const friends = ["James", "Charlie", "John"];

    return (
        <>
            <div className="">
                <Tooltip label="Create DM" position="right" withArrow>
                    <AiOutlinePlus size={20} onClick={open} />
                </Tooltip>
                <Modal
                    opened={opened}
                    onClose={close}
                    title={<p className="text-lg">Select Friends</p>}
                    centered
                    padding="xl"
                    scrollAreaComponent={ScrollArea.Autosize}
                >
                    <form>
                        <Stack>
                            {friends.map((item, index) => (
                                <div key={index} className="flex justify-between align-center">
                                    <p>{item}</p>
                                    <Checkbox classNames={{}} size="lg" />
                                </div>
                            ))}
                        </Stack>

                        <Group mt="xl">
                            <Button
                                type="submit"
                                variant="filled"
                                color="blue.5"
                                className="bg-blue-600 w-[100%]"
                            >
                                Create DM
                            </Button>
                        </Group>
                    </form>
                </Modal>
            </div>
        </>
    );
}
