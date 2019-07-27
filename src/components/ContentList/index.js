import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as ListToolsActions } from "../../store/ducks/listTools";
import {
  ContainerL,
  Header,
  Conteudo,
  Tags,
  ConteudoP,
  ContainerModal
} from "./style";
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

  componentDidMount() {
    this.props.getToolsRequest();
  }

  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }

  handleRemove = id => {
    api.delete(`/tools/${id}`);
    // console.log(id);
  };
  render() {
    const { listTools } = this.props;
    return (
      <div>
        {listTools.data.map(list => (
          <ContainerL key={list.id}>
            <Header>
              <a href={list.link}>{list.title}</a>
              <button
                // onClick={this.openModal}
                // data-toggle="modal"
                // data-target="#modalRemove"
                onClick={() => this.handleRemove(list.id)}
              >
                <i className="fa fa-remove" />
                Remove
              </button>
            </Header>
            <Conteudo>{list.description}</Conteudo>
            <Tags>{list.tags}</Tags>
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
                    <ConteudoP>Are you sure want to remove hotel? </ConteudoP>
                    <ContainerModal>
                      <button
                        type="submit"
                        className="fechar"
                        data-dismiss="modal"
                        // aria-label="Close"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => this.handleRemove(list.id)}
                        className="remover"
                      >
                        Yes, remove
                      </button>
                    </ContainerModal>
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

const mapStateToProps = state => ({
  listTools: state.listTools
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListToolsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentList);
