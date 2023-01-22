import { Component } from 'react';

import FeedbackBlock from 'modules/FeedbackBlocK/FeedbackBlock';
import FeedbackVariants from './FeetbackVariants/FeedbackVariants';
import FeedbackStatistics from './FeedbackStatistics/FeedbackStatistics';
import Notification from 'shared/components/Notification/Notification';

import css from './feedback.module.css';

const voteOptions = ['good', 'neutral', 'bad'];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  calcAllTotal() {
    const { good, neutral, bad } = this.state;
    const allTotal = good + neutral + bad;
    return allTotal;
  }

  calcFeedback(nameProps) {
    const total = this.calcAllTotal();
    if (!total) return 0;
    const value = this.state[nameProps];
    const resalt = ((value / total) * 100).toFixed(2);
    return Number(resalt);
  }

  render() {
    const allTotal = this.calcAllTotal();
    const goodTotal = this.state.good;

    const neutralTotal = this.state.neutral;
    const badTotal = this.state.bad;
    const positivePercentage = this.calcFeedback('good');

    return (
      <div className={css.wrapper}>
        <FeedbackBlock titie="Please leave feedback">
          <FeedbackVariants options={voteOptions} leaveFeedback={this.leaveFeedback} />
        </FeedbackBlock>
        <FeedbackBlock titie="Statistics">
          {allTotal ? (
            <FeedbackStatistics
              allTotal={allTotal}
              goodTotal={goodTotal}
              neutralTotal={neutralTotal}
              badTotal={badTotal}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackBlock>
      </div>
    );
  }
}

export default Feedback;
