(function () {

'use strict';
fetch('https://randomuser.me/api/?results=12')
  .then(

    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      } else
      response.json().then(function(data) {
      // check the response data...
      for(let i = 0; i < data.results.length; i++) {
        let user = data.results[i];
        let photo = data.results[i].picture.large;
        let firstName = data.results[i].name.first;
        let lastName = data.results[i].name.last;
        let email = data.results[i].email;
        let street = data.results[i].location.street;
        let city = data.results[i].location.city;
        let state = data.results[i].location.state;
        let postcode = data.results[i].location.postcode;
        let phone = data.results[i].phone;
        let ss = data.results[i].id.value;

        let wrapper = document.getElementById('wrapper');

        let markup =  `
          <div class="person">
            <img src="${photo}"></img>
            <h3>${firstName} ${lastName}</h3>
            <p class="email">${email}</p>
            <p class="street">${street}</p>
            <p class="city">${city} ${state} ${postcode}</p>
            <p class="phone">${phone}</p>
            <p class="ss">${ss}</p>
          </div>
        `
        wrapper.innerHTML += markup;
        }
      }
    )
   }
  )
})();
