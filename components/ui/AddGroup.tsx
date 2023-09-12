import { BsPlusLg } from "react-icons/bs";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from '@mantine/form';
import {
    TextInput,
    Group,
    Checkbox,
    Stack,
    Button,
    Modal,
    Tooltip
  } from '@mantine/core';
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type GroupForm = { name: string; description?: string; public: boolean; }

export default function AddGroup({authUser}:any) {
    const [opened, { open, close }] = useDisclosure(false);
    const createGroup = useMutation(api.groups.create);


    const handleFormSubmission = (values: GroupForm) => {
        const dataObj = {
            ...values,
            icon: `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random()*6)+0}.png`,
            user_clerk_id: authUser.user.id
        }
        createGroup(dataObj);
        close();
    }

    const form = useForm({
        initialValues: {
          name: '',
          description: '',
          public: true,
        },
    
        validate: {
          "name": (val) => (val.length < 0 ? 'Your group should have a Name' : null),
        },
      });

    return (
        <>
            <Tooltip label="Create a New Group" position="right" withArrow>
                <Button onClick={open} className="border-1 border-muted hover:bg-red px-2 h-[40px]"><BsPlusLg size={25} className="text-primary" /></Button>
            </Tooltip>
            <Modal opened={opened} onClose={close} title="Create a Group" centered padding="xl">
            <form onSubmit={form.onSubmit((values) => {handleFormSubmission(values)})}>
                <Stack>
                    <TextInput
                        required
                        label="Group Name"
                        value={form.values.name}
                        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                        error={form.errors.name}
                        radius="md"
                    />

                    <TextInput
                        label="Description"
                        value={form.values.description}
                        onChange={(event) => form.setFieldValue('description', event.currentTarget.value)}
                        error={form.errors.description && 'Enter Some Description'}
                        radius="md"
                    />

                    <Checkbox
                        label="Is this a public Group?"
                        checked={form.values.public}
                        onChange={(event) => form.setFieldValue('public', event.currentTarget.checked)}
                    />
                </Stack>

                <Group mt="xl">
                    <Button type="submit" variant="filled" color="blue.5" className="bg-blue-600">
                        Create
                    </Button>
                </Group>
            </form>
            </Modal>
        </>
    );
}

