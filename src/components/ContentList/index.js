import React, { Component } from "react";

import { ContainerL, Header, Conteudo, Tags } from "./style";
import api from "../../services/api";

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
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
              <button
                onClick={this.openModal}
                data-toggle="modal"
                data-target="#modalRemove"
              >
                <i className="fa fa-remove" />
                Remove
              </button>
            </Header>
            <Conteudo>{list.description}</Conteudo>
            <Tags>{list.tags[0]}</Tags>
            <div
              className="modal fade"
              id="modalRemove"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLabel">
                      <i className="fa fa-remove" />
                      Remover Tools
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure want to remove hotel? </p>
                    <button
                      type="submit"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                    <button onClick={() => this.handleRemove(list.id)}>
                      Yes, remove
                    </button>
                  </div>
                  <div className="modal-footer" />
                </div>
              </div>
            </div>
          </ContainerL>
        ))}
      </div>
    );
  }
}

export default ContentList;
