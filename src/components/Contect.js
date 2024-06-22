import React from 'react';

const Contect = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Abc'/>
            </div>

            <div>
                <label>Email</label>
                <input type="email" required placeholder='Abc@xyz.com'/>
            </div>

            <div>
                <label>massage</label>
                <input type="text" required placeholder='tell ua about your query.  .  .  .'/>
            </div>

            <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contect;
