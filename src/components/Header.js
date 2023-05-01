import React from 'react'
import { gear } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header className="header">
        <div className="name">
            <Link to='/'> 
                <h1> VeriFy  </h1> 
            </Link>
        </div>

        <div className="admin-panel">
        <Link to='/admin'> 
               <gear />Admin
            </Link>
            
        </div>
        
        
    </header>
  )
}

export default Header