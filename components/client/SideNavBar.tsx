"use client"

import React, { useEffect, useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem, Badge, Menu } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { UserButton, useUser } from "@clerk/clerk-react";
import Link from "next/link";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useIdle } from '@mantine/hooks';
import UserStatusMenu from '../ui/UserStatusMenu';
import { BsChevronRight, BsFillCircleFill } from 'react-icons/bs';
import AddGroup from '../ui/AddGroup';
import ThemeToggle from "@/components/ui/ThemeToggle";

const useStyles = createStyles((theme) => ({
    link: {
        width: rem(50),
        height: rem(50),
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
    badge: {
        position: "absolute",
        right: "0",
        bottom: "-3px",
        border: "5px solid black",
        borderRadius: "50px",
        padding: "5px"
    }
}));

interface NavbarLinkProps {
    _id: Id<"groups">
    label: string
    href: string
    icon: string
    active?: boolean;
    onClick?(): void;
}

type GroupState = Omit<NavbarLinkProps, "onClick" | "active">[]

function NavbarLink({ icon, label, active, onClick, href }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Link href={href}>
            <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} withArrow>
                <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                    <Avatar src={icon} alt="Group Icon" />
                </UnstyledButton>
            </Tooltip>
        </Link>
    );
}

export function NavbarMinimal() {
    const [active, setActive] = useState(2);
    const [groupData, setGroupData] = useState<GroupState>([]);

    const idle = useIdle(5000);
    const { classes, cx } = useStyles();

    const authUser = useUser()

    const fetchGroups = useQuery(api.groups.getUserGroupsMinimal, {
        user_clerk_id: authUser.isLoaded ? authUser.user?.id as string : "skip"
    })

    console.log(fetchGroups)

    useEffect(() => {
        if (!fetchGroups) return

        const metadata = [
            {
                _id: "home",
                icon: "/icons/home.svg",
                label: "Home",
                href: "/client"
            }
        ] as GroupState

        for (const group of fetchGroups) {
            metadata.push({
                _id: group._id,
                icon: group.icon,
                label: group.name,
                href: `/group/${group._id}`
            })
        }

        setGroupData(metadata)
    }, [fetchGroups]);

    const links = groupData.map((link, index) => (
        <NavbarLink
            {...link}
            key={link._id}
            href={link.href}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar width={{ base: 80 }} p="md" className={"min-h-screen"}>
            <Center className='relative'>
                <Menu
                    transitionProps={{ transition: 'slide-left' }}
                    position="right-start"
                    width={220}
                >
                    <Menu.Target>
                        <div>
                            <Avatar src={authUser.user?.imageUrl} alt="Group Icon" size={32} radius={32} />
                            <Badge sx={{ backgroundColor: idle ? '#FAB005' : '#82C91E' }} size='md' className={classes.badge}></Badge>
                        </div>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item
                            closeMenuOnClick={false}
                            icon={
                                <UserButton afterMultiSessionSingleSignOutUrl={"/"} afterSignOutUrl={"/"} afterSwitchSessionUrl={"/client"} />
                            }>
                            {authUser.user?.username}
                        </Menu.Item>
                        <Menu.Item
                            closeMenuOnClick={false}
                            icon={
                                <BsFillCircleFill className="text-green-600" />
                            }
                            rightSection={<BsChevronRight />}
                        >
                            <UserStatusMenu />
                        </Menu.Item>
                        <Menu.Item
                            color = "cyan"
                        >
                            Friends
                        </Menu.Item>
                        <Menu.Item
                            color = "red"
                        >
                            Blocked Users
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item
                        >

                            <ThemeToggle />
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Center>
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                    <div className='flex justify-center'>
                        <AddGroup authUser={authUser} />
                    </div>
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}