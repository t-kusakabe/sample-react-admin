'use client';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  bio: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
        </div>
      ))}
    </div>
  );
}
