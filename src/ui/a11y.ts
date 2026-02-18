export const navButtonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    color: (theme: any) =>
      theme.palette.mode === "dark"
        ? theme.palette.text.primary
        : theme.palette.primary.main,
  };