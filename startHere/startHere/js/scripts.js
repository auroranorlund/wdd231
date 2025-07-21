const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} temple</p>
<p>Your phone number: ${myInfo.get('phone')}</p>
<p>Your email: ${myInfo.get('email')}</p>
`