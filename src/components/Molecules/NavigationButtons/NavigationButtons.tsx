import { Button, LikeBtn } from "@/components/Atoms";

import { Box } from "./NavigationButtons.styled";

export const NavigationButtons = () => {
    return (
        <Box>
            <LikeBtn isLink={true} href="/favorites"/>
            <Button>Sign in</Button>
        </Box>
    )
}

