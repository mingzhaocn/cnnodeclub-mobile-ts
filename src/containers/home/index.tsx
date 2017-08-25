
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions';
import { Topics, TopicsParam, OnRequestTopics, StoreState } from '../../types';
// import TopicItem from '../../components/TopicItem';
// const InfiniteScroll = require('react-infinite-scroller');
import Scroller from '../../components/common/Scroller'
const topIndicatorSvg = require('../../assets/load_green.svg')

interface Props {
  fetchTopicsIfNeeded: (topicsParam: TopicsParam) => {};
  lastTopicParam: TopicsParam;
  onRequestTopics: OnRequestTopics;
  topics: Topics;
}
class Home extends React.Component<Props, {}> {

  loadMore = () => {
    this.props.fetchTopicsIfNeeded(this.props.lastTopicParam);
  }
  render() {
    return (
      <div
        style={{
          height: '100%'
        }}
      >
        <Scroller
          onScrollToTop={this.loadMore}
          topIndicator={(<img style={{ width: '0.44rem', height: '0.44rem' }} src={topIndicatorSvg} alt="loading..." />)}
        >
          <div>Scroller Item Top</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item</div>
          <div>Scroller Item Bottom</div>
        </Scroller>
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={true || false}
          loader={<div style={{ fontSize: '0.44rem', textAlign: 'center' }}>Loading ...</div>}
        >
          <div>
            {
              this.props.topics.map((item: any) => (
                <TopicItem topic={item} key={item.id} />
              ))
            }
          </div>
        </InfiniteScroll> */}
      </div>
    );
  }
  componentDidMount() {
    // this.props.fetchTopicsIfNeeded(this.props.lastTopicParam);
  }
}

function mapStateToProps(state: StoreState) {
  return {
    lastTopicParam: state.topics.topicsParam,
    onRequestTopics: state.topics.onRequestTopics,
    topics: state.topics.topics,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TopicsAction>) {
  return {
    fetchTopicsIfNeeded: (topicsParam: TopicsParam): {} => dispatch(actions.fetchTopicsIfNeeded(topicsParam))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);