const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Thank you for joining the foundation, ${myInfo.get('fname')} ${myInfo.get('lname')}!</p>
<p>Your phone number: ${myInfo.get('phone')}</p>
<p>Your email: ${myInfo.get('email')}</p>
`