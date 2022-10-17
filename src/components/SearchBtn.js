import React from 'react'

const SearchBtn = () => {
  return (
    <>

        <div className="container">
          <div className="input-group">
            <input type="text" placeholder='Location' className="form-control" />
            
                <button className='btn btn-light'>Search</button>
            </div>
        </div>
    
    
    </>
  )
}

export default SearchBtn