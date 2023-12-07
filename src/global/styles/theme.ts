export const theme = {
    colors: {
        mainBgColorLight: "#FFF",
        headerBg: "rgba(30, 30, 30, 0.48)",
        mainColorLight: "#3D4D54",
        mainColorDark: "#1E1E1E",
        secondaryColorDark: "#556B84",
        accentColor: "#D3EAFF",
        grayColor: "#ECECEC",
        whiteColor: "#FFF",
        blackColor: "#000",
        purpleColor: "#DD377D",
    },
    spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
    },
    sizes: {
        navbarHeight: '80px'
    }
};

export type ThemeType = typeof theme;
