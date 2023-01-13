export const theme = {
  colors: {
    primary: '#07A8DB',
    secondary: '#9667FF',
    white: '#ffff',
    pink: '#F943FD',
    lightBlue: '#96E6FF',
    purple: '#38005A',
    lightBlueRGBA: (150, 230, 255, 0.6),
  },
  space: [
    '0px',
    '2px',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
    '64px',
    '128px',
    '256px',
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '14px',
    s: '16px',
    sm: '20px',
    m: '24px',
    l: '32px',
    xl: '48px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    primary: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  },

  mediaQueries: {
    s: `@media screen and (min-width: 480px)`,
    m: `@media screen and (min-width: 768px)`,
    l: `@media screen and (min-width: 1200px)`,
  },
};
