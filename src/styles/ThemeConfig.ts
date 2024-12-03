import { css } from "styled-components";

const typoCreator = (
  fontSize: string,
  fontWeight: number,
  letterSpacing: string,
  lineHeight: string
) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
  `;
};

export const ThemeConfig = {
  colors: {
    backgroundColor: "",

    gray_1: "#d3d3d3",
    gray_2: "#ccc",
    gray_3: "#666",
    gray_4: "#6D686B",
    gray_5: "#555",
    gray_white1: "#f1f1f1",
    gray_white2: "#ddd",
    black: "#000",
    white: "#fff",
  },

  shadows: {
    card: "1px 1px 3px 0px #ccc",
    image: "0 4px 6px -1px #0000001A"
  },

  typo: {
    title_48_B: typoCreator("3rem", 600, "0px", "1"),
    title_24_B: typoCreator("1.2rem", 600, "0px", "1"),
    title_16_B: typoCreator("1rem", 600, "0px", "1"),
    title_16_M: typoCreator("1rem", 500, "0px", "1"),
    body_16_R: typoCreator("1rem", 400, "0", "1"),
    body_16_12: typoCreator("1rem", 400, "0", "1.2"),
    body_16_15: typoCreator("1rem", 400, "0", "1.5"),
    body_12_R: typoCreator("0.7rem", 400, "0", "1"),
  },

  border: {
    gray_1: "1px solid #ccc"
  }
}

export type TColor = keyof (typeof ThemeConfig)["colors"];