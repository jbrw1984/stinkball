// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette: Record<string, string> = {

  // Light --> Dark
  neutral100: "#FFFFFF",
  neutral300: "#D7CEC9",
  neutral400: "#9E9E9E",
  // neutral500: "#292929",
  // neutral500: "#424242",
  neutral500: "#303030",
  neutral600: "#1D1D1D", 
  neutral900: "#000000",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  primary100: "#FFC107",
  primary200: "#4CAF50", 
  primary300: "#2196F3", 
  primary400: "#9C27B0", 
  primary500: "#FF9800", 
  primary600: "#F44336"


} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral100,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral400,
  /**
   * Dark text color.
   */
  textBlack: palette.neutral900,
  /**
   * The secondary color of the screen background.
   */
  secondaryBackground: palette.neutral500,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral600,
  /**
   * The default border color.
   */
  // border: palette.neutral400,
  /**
   * The main tinting color.
   */
  // tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  /**
   * Color for quarterback backgrounds
   */
  qbBackground: palette.primary100,
  /**
   * Color for runningback backgrounds
   */
  rbBackground: palette.primary200,
  /**
   * Color for wide receiver backgrounds
   */
  wrBackground: palette.primary300,
  /**
   * Color for tight end backgrounds
   */
  teBackground: palette.primary400,
  /**
   * Color for kicker backgrounds
   */
  kBackground: palette.primary500,
  /**
   * Color for defense/special teams backgrounds
   */
  dstBackground: palette.primary600,
}
