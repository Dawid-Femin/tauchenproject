import localFont from "next/font/local";

export const useReloadFont = localFont({
    src: [
        {
            path: "../../../public/fonts/Reload-Light.ttf",
        },
    ],
    variable: "--reloadFont",
});