import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        timeStamp={entry.timeStamp}
        body={entry.body}
        liked={entry.liked}
        onLike={props.onLike}
      />
    );
  });

  return <main>{chatEntries}</main>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      id: PropTypes.number,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ).isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;