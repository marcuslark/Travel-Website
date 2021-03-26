(function() {
    document.querySelector('.form').addEventListener('submit',(event) => {
        event.preventDefault()
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let messageObject = {
            name,
            email,
            message
        }
        let messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')): [];
        messages.push(messageObject);
        localStorage.setItem('messages',JSON.stringify(messages));
        let output = `<ul>
        <li>Name: ${messageObject.name}</li>
        <li>Email: ${messageObject.email}</li>
        <li>Message: ${messageObject.message}</li>
        </ul> 
        `;
        document.getElementById('outputMessages').innerHTML += output;
    })
    let output = '<h2>Messages</h2>';
        let messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')): [];
        messages.forEach(messageObject => {
            output += `
            <ul>
            <li>Name: ${messageObject.name}</li>
            <li>Email: ${messageObject.email}</li>
            <li>Message: ${messageObject.message}</li>
            </ul> 
          `;
        });
        document.getElementById('outputMessages').innerHTML = output;
})();