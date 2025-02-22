import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';

export type MessageType = {
  id: number;
  user: UserType;
  message: UserMessageType;
};

export type UserType = {
  avatar: string;
  name: string;
};

export type UserMessageType = {
  text: string;
  time: string;
};

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: 'Some Name', // можно менять
  },
  message: {
    text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
    time: '22:00', // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar, // можно менять
    name: 'Friend Name', // можно менять
  },
  message: {
    text: 'зеркальное сообщение для тренировки css', // можно менять
    time: '22:00', // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={'hw1'}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
      <br />
      <br />
    </div>
  );
};

export default HW1;
