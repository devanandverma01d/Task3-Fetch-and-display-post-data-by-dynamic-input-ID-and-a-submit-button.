# API Task -3
Create a React application with the following functionality:

Parent Component:
1. Manage posts, postId, and loading states using useState.
2. Fetch data from https://jsonplaceholder.typicode.com/posts/{postId} on component load or button click.
3. Pass posts, postId, handleInputChange, handleClick, and loading as props to a child component.

Child Component:

1. Render an input field for postId and a button to fetch the post.
2. Display the post title or show a message if postId > 100: "No data available for this post id, please enter post id less than or equal to 100."
3. Show "Loading data..." while fetching.
Use useEffect for the initial fetch and dynamic input handling.
Fetch and display post data by dynamic input ID and a submit button.