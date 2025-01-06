import { v1 } from 'uuid';
import { useState } from 'react';
import s2 from '../../s1-main/App.module.css';
import GreetingContainer from './GreetingContainer';

export type UserType = {
  _id: string;
  name: string;
};

type SetUsersType = (users: UserType[]) => void;

export const pureAddUserCallback = (name: string, setUsers: SetUsersType, users: UserType[]) => {
  const user = {
    _id: v1(),
    name: name,
  };
  setUsers([...users, user]);
};

const HW3 = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUserCallback = (name: string) => pureAddUserCallback(name, setUsers, users);

  return (
    <div id={'hw3'}>
      <div className={s2.hwTitle}>Homework #3</div>
      {/*для автоматической проверки дз (не менять)*/}

      <div className={s2.hw}>
        <GreetingContainer users={users} addUserCallback={addUserCallback} />
      </div>
    </div>
  );
};

export default HW3;
