import React, { Component } from "react";

import { Container, Header, HeaderForm, FormModal } from "./style";
import ContentList from "../../components/ContentList";
import api from "../../services/api";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      modalOpen: false,
      title: null,
      description: null,
      link: null,
      tags: [],
      search: null,
      check: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const { data } = await api.get("/tools");
    this.setState({ list: data });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const tools = {
      title: this.state.title,
      link: this.state.link,
      description: this.state.description,
      tags: this.state.tags
    };

    await api
      .post("/tools", tools)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmitSearch = async e => {
    e.preventDefault();

    if (this.state.check) {
      const { data } = await api.get(`/tools?tags_like=@`);

      this.setState({
        list: data
      });
    }
    const { data } = await api.get(`/tools?q=${this.state.search}`);

    this.setState({
      list: data
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <h1>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
        </Header>
        <HeaderForm onSubmit={this.handleSubmitSearch}>
          <form onSubmit={() => {}}>
            <input
              type="text"
              className="search"
              placeholder="Search"
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
            />
            <input
              type="checkbox"
              defaultChecked={this.state.check}
              onChange={() => this.setState({ check: !this.state.check })}
            />
            <p>Search in tags only</p>
          </form>
          <button
            onClick={this.openModal}
            data-toggle="modal"
            data-target="#modal"
          >
            <i className="fa fa-plus" /> ADD
          </button>
        </HeaderForm>

        <div
          className="modal fade"
          id="modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Cadastrar Tools
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <FormModal onSubmit={this.handleSubmit}>
                  <label for="toolName">Tool Name</label>
                  <input
                    type="text"
                    id="toolName"
                    placeholder="Tool Name"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                  />

                  <label for="toolLink">Tool Link</label>
                  <input
                    type="text"
                    id="toolLink"
                    placeholder="Tool Link"
                    value={this.state.link}
                    onChange={e => this.setState({ link: e.target.value })}
                  />
                  <label for="toolDescription">Tool Description</label>
                  <textarea
                    placeholder="toolDescription"
                    id="toolDescription"
                    value={this.state.description}
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                  <label for="tags">Tags</label>
                  <input
                    type="text"
                    placeholder="#tags"
                    id="tags"
                    value={this.state.tags}
                    onChange={e => this.setState({ tags: e.target.value })}
                  />
                  <button type="submit">Adicionar</button>
                </FormModal>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <ContentList list={this.state.list} />
      </Container>
    );
  }
}
export default Main;
