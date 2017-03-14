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
    background: '#333',
    border: '1px solid #333',
    color: '#eee',
    margin: '.25rem 0',
    padding: '.25rem',
    transition: '500ms all',
  },

  resourceBlockHover: {
    ':hover': {
      background: '#222',
      cursor: 'pointer',
      transition: '500ms all',
    }
  }

  resourceBlockImage: {
    height: '1rem',
  }
});

interface ResourceBlockInteractions {
  onClick: (type: string) => void;
}

export class ResourceBlock extends React.Component<ResourceBlockProps & ResourceBlockInteractions, {}> {
  constructor(props) {
    super(props);
  }

  public render():JSX.Element {
    const { name, onClick } = this.props;
    return (
      <div onClick={ onClick } className={css(styles.resourceBlock, styles.resourceBlockHover, styles.roundedCorners)}>
        <div><img className={css(styles.resourceBlockImage)} src={`img/${name}.png`} /> { name }</div>
      </div>
    )
  }
}
