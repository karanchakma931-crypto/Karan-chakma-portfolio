PROFILE PHOTO UPDATE
====================
1) Ei zip er "images" folder ta tomar GitHub repo te upload koro (repo root e, index.html er pashe).
   Final path: images/profile.jpg

2) index.html e jekhane "KC" lekha ase (hero section er profile box), ota ei code diye replace koro:

   <img src="images/profile.jpg" alt="Karan Chakma" class="profile-img">

3) CSS e (style.css ba <style> er moddhe) eta add koro:

   .profile-img{
     width:100%;
     height:100%;
     object-fit:cover;
     object-position:center top;
     border-radius:inherit;
     display:block;
   }
