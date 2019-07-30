import React, { Component } from "react";
import Modal from "react-modal";

import {
  ContainerL,
  Header,
  Conteudo,
  Tags,
  ButtonFechar,
  ButtonRemover,
  ModalTitle
} from "./style";
import api from "../../services/api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "35%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class ContentList extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleRemove = id => {
    api.delete(`/tools/${id}`);
  };

  render() {
    const props = this.props;
    return (
      <div>
        {props.list.map(list => (
          <ContainerL key={list.id}>
            <Header>
              <a href={list.link}>{list.title}</a>
              <button onClick={this.openModal}>
                <i className="fa fa-remove" />
                Remove
              </button>
            </Header>
            <Conteudo>{list.description}</Conteudo>
            <Tags>{list.tags}</Tags>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <ModalTitle ref={subtitle => (this.subtitle = subtitle)}>
                <i className="fa fa-remove" />
                Remove Tool
              </ModalTitle>
              <p>
                Are you sure you want to remove <strong>hotel ?</strong>
              </p>
              <form>
                <ButtonFechar
                  className="fechar"
                  onClick={() => this.closeModal(false)}
                >
                  Cancelar
                </ButtonFechar>
                <ButtonRemover onClick={() => this.handleRemove(list.id)}>
                  Remover
                </ButtonRemover>
              </form>
            </Modal>
          </ContainerL>
        ))}
      </div>
    );
  }
}

export default ContentList;
