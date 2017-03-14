import { StyleSheet, css } from 'aphrodite/no-important';

type size = 'small' | 'medium' | 'large';

interface Styles {
  roundedCorners: (s: size) => object;
}

export const STYLES:Styles = {
  roundedCorners: (size: size) => {
    let s;
    if (size === 'small') s = '.25rem';
    if (size === 'medium') s = '.5rem';
    if (size === 'large') s = '1rem';
    return StyleSheet.create({
      roundedCorners: {
        borderRadius: s,
      },
    });
  },




};
