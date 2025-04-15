import { useEffect, useState } from 'react';
import { userService } from '../../../services/user-service';

const UserName = ({ id }: {id: string}) => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    userService.getById(id).then((user) => {
      if (isMounted && user) setName(user.fullName);
    });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return <span>{name || '...'}</span>;
};

export default UserName;