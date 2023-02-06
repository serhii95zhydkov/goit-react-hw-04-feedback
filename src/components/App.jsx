import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const feedbacks = { good, neutral, bad };

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
