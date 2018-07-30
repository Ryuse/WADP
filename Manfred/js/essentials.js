var essentialscontainer = document.getElementById("essentials")
var navitems;

var pagename = window.location.pathname; //Gets the pathname
var file = pagename.split("/").pop(); //Gets the filename

if(file == "Home2.html"){
    navitems = '<a class="navbar-brand current" href="#">\
<img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
EcoDose\
</a>\
\
<!-- Collapses navbar contents when screen is smaller -->\
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
aria-expanded="false" aria-label="Toggle navigation">\
\
<span class="navbar-toggler-icon"></span>\
\
</button>\
\
<!-- Navbar contents and links -->\
\
<div class="collapse navbar-collapse" id="navbarText">\
\
<ul class="navbar-nav mr-auto">\
\
    <li class="nav-item">\
        <a href="Map.html" class="nav-link"> Map\
            <span class="sr-only">(current)</span>\
        </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="../Joshua/WADP Trivia.html"> Trivia </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="../Ian/Calendar/Study Planner.html"> Study Planner </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="About.html"> About </a>\
    </li>\
</ul>'
}
else if(file === "Map.html"){
    navitems = '<a class="navbar-brand current" href="Home2.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link active"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="../Joshua/WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="../Ian/Calendar/Study Planner.html"> Study Planner </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="About.html"> About </a>\
        </li>\
    </ul>'

}
else if(file === "About.html"){
    navitems = '<a class="navbar-brand current" href="Home2.html">\
    <img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
    EcoDose\
    </a>\
    \
    <!-- Collapses navbar contents when screen is smaller -->\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
    aria-expanded="false" aria-label="Toggle navigation">\
    \
    <span class="navbar-toggler-icon"></span>\
    \
    </button>\
    \
    <!-- Navbar contents and links -->\
    \
    <div class="collapse navbar-collapse" id="navbarText">\
    \
    <ul class="navbar-nav mr-auto">\
    \
        <li class="nav-item">\
            <a href="Map.html" class="nav-link"> Map\
                <span class="sr-only">(current)</span>\
            </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="../Joshua/WADP Trivia.html"> Trivia </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link" href="../Ian/Calendar/Study Planner.html"> Study Planner </a>\
        </li>\
    \
        <li class="nav-item">\
            <a class="nav-link active" href="About.html"> About </a>\
        </li>\
    </ul>'
}
else{
    navitems = '<a class="navbar-brand current" href="#">\
<img src="../../images/logo.png" height="30" class="d-inline-block align-top" alt=""> \
EcoDose\
</a>\
\
<!-- Collapses navbar contents when screen is smaller -->\
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"\
aria-expanded="false" aria-label="Toggle navigation">\
\
<span class="navbar-toggler-icon"></span>\
\
</button>\
\
<!-- Navbar contents and links -->\
\
<div class="collapse navbar-collapse" id="navbarText">\
\
<ul class="navbar-nav mr-auto">\
\
    <li class="nav-item">\
        <a href="Map.html" class="nav-link"> Map\
            <span class="sr-only">(current)</span>\
        </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="../Joshua/WADP Trivia.html"> Trivia </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="../Ian/Calendar/Study Planner.html"> Study Planner </a>\
    </li>\
\
    <li class="nav-item">\
        <a class="nav-link" href="About.html"> About </a>\
    </li>\
</ul>'
}


var htmlstuff = '<!-- Nav bar (Got this from bootstrap) -->\
\
	<nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top"> \
\
		<!-- Icon and word -->' + navitems + //Gives me the option to choose which page I'm at

			'<ul class="navbar-nav float-right">\
				<li id="loginbutton" data-toggle="modal" data-target="#myModal" onclick="closeincorrect()">\
					Login\
				</li>\
\
				<li id="loggedinusername" onclick="showprofilemenu()">\
\
				</li>\
			</ul>\
\
		</div>\
	</nav>\
\
	<!-- Bootstrap Modal -->\
\
	<div class="modal" id="myModal">\
\
		<div class="modal-dialog">\
\
			<div class="modal-content">\
\
				<!-- Modal Header -->\
\
				<div class="modal-header">\
					<h4 class="modal-title">Login</h4>\
					<button type="button" class="close" data-dismiss="modal">&times;</button>\
				</div>\
\
				<!-- Modal body -->\
\
				<div class="modal-body ">\
\
					<!-- This only shows up when they can\'t log in -->\
					<p class="invalid"> Incorrect Username or Password</p>\
\
					<!-- The form for log in-->\
\
					<form>\
						<div class="form-group">\
							<label for="username1"> Username: </label>\
							<input type="text" placeholder="Enter username" id="username1" class="form-control" onkeydown="checkEnter(event)" required>\
						</div>\
\
						<div class="form-group">\
							<label for="password"> Username: </label>\
							<input type="password" placeholder="Password" class="form-control" id="password" onkeydown="checkEnter(event)" required>\
						</div>\
\
					</form>\
\
					<hr>\
\
					<!-- Logs in -->\
					<button type="button" class="btn btn-primary btn-block" onclick="gologin()"> Log in </button>\
\
					<br>\
\
					<!-- Signs up -->\
					\
					<a href="../Lemuel2/SignUp.html">\
						<button type="button" class="btn btn-primary btn-block">\
                         Sign Up </button>\
					</a>\
					<br>\
					\
					<a href="#"> <p class="text-center">Forgot your password? </p></a>\
\
				</div>\
\
\
			</div>\
		</div>\
\
	</div>\
\
	<!-- Options -->\
\
	<div id="profileoptions">\
		<div id="username">\
			<img src="../../images/logo.png">\
			<p id="name"> placeholder </p>\
		</div>\
		<div id="bottom">\
\
			<a href="profile.html"><div id="profile">\
				<img src="../../images/Profile/no_avatar.jpg">\
				<p>My Profile</p>\
			</div> </a>\
\
			<a href="#"> <div id="mail">\
				<img src="../../images/Profile/Message.png">\
				<p> My Mail </p>\
			</div></a>\
\
			<a href="#"><div id="notification">\
				<img src="../../images/Profile/Bell.png">\
				<p>Notifications </p>\
			</div></a>\
\
			<div id="logout" onclick="logout()">\
				<img src="../../images/Profile/Logout.png">\
				<p>Log out </p>\
			</div>\
\
		</div>\
    </div>'
    
// Back slashes are used to escape line breaks 


essentialscontainer.innerHTML = htmlstuff; //Changes the inside of #essentials to htmlstuff
    
