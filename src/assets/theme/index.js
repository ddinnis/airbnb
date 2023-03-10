// const lightTheme = {};
// const darkTheme = {};

const lightTheme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,.18);
      }
    `,
  },
};

export { lightTheme };
