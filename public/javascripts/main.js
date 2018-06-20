

  window.fbAsyncInit = function() {
    FB.init({
      appId      : 'process.env.APP_ID',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.10'
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


function statusChangeCallback(response){
  if (response.status === 'connected') {
    console.log('you are logged in');
    showHideElement(true);
    apicall();
  } else {
    console.log('you are not logged in');
    showHideElement(false);
  }
}

function apicall() {
  FB.api('/me?fields=name,email,birthday,location', function(res){
    if(res && !res.error){
      console.log(res);
      buildProfile(res);
    }
  })
}

function buildProfile(user){
  let profile = `
  <h1 class="facebookIcon"><i class="fa fa-facebook-square" aria-hidden="true"></i></h1>
  <h3>${user.name}</h3>
      <ul class="list-group">
          <li class="list-group-item">User ID: ${user.id}</li>
          <li class="list-group-item">Email: ${user.email}</li>
          <li class="list-group-item">Birthday: ${user.birthday}</li>
          <li class="list-group-item">Location: ${user.location.name}</li>
      </ul>`;

  document.getElementById('profile-info').innerHTML = profile;

}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function logout() {
  FB.logout(function(responce){
    showHideElement(false);
  });
}

function showHideElement(isLoggedIn){
  if(isLoggedIn){
    document.getElementById('login').classList.add("d-none");
    document.getElementById('logout').classList.remove("d-none");
    document.getElementById('heading').innerHTML = 'Your Profile Info :';
    document.getElementById('fb-btn').style.display = 'none';
    document.getElementById('profile-info').classList.remove("d-none");
  }else{
    document.getElementById('login').style.display = 'block';

    document.getElementById('heading').innerHTML = 'Please Login to view your accout info';
    document.getElementById('fb-btn').style.display = 'inline-block';

  }
}

  // jQuery
  fetch('../../key/keys_prod.json').then(function(data) {
      console.log(data);
  });
