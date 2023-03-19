import React, { useState } from 'react'
import '../styles/App.css'

const App = () => {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState()
  const [commentError, setCommentError] = useState()
  const handleRating = (e) => {
    setRating(e.target.value)
  }
  const handleComment = (e) => {
    setComment(e.target.value)
    if (e.target.value.trim().length < 5) {
      setCommentError('Comment must be atleast 5 characters.')
    } else {
      setCommentError('')
    }
  }
  return (
    <div id="main">
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}
            onChange={handleRating}
          />
          <span className="rating">{rating}</span>
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea id="comment" onChange={handleComment} value={comment} />
          <p style={{ color: 'red' }} className="comment-error">
            {commentError}
          </p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
