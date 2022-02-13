import React, { useEffect, useState } from 'react';
import '../styles/faq.scss';
import AnimateHeight from 'react-animate-height';
import Section from '../components/Section';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const times = [
  {
    name:     'Hacker Check-In',
    time:     new Date('2022-02-12T14:00:00Z'),
    description: (
      <>
        Due to this year being a hybrid event, 
        check-in will all be done through our Discord server! 
        The mod bot found within the server will send everyone a 
        message around 8 AM with instructions on how to check-in.
      </>
    ),
    duration: 180,
  },
  {
    name:     'Opening ceremony',
    time:     new Date('2022-02-12T17:00:00Z'),
    duration: 60,
  },
  {
    name:     'Hacking begins!',
    time:     new Date('2022-02-12T18:00:00Z'),
    duration: 5,
  },
  {
    name:     'Lunch (In-person)',
    description: 'Slim Chickens will be served in the atrium! Alternatives will be provided to anyone with allergies or dietary restrictions.',
    time:     new Date('2022-02-12T18:15:00Z'),
    duration: 45,
  },
  {
    name:        'Grouping Activity (Activities Room)',
    time:     new Date('2022-02-12T18:15:00Z'),
    duration: 60,
  },
  {
    name:        'Workshop provided by Paycom! (Classroom C or Online)',
    time:     new Date('2022-02-12T19:00:00Z'),
    description: 'Paycom will be talking about an introduction to security programs!',
    duration: 60,
  },
  {
    name:        'Workshop provided by OU AI! (Classroom B or Online)',
    time:     new Date('2022-02-12T20:45:00Z'),
    duration: 60,
  },
  {
    name:        'Tech Interviews Tips w/ Fatima Taj (Discord)',
    time:     new Date('2022-02-12T20:45:00Z'),
    duration: 60,
  },
  {
    name:        'Workshop provided by Baker Hughes! (Classroom A or Online)',
    time:     new Date('2022-02-12T22:00:00Z'),
    description: 'Ever wanted to expand your knowledge on how to use the Linux terminal? Well Baker Hughes will be teaching a workshop to help expand your knowledeg and skills on it!',
    duration: 90,
  },
  {
    name:        'Escape Room (Activities Room)',
    time:     new Date('2022-02-12T22:00:00Z'),
    duration: 90,
  },
  {
    name:        'Video Game Music Quiz (Activities Room)',
    description: 'Come to the Forum Room located at DEH 220 to participate in a video game music quiz!',
    time:     new Date('2022-02-12T23:30:00Z'),
    duration: 60,
  },
  {
    name:        'C3 Cyber Security Workshop! (Classroom B or Online)',
    time:     new Date('2022-02-12T23:30:00Z'),
    duration: 60,
  },
  {
    name:        'Dinner (In-person)',
    description: 'Pickleman\'s will be served down in the atruim! Alternatives will be provided to anyone with allergies or dietary restrictions.',
    time:     new Date('2022-02-12T23:45:00Z'),
    duration: 60,
  },
  {
    name:        'Workshop provided by Crimson Robotics (Classroom C or Online)',
    time:     new Date('2022-02-13T01:00:00Z'),
    duration: 90,
  },
  {
    name:        'MLH Bob Ross (Discord)',
    description: 'In this activity you will be following along a Bob Ross video while using MS paint!',
    time:     new Date('2022-02-13T01:00:00Z'),
    duration: 60,
  },
  {
    name:        'Digital Escape Room (Discord)',
    time:     new Date('2022-02-13T01:30:00Z'),
    duration: 60,
  },
  {
    name:        'Intro to Game Development using Godot by the Game Developer\'s Accociation',
    time:     new Date('2022-02-13T03:00:00Z'),
    duration: 60,
  },
  {
    name:        'Video Game Kahoot (Activities Room)',
    time:     new Date('2022-02-13T04:30:00Z'),
    duration: 60,
  },
  {
    name:        'Breakfast (In-person)',
    description: 'Waffles will be served in the Attrium. Alternatives will be provided to anyone with allergies or dietary restrictions.',
    time:     new Date('2022-02-13T16:00:00Z'),
    duration: 60,
  },
  {
    name:     'Hacking ends / Submissions due!',
    time:     new Date('2022-02-13T18:00:00Z'),
    duration: 5,
  },
  {
    name:     'Project Expo',
    time:     new Date('2022-02-13T19:00:00Z'),
    duration: 5,
  },
  {
    name:     'OU Start Up Workshop (Classroom C)',
    time:     new Date('2022-02-13T20:00:00Z'),
    duration: 5,
  },
  {
    name:     'Closing ceremony',
    time:     new Date('2022-02-13T21:00:00Z'),
    duration: 30,
  },
];

/**
 * Contains all the header needs
 */
const Schedule = () => {
  const [items, setItems] = useState({});
  const [update, setUpdate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setUpdate(new Date()), 10000);
  }, [update]);

  /**
   * Expands Schedule item
   */
  const handleClick = (e) => {
    // Get index of time that was clicked
    const name = e.currentTarget.parentNode.getAttribute('name');
    const timeObj = times.find((val) => val.name === name);
    const index = times.indexOf(timeObj);

    // Making copy of items object
    const obj = JSON.parse(JSON.stringify(items));
    obj[index] = !items[index];
    setItems(obj);
  };

  /**
   * Formats a number to a string with two digits
   * ex: 2 will return 02
   */
  const formatTime = (time) => {
    let m = time.getMinutes();
    m = `0${m}`.slice(-2);
    let dd = 'AM';
    let h = time.getHours();
    if (h >= 12) {
      h -= 12;
      dd = 'PM';
    }
    if (h === 0) {
      h = 12;
    }
    return `${h}:${m} ${dd}`;
  };

  /**
   * Get user's timezone name (ex: CST)
   */
  function getTimezoneName() {
    const today = new Date();
    const short = today.toLocaleDateString(undefined);
    const full = today.toLocaleDateString(undefined, { timeZoneName: 'short' });

    // Trying to remove date from the string in a locale-agnostic way
    const shortIndex = full.indexOf(short);
    if (shortIndex >= 0) {
      const trimmed = full.substring(0, shortIndex)
        + full.substring(shortIndex + short.length);

      return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '');
    }

    return full;
  }

  /**
   * Decides what component to output based on time
   */
  const timeLogic = () => {
    const results = [];
    let days = [];
    const now = new Date();

    // Iterate through all scheduled times
    times.forEach((val, i) => {
      let day;
      let classes = 'item';

      // Setup classes
      if (
        val.time < now
        && now.getTime() < val.duration * 60000 + val.time.getTime()
      ) {
        classes += ' ongoing';
      } else if (val.time < now) {
        classes += ' completed';
      }

      // Check if a day header has been created
      if (!days[val.time.getDay()]) {
        const obj = {};
        obj[val.time.getDay()] = weekdays[val.time.getDay()];
        day = weekdays[val.time.getDay()];
        days = { ...days, ...obj };
      }

      // Push new day header if needed
      if (day) {
        results.push(
          <h3 key={`${val.name}-header`}>
            {day}, {months[val.time.getMonth()]} {val.time.getDate()}
          </h3>,
        );
      }

      // Push schedule item that has no description
      if (!val.description) {
        results.push(
          <div key={`${val.name}-container`} className={classes}>
            <div className="text">
              <p>
                <strong>{formatTime(val.time)} ({getTimezoneName()}) </strong>
                <span>{val.name}</span>
              </p>
            </div>
          </div>,
        );
      } else {
        // Push an expandable schedule item that has a description
        results.push(
          <div
            key={val.name}
            className={`${classes}${items[i] ? ' show' : ''}`}
            name={val.name}
          >
            <button onClick={handleClick}>
              <p>
                <strong>{formatTime(val.time)} ({getTimezoneName()}) </strong>
                <span>{val.name}</span>
              </p>
              <ExpandIcon />
            </button>
            <AnimateHeight height={`${items[i] ? 'auto' : '0%'}`}>
              <div className="answer">
                <p>{val.description}</p>
              </div>
            </AnimateHeight>
          </div>,
        );
      }
    });

    return <div>{results}</div>;
  };

  return (
    <Section>
      <div id="schedule" className="schedule faq">
        <div>
          <h2>Schedule&nbsp;</h2>
        </div>
        <div className="container right">{timeLogic()}</div>
        <p className="note">
          Schedule is updated in real time in your local time zone (
          {getTimezoneName()})
        </p>
      </div>
    </Section>
  );
};

/**
 * Expandable icon
 */
const ExpandIcon = () => (
  <div className="expand-icon">
    <div className="horizontal" />
    <div className="vertical" />
  </div>
);

export default Schedule;
