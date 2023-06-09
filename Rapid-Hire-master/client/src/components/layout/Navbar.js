import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { logout } from '../../actions/auth'

function Navbar({ auth:{isAuthenticated,isCompanyAuthenticated, loading}, logout }) {

  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">
          <i className='fas fa-user' />{' '} 
          <span className='hide-sm'> Dashboard</span> 
        </Link>
      </li>
      <li>
        <Link to="/posts"> Posts </Link>
      </li>
      <li>
        <Link to="/profiles"> Developers </Link>
      </li>
      <li>
        <Link to="/jobs">Jobs</Link>
      </li>
      <li>
        <a href='#!' onClick={ logout }>
          <i className='fas fa-sign-out-alt' />{' '} 
          <span className='hide-sm' >Logout</span>
        </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li><Link to="/jobs">Jobs</Link></li>
      <li><Link to="/profiles">Developers</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> RAPID HIRE</Link>
      </h1>
      {!loading && (
      <Fragment>
        {isAuthenticated || isCompanyAuthenticated ? authLinks : guestLinks}
      </Fragment>)}
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {logout})(Navbar)
