import {
  GET_LATEST,
  GET_OTHER,
  GET_ARTICLE_DATA,
  HANDLE_LIKES_ARTICLE,
  CLEAR_ARTICLE_DATA,
} from "../types";

export default function reducers(state = {}, action) {
  switch (action.type) {
    case GET_LATEST:
      return { ...state, latest: action.payload };
    case GET_OTHER:
      return { ...state, otherNews: action.payload };
    case GET_ARTICLE_DATA:
      return { ...state, artcleData: action.payload };
    case HANDLE_LIKES_ARTICLE:
      return { ...state, artcleData: [action.payload] };
    case CLEAR_ARTICLE_DATA:
      return { ...state, artcleData: action.payload };
    default:
      return state;
  }
}
