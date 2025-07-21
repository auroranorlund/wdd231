const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Membership Application for: ${myInfo.get('fname')} ${myInfo.get('lname')}, ${myInfo.get('o-title')}</p>
<p>Organization Name: ${myInfo.get('o-name')}</p>
<p>Phone number: ${myInfo.get('phone')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Membership Level Selected: ${myInfo.get('membership')}</p>
<p>Date submitted: ${myInfo.get('timestamp')}</p>
`