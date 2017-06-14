(function () {

'use strict';

let num = 0;
  let users = [];
  while (num < 12) {
    fetch('https://randomuser.me/api/')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          // check the response data...
          response.json().then(function(data) {
            let user = data.results[0];
            users.push(user);
            let photo = data.results[0].picture.large;
            let firstName = data.results[0].name.first;
            let lastName = data.results[0].name.last;
            let email = data.results[0].email;
            let street = data.results[0].location.street;
            let city = data.results[0].location.city;
            let state = data.results[0].location.state;
            let postcode = data.results[0].location.postcode;
            let phone = data.results[0].phone;
            let ss = data.results[0].id.value;
            console.log(firstName);

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
        )
      }
    )
    num++;
  }
  console.log(users);

    for (let i = 0; i < users.length; i++) {


    }
})();
