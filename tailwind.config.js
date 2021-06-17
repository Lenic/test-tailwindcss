const plugin = require('tailwindcss/plugin');
const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');

function exec(begin, step, end, action) {
  for (let i = begin; i <= end; i += step) {
    action(i);
  }
}

function pxAction(begin, step, end) {
  const res = {};
  exec(begin, step, end, function (i) {
    res[i] = i + 'px';
  });
  return res;
}

function numberAction(begin, step, end) {
  const res = {};
  exec(begin, step, end, function (i) {
    res[i] = i.toString();
  });
  return res;
}

function boxShadow(begin, step, end) {
  const res = {};
  exec(begin, step, end, function (i) {
    res[i] =
      '0 ' +
      (i + 1) +
      'px 1px 0px rgba(0, 0, 0, 0.2), 0 ' +
      i +
      'px 0px 0 rgba(0, 0, 0, 0.14), 0 1px ' +
      (1 + i * 2) +
      'px 0 rgba(0, 0, 0, 0.12) !important';
  });
  return res;
}

module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    color: false,
    screens: false,
  },
  theme: {
    variables: {
      DEFAULT: {
        colors: {
          main: '#101217',
          secondary: '#515151',
          muted: '#bfbfbf',
          note: '#bfbfbf',

          black: '#000',
          white: '#fff',

          border: '#e2e5e9',

          primary: {
            DEFAULT: '#3d7fff',
            light: '#3d6bff',
          },
          success: {
            DEFAULT: '#11c048',
            light: '#e0ffea',
          },
          warning: {
            DEFAULT: '#fd9312',
            light: '#fff6eb',
          },
          danger: {
            DEFAULT: '#ff3d61',
            light: '#ffdbe2',
          },
        },
      },
    },
    screens: {},
    spacing: pxAction(0, 2, 100),
    colors: {
      black: colorVariable('var(--colors-black)'),
      white: colorVariable('var(--colors-white)'),

      primary: {
        DEFAULT: colorVariable('--colors-primary-default'),
        light: colorVariable('var(--colors-primary-light)'),
      },
      success: {
        DEFAULT: colorVariable('var(--colors-success-default)'),
        light: colorVariable('var(--colors-success-light)'),
      },
      warning: {
        DEFAULT: colorVariable('var(--colors-warning-default)'),
        light: colorVariable('var(--colors-warning-light)'),
      },
      danger: {
        DEFAULT: colorVariable('var(--colors-danger-default)'),
        light: colorVariable('var(--colors-danger-light)'),
      },
    },
    borderColor: { DEFAULT: 'var(--colors-border)' },
    borderRadius: Object.assign(pxAction(0, 2, 8), { DEFAULT: '4px', full: '9999px' }),
    borderWidth: { DEFAULT: '1px' },
    boxShadow: Object.assign(boxShadow(0, 1, 24), { none: 'none' }),
    fontSize: Object.assign(pxAction(10, 2, 50), { 0: '0px' }),
    fontWeight: Object.assign(numberAction(100, 100, 700), { bold: 'bold', normal: 'normal' }),
    height: Object.assign(pxAction(0, 100, 700), pxAction(12, 2, 98), { auto: 'auto', full: '100%', screen: '100vh' }),
    lineHeight: pxAction(12, 2, 100),
    textColor: (theme) =>
      Object.assign(theme('colors'), {
        main: colorVariable('var(--colors-main)'),
        secondary: colorVariable('var(--colors-secondary)'),
        muted: colorVariable('var(--colors-muted)'),
        note: colorVariable('var(--colors-note)'),
      }),
    width: Object.assign(pxAction(0, 100, 700), {
      auto: 'auto',
      full: '100%',
      screen: '100vw',
    }),
  },
  variants: {
    accessibility: ['responsive', 'focus-within', 'focus', 'important'],
    alignContent: ['responsive', 'important'],
    alignItems: ['responsive', 'important'],
    alignSelf: ['responsive', 'important'],
    animation: ['responsive', 'important'],
    appearance: ['responsive', 'important'],
    backgroundAttachment: ['responsive', 'important'],
    backgroundClip: ['responsive', 'important'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    backgroundImage: ['responsive', 'important'],
    backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    backgroundPosition: ['responsive', 'important'],
    backgroundRepeat: ['responsive', 'important'],
    backgroundSize: ['responsive', 'important'],
    borderCollapse: ['responsive', 'important'],
    borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    borderOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    borderRadius: ['responsive', 'important'],
    borderStyle: ['responsive', 'important'],
    borderWidth: ['responsive', 'important'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    boxSizing: ['responsive', 'important'],
    clear: ['responsive', 'important'],
    container: ['responsive', 'important'],
    cursor: ['responsive', 'important'],
    display: ['responsive', 'important'],
    divideColor: ['responsive', 'dark', 'important'],
    divideOpacity: ['responsive', 'important'],
    divideStyle: ['responsive', 'important'],
    divideWidth: ['responsive', 'important'],
    fill: ['responsive', 'important'],
    flex: ['responsive', 'important'],
    flexDirection: ['responsive', 'important'],
    flexGrow: ['responsive', 'important'],
    flexShrink: ['responsive', 'important'],
    flexWrap: ['responsive', 'important'],
    float: ['responsive', 'important'],
    fontFamily: ['responsive', 'important'],
    fontSize: ['responsive', 'important'],
    fontSmoothing: ['responsive', 'important'],
    fontStyle: ['responsive', 'important'],
    fontVariantNumeric: ['responsive', 'important'],
    fontWeight: ['responsive', 'important'],
    gap: ['responsive', 'important'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus', 'important'],
    gridAutoColumns: ['responsive', 'important'],
    gridAutoFlow: ['responsive', 'important'],
    gridAutoRows: ['responsive', 'important'],
    gridColumn: ['responsive', 'important'],
    gridColumnEnd: ['responsive', 'important'],
    gridColumnStart: ['responsive', 'important'],
    gridRow: ['responsive', 'important'],
    gridRowEnd: ['responsive', 'important'],
    gridRowStart: ['responsive', 'important'],
    gridTemplateColumns: ['responsive', 'important'],
    gridTemplateRows: ['responsive', 'important'],
    height: ['responsive', 'important'],
    inset: ['responsive', 'important'],
    justifyContent: ['responsive', 'important'],
    justifyItems: ['responsive', 'important'],
    justifySelf: ['responsive', 'important'],
    letterSpacing: ['responsive', 'important'],
    lineHeight: ['responsive', 'important'],
    listStylePosition: ['responsive', 'important'],
    listStyleType: ['responsive', 'important'],
    margin: ['responsive', 'important'],
    maxHeight: ['responsive', 'important'],
    maxWidth: ['responsive', 'important'],
    minHeight: ['responsive', 'important'],
    minWidth: ['responsive', 'important'],
    objectFit: ['responsive', 'important'],
    objectPosition: ['responsive', 'important'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    order: ['responsive', 'important'],
    outline: ['responsive', 'focus-within', 'focus', 'important'],
    overflow: ['responsive', 'important'],
    overscrollBehavior: ['responsive', 'important'],
    padding: ['responsive', 'important'],
    placeContent: ['responsive', 'important'],
    placeItems: ['responsive', 'important'],
    placeSelf: ['responsive', 'important'],
    placeholderColor: ['responsive', 'dark', 'focus', 'important'],
    placeholderOpacity: ['responsive', 'focus', 'important'],
    pointerEvents: ['responsive', 'important'],
    position: ['responsive', 'important'],
    resize: ['responsive', 'important'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus', 'important'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus', 'important'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus', 'important'],
    ringOpacity: ['responsive', 'focus-within', 'focus', 'important'],
    ringWidth: ['responsive', 'focus-within', 'focus', 'important'],
    rotate: ['responsive', 'hover', 'focus', 'important'],
    scale: ['responsive', 'hover', 'focus', 'important'],
    skew: ['responsive', 'hover', 'focus', 'important'],
    space: ['responsive', 'important'],
    stroke: ['responsive', 'important'],
    strokeWidth: ['responsive', 'important'],
    tableLayout: ['responsive', 'important'],
    textAlign: ['responsive', 'important'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    textOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'important'],
    textOverflow: ['responsive', 'important'],
    textTransform: ['responsive', 'important'],
    transform: ['responsive', 'important'],
    transformOrigin: ['responsive', 'important'],
    transitionDelay: ['responsive', 'important'],
    transitionDuration: ['responsive', 'important'],
    transitionProperty: ['responsive', 'important'],
    transitionTimingFunction: ['responsive', 'important'],
    translate: ['responsive', 'hover', 'focus', 'important'],
    userSelect: ['responsive', 'important'],
    verticalAlign: ['responsive', 'important'],
    visibility: ['responsive', 'important'],
    whitespace: ['responsive', 'important'],
    width: ['responsive', 'important'],
    wordBreak: ['responsive', 'important'],
    zIndex: ['responsive', 'focus-within', 'focus', 'important'],
  },
  plugins: [
    require('@mertasan/tailwindcss-variables')({
      colorVariables: true,
    }),
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `${rule.selector}\\!`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
