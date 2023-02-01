// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props

  if (isLoggedIn) {
    return <h1 className="message-text">Welcome User</h1>
  }
  return <h1 className="message-text">Please Login</h1>
}

export default Message
