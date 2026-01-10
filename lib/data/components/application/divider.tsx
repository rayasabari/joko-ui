// import
import { IconToggleRight } from "@tabler/icons-react";
import { ComponentType } from "../types";

// define divider
export const divider: ComponentType = {
    slug: "divider",
    name: "Divider",
    icon: <IconToggleRight stroke={1.5} />,
    description: "A Divider",
    variants: [
        {
            id: "divider-basic", // default divider
            name: "A Basic Divider",
            code: "<div class='border-t border-gray-400'></div>",
        },
    ],
};
