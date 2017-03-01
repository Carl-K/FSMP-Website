function setupFacebook()
{
      		window.fbAsyncInit = function() {

            FB.init({
      		    appId      : 'APP-ID-REMOVED',
      		    xfbml      : true,
      		    version    : 'v2.8'
            });

            FB.AppEvents.logPageView();
   
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected')
                {
                    document.getElementById("fb").innerHTML = "Log out of Facebook".bold();
                }
                else if (response.status === 'not_authorized')
                {
                    document.getElementById("fb").innerHTML = "Authorize Facebook".bold();
                }
                else //unknown
                {
                    document.getElementById("fb").innerHTML = "Log into Facebook".bold();
                }
            });
            
  		};

  		(function(d, s, id){
     			var js, fjs = d.getElementsByTagName(s)[0];
     			if (d.getElementById(id)) {return;}
     			js = d.createElement(s); js.id = id;
     			js.src = "//connect.facebook.net/en_US/sdk.js";
     			fjs.parentNode.insertBefore(js, fjs);
   		}(document, 'script', 'facebook-jssdk'));	

}

function loadFile(event)
{
    var blank = document.getElementById("imageBlank");
    blank.style.display = "none";
    
    var preview = document.getElementById("imagePreview");
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.style.display = "block";
}

function accessPhotoLibraryButtonPressed()
{
    var fileSelector = document.createElement("input");
    fileSelector.setAttribute("type","file");
    fileSelector.setAttribute("onchange", "loadFile(event)")
	fileSelector.click();
    
	return false;
}

function unselectPhotoButtonPressed()
{
    var blank = document.getElementById("imageBlank");
    blank.style.display = "block";

    var preview = document.getElementById("imagePreview");
    preview.src = '';
    preview.style.display = "none";
}

function facebookLogButtonPressed()
{
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected')
        {
            FB.logout(function(logout)
            {
                if (logout.status === 'connected')
                {
                    document.getElementById("fb").innerHTML = "Log out of Facebook".bold();
                }
                else if (logout.status === 'not_authorized')
                {
                    document.getElementById("fb").innerHTML = "Authorize Facebook".bold();
                }
                else //unknown
                {
                    document.getElementById("fb").innerHTML = "Log into Facebook".bold();
                }
            });
        }
        else
        {
            FB.login(function(login)
            {
                if (login.status === 'connected')
                {
                    document.getElementById("fb").innerHTML = "Log out of Facebook".bold();
                }
                else if (login.status === 'not_authorized')
                {
                    document.getElementById("fb").innerHTML = "Authorize Facebook".bold();
                }
                else //unknown
                {
                    document.getElementById("fb").innerHTML = "Log into Facebook".bold();
                }
            }, {scope: 'public_profile,publish_actions'});
        }
    });
}

function facebookPreviewButtonPressed()
{
FB.getLoginStatus(function(response) {
        if (response.status === 'connected')
        {
            FB.ui({
                    method: 'feed',
                    link: 'https://developers.facebook.com/docs/'
                }, function(response){});
            
            /*
            if (isPhotoSelected())
            {
                
            }
            else if (isURLProvided())
            {
                
            }
            else
            {
                alert("Add content to post to Facebook");
            }
            */
        }
        else
        {
            alert("You must log into Facebook before posting");
        }
    });
}

function twitterLogButtonPressed()
{
	alert("Twitter Log Button Pressed");
}

function twitterPreviewButtonPressed()
{
	alert("Twitter Preview Button Pressed");
}

function tumblrLogButtonPressed()
{
	alert("Tumblr Log Button Pressed");
}

function tumblrPreviewButtonPressed()
{
	alert("Tumblr Preview Button Pressed");
}

function isPhotoSelected()
{
    var preview = document.getElementById("imagePreview");
    var src = preview.src;

    if (src != '' && src != window.location.href)
    {
        return true;
    }
    
    return false;
}

function getPhoto()
{
    var preview = document.getElementById("imagePreview");
    var src = preview.src;
    console.log(src);
    return src;
}

function isURLProvided()
{
    var url = document.getElementById("urlBox");
    var val = url.value;
    
    if (val != '')
    {
        return true;
    }
    return false;
}

function getURL()
{
    var url = document.getElementById("urlBox");
    var val = url.value;
    return val;
}

function isMessageProvided()
{
    
}

function getMessage()
{
    
}