import PropTypes from 'prop-types';
import css from './feedbackStatistics.module.css';

const FeedbackStatistics = ({
  goodTotal,
  neutralTotal,
  badTotal,
  allTotal,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {goodTotal}</li>
      <li className={css.item}>Neutral: {neutralTotal}</li>
      <li className={css.item}>Bad: {badTotal}</li>
      <li className={css.item}>Total: {allTotal}</li>
      <li className={css.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
  goodTotal: PropTypes.number.isRequired,
  neutralTotal: PropTypes.number.isRequired,
  badTotal: PropTypes.number.isRequired,
  allTotal: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
