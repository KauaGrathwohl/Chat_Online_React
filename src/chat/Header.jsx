import React from 'react';

function Header({ title }) {

  return (
    <div className='chat-header'>
      <h2>{title}</h2>
    </div>
  );
}

export default Header;