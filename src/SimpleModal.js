import React, { PureComponent, PropTypes } from 'react';
import styles from './SimpleModal.scss';

/* eslint-disable jsx-a11y/no-static-element-interactions, react/prop-types, react/forbid-prop-types */
class SimpleModal extends PureComponent {
  static propTypes = {
    overlayStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    closeHandleStyle: PropTypes.object,
    enableModal: PropTypes.bool,
    enableClose: PropTypes.bool,
    closeHandler: PropTypes.func,
  };

  static defaultProps = {
    enableModal: false,
    enableClose: true,
  };

  handleClose = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (this.props.closeHandler) {
      this.props.closeHandler(e);
    }
  }

  render() {
    const {
      overlayStyle,
      containerStyle,
      closeHandleStyle,
      enableClose,
      enableModal,
    } = this.props;

    if (enableModal) {
      return (
        <div className={ styles.wrapper } style={ overlayStyle } >
          <div className={ styles.container } style={ containerStyle } >
            {
              enableClose &&
              <div className={ styles['close-handle'] } style={ closeHandleStyle } onClick={ this.handleClose } />
            }
            { this.props.children }
          </div>
        </div>
      );
    }

    return null;
  }
}

export default SimpleModal;
