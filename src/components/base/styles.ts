import { StyleSheet, css } from 'aphrodite/no-important';

type size = 'small' | 'medium' | 'large';


export const styles = StyleSheet.create({
  roundedCorners: (size: size) => {
    switch (size) {
      case 'small':
        return { borderRadius: '.25rem' };
      case 'medium':
        return { borderRadius: '.5rem' };
      case 'large':
        return { borderRadius: '1rem' };
      default:
        throw new Error('No size selected.');
    }
  }


});
