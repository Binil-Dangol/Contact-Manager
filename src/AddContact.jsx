import React from 'react';

class AddComponent extends React.Component{
  render() {
    return(
      <div className='ui main'>
        <h3>Add Contact</h3>
        <form className='ui form'>

          <div className='field'>
            <label>Name: </label>
            <input type="text" name='name' placeholder='Name'/>
          </div>

          <div className='field'>
            <label>E-mail: </label>
            <input type="text" name='email' placeholder='E-mail'/>
          </div>

          <div className='ui button blue'>Add</div>
        </form>
      </div>
    )
  }
}

export default AddComponent;