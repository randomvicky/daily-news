import React, { Component } from "react";
import { connect } from "react-redux";
import { latestNews, otherNews } from "../../store/actions";
import LatestNews from "./latestNews";
import OtherNews from "./otherNews";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(latestNews());
    this.props.dispatch(otherNews());
  }
  render() {
    return (
      <>
        <LatestNews latest={this.props.articles.latest} />
        <OtherNews otherNews={this.props.articles.otherNews} />
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}
export default connect(mapStateToProps)(Home);
