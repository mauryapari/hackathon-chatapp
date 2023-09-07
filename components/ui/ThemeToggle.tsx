"use client"

import React, { FC } from "react";
import {FaRegMoon, FaSun} from "react-icons/fa";
import {useTheme} from "next-themes";

interface ComponentProps {
}

const ThemeToggle: FC<ComponentProps> = ({}) => {

    const { theme, setTheme } = useTheme()

    return (
        <>
                <button className="block py-2 pl-3 pr-4 rounded md:p-0" onClick={()=> setTheme( theme === "dark"? "light": "dark" )}>
                    { theme=== "dark"? <FaSun/>: <FaRegMoon/> }
                </button>
        </>
    );
};

export default ThemeToggle;
