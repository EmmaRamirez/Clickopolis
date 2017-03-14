import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Partial } from '../../utils';
import { IResource } from '../../classes';

type ResourceBlockProps = Partial<IResource>;

const styles = StyleSheet.create({
  roundedCorners: {
    borderRadius: '.25rem',
  },

  resourceBlock: {
    border: '1px solid #eee',
    margin: '.25rem 0',
    padding: '.25rem',
  },

  resourceBlockImage: {
    height: '1rem',
  }
});

export class ResourceBlock extends React.Component<ResourceBlockProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { name } = this.props;
    return (
      <div className={css(styles.resourceBlock, styles.roundedCorners)}>
        <div><img className={css(styles.resourceBlockImage)} src={`img/${name}.png`} /> { name }</div>
      </div>
    )
  }
}
