import PropTypes from 'prop-types';
import css from './feedbackBlock.module.css';

const FeedbackBlock = ({ children, titie }) => {
  return (
    <div>
      <h2 className={css.title}>{titie}</h2>
      {children}
    </div>
  );
};

export default FeedbackBlock;

FeedbackBlock.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
