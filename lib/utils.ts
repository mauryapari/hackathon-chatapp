export function getGroupIdFromPathName(pathname: string): string {
    // Regular expression to match /group/:groupId
    const match = pathname.match(/^\/group\/([a-zA-Z0-9_-]+)$/);

    if (match && match[1]) {
        // The group ID is captured in match[1]
        return match[1];
    }

    return "";
}

