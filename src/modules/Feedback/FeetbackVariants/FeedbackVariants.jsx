import PropTypes from 'prop-types';
import Button from 'shared/components/Button/Button';
import css from './feedbackVariants.module.css';
const FeedbackVariants = ({ options, leaveFeedback }) => {
  const elements = options.map(name => (
    <p key={name}>
      <Button onClick={() => leaveFeedback(name)} type="button">
        {name}
      </Button>
    </p>
  ));

  return <div className={css.wrapperVariant}>{elements}</div>;
};

export default FeedbackVariants;
FeedbackVariants.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
