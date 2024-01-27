import React, { useState, useEffect, useMemo } from 'react';
import Start from './Components/Start';
import Timer from "./Components/Timer";
import Trivia from "./Components/Trivia";
import './App.css';

const App = () => {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState('$ 0');

  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of product?',
      answers: [
        {
          text: 'Phone',
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: 'Food',
          correct: false,
        },
        {
          text: 'Cosmetic',
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: 'When did the website \'Facebook\' launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: 'What color are aliens typically known to be?',
      answers: [
        {
          text: 'Blue',
          correct: false,
        },
        {
          text: 'Green',
          correct: true,
        },
        {
          text: 'Red',
          correct: false,
        },
        {
          text: 'Yellow',
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: 'Which Shakespeare play features the line "Neither a borrower nor a lender be"?',
      answers: [
        {
          text: 'Hamlet',
          correct: true,
        },
        {
          text: 'Macbeth',
          correct: false,
        },
        {
          text: 'Othello',
          correct: false,
        },
        {
          text: 'The Merchant of Venice',
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: 'Which country flag is not in rectangular shape?',
      answers: [  
        {
          text: 'Greece',
          correct: false,
        },
        {
          text: 'Cambodia',
          correct: false,
        },
        {
          text: 'Nepal',
          correct: true,
        },
        {
          text: 'Ghana',
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: 'What is the smallest country in the world?',
      answers: [
        {
          text: 'Iceland',
          correct: false,
        },
        {
          text: 'Vatican City',
          correct: true,
        },
        {
          text: 'Spain',
          correct: false,
        },
        {
          text: 'Seychelles',
          correct: false,
        },
      ],
    },

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '$ 100' },
        { id: 2, amount: '$ 200' },
        { id: 3, amount: '$ 300' },
        { id: 4, amount: '$ 500' },
        { id: 5, amount: '$ 1.000' },
        { id: 6, amount: '$ 2.000' },
        { id: 7, amount: '$ 4.000' },
        { id: 8, amount: '$ 8.000' },
        { id: 9, amount: '$ 16.000' },
        { id: 10, amount: '$ 32.000' },
        { id: 11, amount: '$ 64.000' },
        { id: 12, amount: '$ 125.000' },
        { id: 13, amount: '$ 250.000' },
        { id: 14, amount: '$ 500.000' },
        { id: 15, amount: '$ 1.000.000' },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className='app'>
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className='main'>
            {timeOut ? (
              <h1 className='endText'>You earned: {earned}</h1>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className='bottom'>
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? 'moneyListItem active'
                      : 'moneyListItem'
                  }
                >
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App; 