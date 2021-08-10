import { em, rem } from "polished";
import { colors } from "@karrotmarket/design-token";
import { createCss } from "@stitches/react";

import { convertColorScheme } from "./colors";

export type MediaType = `@${"i" | "sm" | "md" | "lg" | "xl" | "xxl"}`;
export const MediaTypeList: MediaType[] = [
  "@i",
  "@sm",
  "@md",
  "@lg",
  "@xl",
  "@xxl",
];
export type MediaTypeMap<T> = Partial<{ [i in MediaType]: T }>;

// should exports `styled`, `css` and `getCssString`
export const { styled, css, global, getCssString, theme, media, utils } =
  createCss({
    // follows Bootstrap's breakpoints practice
    // See https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints
    media: {
      i: `(min-width:  ${em(0)})`,
      sm: `(min-width: ${em(576)})`,
      md: `(min-width: ${em(768)})`,
      lg: `(min-width: ${em(992)})`,
      xl: `(min-width: ${em(1200)})`,
      xxl: `(min-width: ${em(1400)})`,
      mc: `(min-width: ${em(1230)})`,
    },
    theme: {
      // @ts-ignore
      colors: convertColorScheme(colors.light.scheme),
      fonts: {
        noto: '"Noto Sans JP" sans-serif',
        gilroy: "Gilroy",
        system:
          '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      },
      fontSizes: {
        heading1: rem(72),
        heading2: rem(58),
        heading3: rem(42),
        heading4: rem(28),
        heading5: rem(24),
        subtitle1: rem(26),
        subtitle2: rem(20),
        subtitle3: rem(18),
        body1: rem(16),
        body2: rem(14),
        caption1: rem(13),
        caption2: rem(12),
      },
      lineHeights: {
        heading1: "115%",
        heading2: "115%",
        heading3: "120%",
        heading4: "120%",
        heading5: "120%",
        subtitle1: "120%",
        subtitle2: "120%",
        subtitle3: "140%",
        body1: "140%",
        body2: "140%",
        caption1: "140%",
        caption2: "140%",
      },
      sizes: {
        maxContent: rem(1150),
      },
      zIndices: {},
    },
    utils: {
      /**
       * override
       */
      marginTop: (_config) => (value: number | string) => ({
        marginTop: typeof value === "string" ? value : rem(value),
      }),
      marginBottom: (_config) => (value: number | string) => ({
        marginBottom: typeof value === "string" ? value : rem(value),
      }),

      rowGap: (_config) => (value: number | string) => ({
        rowGap: typeof value === "string" ? value : rem(value),
      }),
      columnGap: (_config) => (value: number | string) => ({
        columnGap: typeof value === "string" ? value : rem(value),
      }),

      /**
       * padding
       */
      p: (_config) => (value: number | string) => ({
        padding: typeof value === "string" ? value : rem(value),
      }),
      pr: (_config) => (value: number | string) => ({
        paddingRight: typeof value === "string" ? value : rem(value),
      }),
      pl: (_config) => (value: number | string) => ({
        paddingLeft: typeof value === "string" ? value : rem(value),
      }),
      pt: (_config) => (value: number | string) => ({
        paddingTop: typeof value === "string" ? value : rem(value),
      }),
      pb: (_config) => (value: number | string) => ({
        paddingBottom: typeof value === "string" ? value : rem(value),
      }),

      /**
       * margin
       */
      m: (_config) => (value: number | string) => ({
        margin: typeof value === "string" ? value : rem(value),
      }),
      mr: (_config) => (value: number | string) => ({
        marginRight: typeof value === "string" ? value : rem(value),
      }),
      ml: (_config) => (value: number | string) => ({
        marginLeft: typeof value === "string" ? value : rem(value),
      }),
      mt: (_config) => (value: number | string) => ({
        marginTop: typeof value === "string" ? value : rem(value),
      }),
      mb: (_config) => (value: number | string) => ({
        marginBottom: typeof value === "string" ? value : rem(value),
      }),

      /**
       * Space.tsx
       */
      h: (_config) => (value: number | string) => ({
        width: rem(1),
        minHeight: typeof value === "string" ? value : rem(value),
        maxHeight: typeof value === "string" ? value : rem(value),
      }),
      w: (_config) => (value: number | string) => ({
        width: rem(1),
        minWidth: typeof value === "string" ? value : rem(value),
        maxWidth: typeof value === "string" ? value : rem(value),
      }),

      /**
       * Html.tsx
       */
      highlightColor: (_config) => (value) => ({
        "& strong": { color: value },
      }),

      paddingX: (_config) => (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (_config) => (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      /**
       * Flex.tsx
       */
      row: (_config) => () => ({
        display: "flex",
        flexDirection: "row",
      }),
      column: (_config) => () => ({
        display: "flex",
        flexDirection: "column",
      }),
      jc: (_config) => (value) => ({
        display: "flex",
        justifyContent: value,
      }),
      ai: (_config) => (value) => ({
        display: "flex",
        alignItems: value,
      }),
      center: (_config) => () => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }),
      rowCenterX: (_config) => () => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }),
      rowCenterY: (_config) => () => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }),

      colCenterX: (_config) => () => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
      colCenterY: (_config) => () => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }),
      scale: (_config) => (value: number) => ({
        transform: `scale(${value})`,
      }),

      contentArea: (_config) => (value: boolean) =>
        value
          ? {
              boxSizing: "border-box",
              maxWidth: "$maxContent",
              margin: "0 auto",
              paddingX: rem(24),
            }
          : undefined,
    },
  });
