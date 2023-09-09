import { Menu } from "@mantine/core";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { BsFillCircleFill, BsFillMoonFill, BsXCircle, BsCheck2} from "react-icons/bs";
import React from "react";

export default function UserStatusMenu() {
    const userAvailableStatus = [
        {
            icon: <BsFillCircleFill className="text-green-600" />,
            statusName: 'Online'
        },
        {
            icon: <BsFillMoonFill className="text-yellow-500" />,
            statusName: 'Idle'
        },
        {
            icon: <MdDoNotDisturbOnTotalSilence className="text-red" />,
            statusName: 'Do Not Disturb'
        },
        {
            icon: <BsXCircle />,
            statusName: 'Offline'
        },
    ]
    return (
        <Menu
            transitionProps={{ transition: 'slide-left' }}
            position="right-start"
            width={220}
            offset={25}
        >
            <Menu.Target>
                {/* TODO: Add current status based on check*/}
                <p>Online</p>
            </Menu.Target>
            <Menu.Dropdown>
                {userAvailableStatus.map((item, index) => (
                    <Menu.Item key={index}
                        icon={item.icon}
                        rightSection={<BsCheck2/>}>
                        {item.statusName}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
}

