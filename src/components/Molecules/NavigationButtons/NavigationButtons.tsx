import { Button, LikeBtn } from "@/components/Atoms";

import { Box } from "./NavigationButtons.styled";

export const NavigationButtons = () => {
    return (
        <Box>
            <LikeBtn/>
            <Button>Sign in</Button>
        </Box>
    )
}

