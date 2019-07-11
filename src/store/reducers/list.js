const INITIAL_STATE = {
  data: [
    {
      id: 1,
      title: "Notion",
      link: "https://www.google.com",
      description: "Descrição s dsd sd",
      tags: "#"
    },
    {
      id: 2,
      title: "Notion",
      link: "https://www.google.com",
      description: "Descrição s dsd sd",
      tags: "#"
    }
  ]
};

export default function listTools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TOOLS_SUCCESS":
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
