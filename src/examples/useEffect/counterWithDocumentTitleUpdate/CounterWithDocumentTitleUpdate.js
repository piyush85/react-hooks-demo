import React, { useEffect, useState } from 'react'

function CounterWithDocumentTitleUpdate () {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
// example of subscription
export default CounterWithDocumentTitleUpdate


// function FriendStatusWithCounter(props) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }

//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   }, [props.friend.id]); // second argument to avoid rerenders in case of no value change.
// }