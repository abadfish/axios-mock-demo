It has good defaults to work with JSON data. Unlike alternatives such as the Fetch API, you often don't need to set your headers. Or perform tedious tasks like converting your request body to a JSON string.
Axios has function names that match any HTTP methods. To perform a GET request, you use the .get() method.
Axios does more with less code. Unlike the Fetch API, you only need one .then() callback to access your requested JSON data.
Axios has better error handling. Axios throws 400 and 500 range errors for you. Unlike the Fetch API, where you have to check the status code and throw the error yourself.
Axios can be used on the server as well as the client. If you are writing a Node.js application, be aware that Axios can also be used in an environment separate from the browser.