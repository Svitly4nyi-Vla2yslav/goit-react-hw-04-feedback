
import React, { useState } from 'react'
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import './AppStyle/AppStyle.module.css'

export const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }

  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  const totalFeedback = countTotalFeedback();

  const calculatePositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  }

  const positivePercentage = calculatePositiveFeedbackPercentage();
  
  return (
    <div
      className="App"
    >
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title='Statistics'>
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage} />)}
      </Section>

    </div >
  );

};
// static defaultProps = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
//   total: 0,
//   positivePercentage: 0
// }

// static propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired
// }