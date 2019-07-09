import React, { Component } from "react";

import { ContainerL, Header, Conteudo, Tags } from "./style";
import api from "../../services/api";

class ContentList extends Component {
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
              <button onClick={() => this.handleRemove(list.id)}>
                <i className="fa fa-remove" />
                Remove
              </button>
            </Header>
            <Conteudo>{list.description}</Conteudo>
            <Tags>{list.tags[0]}</Tags>
          </ContainerL>
        ))}
      </div>
    );
  }
}

export default ContentList;
