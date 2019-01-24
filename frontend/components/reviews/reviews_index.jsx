import React from 'react';
import ReviewIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {
  render() {
    let review = this.props.reviews.map((review) => {
      return (
        <div key={ review.id } className="">
          <ReviewIndexItem review={ review } currentUserId={ this.props.currentUserId }
            deleteReview= { this.props.deleteReview }/>
        </div>
      )
    });

    return(
      <div>
        { review }
      </div>
    );
  }
}

export default ReviewsIndex;