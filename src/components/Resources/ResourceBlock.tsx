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
    alignItems: 'center',
    background: '#333',
    border: '1px solid #333',
    color: '#eee',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '.25rem 0',
    padding: '.25rem',
    transition: '500ms all',
    width: '10rem',
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
  },

  totalIndicator: {
    background: '#555',
    padding: '.25rem',
    textAlign: 'right',
    width: '25%'
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
    const { name, onClick, total } = this.props;
    return (
      <div onClick={ onClick } className={css(styles.resourceBlock, styles.resourceBlockHover, styles.roundedCorners)}>
        <div><img className={css(styles.resourceBlockImage)} src={`img/${name}.png`} /> { name }</div>
        <div className={css(styles.totalIndicator)}>{ total }</div>
      </div>
    )
  }
}
