import { Group } from "@/types";
import GroupHeader from "./GroupHeader";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {Button, useMantineTheme} from "@mantine/core";
import {Id} from "@/convex/_generated/dataModel";
import {useRouter} from "next/navigation";

interface Props {
  group?: Group;
    groupChannels?: {
      _id: Id<"groupChannels">
    name: string;
  }[];
  directMessages?: string[];
}

export default function GroupSidebar({ group, directMessages, groupChannels }: Props) {

    const router = useRouter();

    const theme = useMantineTheme();

    const styles = theme.colorScheme === 'dark' ? "bg-[#2B2D31] light:bg-[#F2F3F5]" : "bg-[#F2F3F5] light:bg-[#2B2D31]"

    const handleChannelClick = (id: Id<"groupChannels">) => {
        router.push(`/group/${group?._id}/channel/${id}`)
    }

  return (
    <div className={`flex flex-col h-full text-primary w-full ${styles}`}>
      {group && <GroupHeader group={group} css={styles}/>}
      <h1 className="text-center m-3 bg-gray-600 rounded-sm py-1">
        {group ? "Browse Channels" : "Friends"}
      </h1>

      {group && groupChannels &&
          groupChannels.map((ch, index) => {
          return (
            <div key={index} className="my-2 text-center">
                <Button variant="outline" color="red" radius="xs" onClick={(() => handleChannelClick(ch._id))}>
                    {ch.name}
                </Button>
            </div>

          );
        })}

      {directMessages &&
        directMessages.map((message, index) => {
          return (
            <h1 key={index} className="text-xs my-2 text-center">
              {message}
            </h1>
          );
        })}
    </div>
  );
}
