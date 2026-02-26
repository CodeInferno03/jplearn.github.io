export const navButtonStyle = {
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    color: (theme: any) =>
      theme.palette.mode === "dark"
        ? theme.palette.text.primary
        : theme.palette.primary.main,
  };

export const paperBorder = (theme) => ({
  borderStyle: "solid",
  border: "1em",
  borderColor: theme === "dark" ? "#8c8c8c" : "#000"
})