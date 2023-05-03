import PropTypes from 'prop-types';
import { React, Component } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyle>
          <img src={this.props.imgUrl} alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}

Modal.proptTypes = {
  onClose: PropTypes.func.isRequired,
};
