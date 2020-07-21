import React from 'react';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 'view' };
    this.goView = this.goView.bind(this);
    this.goReview = this.goReview.bind(this);
    this.goCreate = this.goCreate.bind(this);
  }

  goView() {
    this.setState({ current: 'view' });
  }

  goReview() {
    this.setState({ current: 'review' });
  }

  goCreate() {
    this.setState({ current: 'create' });
  }

  render() {
    let pageView;
    if (this.state.current === 'view') {
      pageView = <ViewCards />;
    } else if (this.state.current === 'review') {
      pageView = <ReviewCards />;
    } else {
      pageView = <CreateCard />;
    }
    return (<>
      <div className="row justify-content-end m-2">
        <button className={this.state.current === 'view' ? 'btn btn-primary' : 'btn btn-link'} onClick={this.goView}>View Cards</button>
        <button className={this.state.current === 'review' ? 'btn btn-primary' : 'btn btn-link'} onClick={this.goReview}>Review</button>
        <button className={this.state.current === 'create' ? 'btn btn-primary' : 'btn btn-link'} onClick={this.goCreate}>Create Card</button>
      </div>
      {pageView}
    </>);
  }
}

export default App;
