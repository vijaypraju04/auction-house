import React from 'react';

const NewAuctionForm = () => {
  return (
    <form>
      <input
        className='title'
        type='text'
        placeholder='Item Title'
        />
      <input
        className='item'
        type='text'
        placeholder='Image Link'
        />
      <input
        classname='description'
        type='text'
        placeholder='Item Description'
        />
      <input
        className='value'
        type='text'
        placeholder='Item Value'
        />
      <button
        type='submit'>
        submit
        </button>

    </form>

  )
}

export default NewAuctionForm
