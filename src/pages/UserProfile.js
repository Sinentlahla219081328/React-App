
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css'; 

const UserProfile = () => {
  const { username } = useParams();  
  const [user, setUser] = useState({ name: '', age: '', email: '' });
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    setLoading(true);

    const fetchUserData = (username) => {
      
      const users = {
        'Sinentlahla': { name: 'Sinentlahla Pindani', age: 25, email: 'sinentlahla.pindani@capaciti.org.za' },
        'Asiphe': { name: 'Asiphe Qampi', age: 24, email: 'asiphe.qampi@capaciti.org.za' },
        'Sisipho': { name: 'Sisipho Kanana', age: 23, email: 'sisipho.kanana@capaciti.org.za' }
      };
      
      const borrowedBooks = {
        'Sinentlahla': [
          { title: '1984', author: 'George Orwell', dueDate: '2024-11-10' },
          { title: 'To Kill a Mockingbird', author: 'Harper Lee', dueDate: '2024-11-20' }
        ],
        'Asiphe': [
          { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', dueDate: '2024-10-15' }
        ],
        'Sisipho': [
          { title: 'Pride and Prejudice', author: 'Jane Austen', dueDate: '2024-12-01' }
        ]
      };

      const fetchedUser = users[username] || { name: 'Unknown User', age: 'N/A', email: 'N/A' };
      const fetchedBooks = borrowedBooks[username] || [];

      setUser(fetchedUser);
      setBorrowedBooks(fetchedBooks);
      setLoading(false);
    };

    fetchUserData(username);
  }, [username]);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h2>Borrowed Books</h2>
      <ul className="book-list">
        {borrowedBooks.length > 0 ? borrowedBooks.map((book, index) => (
          <li key={index} className="book-item">
            <strong>{book.title}</strong> by {book.author} (Due: {book.dueDate})
          </li>
        )) : <p>No books borrowed</p>}
      </ul>
    </div>
  );
};

export default UserProfile;
