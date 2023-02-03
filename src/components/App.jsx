import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = feedback => {
    setFeedbacks(prevState => {
      const value = prevState[feedback];
      return { ...prevState, [feedback]: value + 1 };
    });
  };

  const { good, neutral, bad } = feedbacks;

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = propName => {
    if (!total) {
      return 0;
    }
    const value = feedbacks[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  };

  const goodPercentage = countPositiveFeedbackPercentage('good');

  const options = Object.keys(feedbacks);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={leaveFeedback}
        ></FeedbackOptions>
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={goodPercentage}
          ></Statistics>
        </Section>
      )}
    </div>
  );
};
