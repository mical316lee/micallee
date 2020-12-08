import palette from './palette';

export default {
  fontFamily: [
    'Helvetica Neue',
    'Arial',
    'Hiragino Kaku Gothic ProN',
    'Hiragino Sans',
    'Meiryo',
    'sans-serif',
  ].join(','),

  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 35,
    letterSpacing: '-0.24px',
    lineHeight: '40px',
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 29,
    letterSpacing: '-0.24px',
    lineHeight: '32px',
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: '-0.06px',
    lineHeight: '28px',
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 16,
    /* letterSpacing: '-0.05px',
    lineHeight: '20px',*/
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: 16,
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: 14,
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    color: palette.text.primary,
    fontSize: 14,
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body2: {
    color: palette.text.secondary,
    fontSize: 12,
    letterSpacing: '-0.04px',
    lineHeight: '18px',
  },
  icon: {
    color: palette.text.primary,
    fontSize: 15,
  },
  caption: {
    color: palette.text.secondary,
    fontSize: 11,
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: palette.text.secondary,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
};
