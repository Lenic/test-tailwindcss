const generalConfig = {};
const customs = [
  200,
  180,
  170,
  160,
  150,
  140,
  130,
  120,
  110,
  100,
  90,
  80,
  72,
  70,
  68,
  60,
  64,
  56,
  50,
  0,
];

setThemeConfig("fontSize", 6, 48, 2, (key) => [`${key}px`, `${key + 6}px`]);
setThemeConfig("lineHeight", 16, 48, 2);
setThemeConfig("padding", 6, 48, 2);
setThemeConfig("margin", 6, 48, 2);
setThemeConfig("spacing", 16, 48, 2);

function setThemeConfig(key, start, end, diff, cb) {
  if (!generalConfig[key]) generalConfig[key] = {};
  for (let index = start; index <= end && index < 100; index += diff) {
    generalConfig[key][index] = cb ? cb(index) : `${index}px`;
  }
  for (const item of customs) {
    generalConfig[key][item] = cb ? cb(item) : `${item}px`;
  }
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "white",
      primary: "#3d7fff",
      secondary: "#f7f9fa",
    },
    textColor: {
      primary: "#3d7fff",
      white: "white",
      main: "#303133",
      secondary: "#808080",
    },
    margin: {
      ...generalConfig.margin,
    },
    padding: {
      ...generalConfig.padding,
    },
    fontSize: {
      ...generalConfig.fontSize,
    },
    lineHeight: {
      ...generalConfig.lineHeight,
    },
    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
  },
  variants: ["responsive", "important"],
  plugins: [addImportantVariant],
};

// important 变体
function addImportantVariant({ addVariant }) {
  addVariant("important", ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `.${rule.selector.slice(1)}\\!`;
      rule.walkDecls((decl) => {
        decl.important = true;
      });
    });
  });
}
