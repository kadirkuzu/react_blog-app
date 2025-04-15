import { useEffect, useState } from 'react';
import { userService } from '../../../services/user-service';

const UserName = ({ id }: {id: string}) => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    userService.getById(id).then((user) => {
      setName(user?.fullName ?? '');
    });
  }, [id]);

  return <span>{name || '...'}</span>;
};

export default UserName;