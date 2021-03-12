import { initialPlayer } from "./init";

export default (state = initialPlayer, { type, payload }) => {
  switch (type) {
    case "":
      return { ...state, ...payload };

    default:
      return state;
  }
};
