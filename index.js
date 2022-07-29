
var searchForm1 = document.querySelector(".search-form-1");
var searchForm2 = document.querySelector(".search-form-2");
var picDivsContainer = document.querySelector('.picDivs-container');
var picsColumns = document.querySelectorAll(".pics-column");

// =======================
// TRENDING
// =======================
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var contentsDatabase = JSON.parse(xhttp.responseText);
        console.log(contentsDatabase);
        picsColumns[0].innerHTML = "";
        picsColumns[1].innerHTML = "";
        picsColumns[2].innerHTML = "";
        picsColumns[3].innerHTML = "";
        var picsContent = [];
        for (photo of contentsDatabase.photos) {
            picsContent.push(`
            <img src="${photo.src.original}" alt="pic">
            <div class="photographerAction">
                <div class="photographer-info">
                    <div class="avatar"></div>
                    <p>${photo.photographer}</p>
                </div>
                <div class="actions">
                    <i class="fas fa-download"></i>
                    <i class="far fa-plus-square"></i>
                    <i class="far fa-heart"></i>
                </div>
            </div>
        `)
        }
        var i = 0;
        var tabletSize = window.matchMedia('screen and (min-width: 900px)')
        var fullSize = window.matchMedia('screen and (min-width: 1800px)')
        for (picContent of picsContent) {
            var picDiv = document.createElement('div')
            picDiv.classList.add('picDiv');
            picDiv.innerHTML = picContent;
            if (fullSize.matches) {
                if (i < 4) {
                    picsColumns[i].appendChild(picDiv);
                    i++;
                } else {
                    i = 0;
                }
            } else if (tabletSize.matches) {
                if (i < 3) {
                    picsColumns[i].appendChild(picDiv);
                    i++;
                } else {
                    i = 0;
                }
            } else {
                if (i < 2) {
                    picsColumns[i].appendChild(picDiv);
                    i++;
                } else {
                    i = 0;
                }
            }
        }
    }
};
var textValue1 = document.querySelector(".search-bar-1").value;
xhttp.open("GET", `https://api.pexels.com/v1/curated`, true);
xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001729fe1bd16a543f7908e7411efc5a6ae")
xhttp.send();

// =======================
// SEARCH IMAGES
// =======================

// SEARCH FORM 1
searchForm1.addEventListener('submit', function(e){
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var contentsDatabase = JSON.parse(xhttp.responseText);
        console.log(contentsDatabase);
           picsColumns[0].innerHTML = "";
           picsColumns[1].innerHTML = "";
           picsColumns[2].innerHTML = "";
           picsColumns[3].innerHTML = "";
        var picsContent = [];
        for(photo of contentsDatabase.photos){
            picsContent.push(`
                <img src="${photo.src.original}" alt="pic">
                <div class="photographerAction">
                    <div class="photographer-info">
                        <div class="avatar"></div>
                        <p>${photo.photographer}</p>
                    </div>
                    <div class="actions">
                        <i class="fas fa-download"></i>
                        <i class="far fa-plus-square"></i>
                        <i class="far fa-heart"></i>
                    </div>
                </div>
            `)
        }
        var i = 0;
        var tabletSize =window.matchMedia('screen and (min-width: 900px)')
        var fullSize = window.matchMedia('screen and (min-width: 1800px)')
        for(picContent of picsContent){
            var picDiv = document.createElement('div')
            picDiv.classList.add('picDiv');
            picDiv.innerHTML = picContent;
                    if (fullSize.matches){
                        if( i < 4 ){
                            picsColumns[i].appendChild(picDiv);
                            i++;
                        }else{
                            i = 0;
                        }
                    } else if (tabletSize.matches){
                        if( i < 3 ){
                            picsColumns[i].appendChild(picDiv);
                            i++;
                        }else{
                            i = 0;
                        }
                    } else {
                        if( i < 2 ){
                            picsColumns[i].appendChild(picDiv);
                            i++;
                        }else{
                            i = 0;
                        }
                    }
        }
        }
    };
    var textValue1 = document.querySelector(".search-bar-1").value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue1}`,true);
    xhttp.setRequestHeader("Authorization","563492ad6f91700001000001729fe1bd16a543f7908e7411efc5a6ae")
    xhttp.send();
})

// SEARCH FORM 2
searchForm2.addEventListener('submit', function(e){
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var contentsDatabase = JSON.parse(xhttp.responseText);
        console.log(contentsDatabase);
           picsColumns[0].innerHTML = "";
           picsColumns[1].innerHTML = "";
           picsColumns[2].innerHTML = "";
           picsColumns[3].innerHTML = "";
        var picsContent = [];
        for(photo of contentsDatabase.photos){
            picsContent.push(`
                <img src="${photo.src.original}" alt="pic">
                <div class="photographerAction">
                    <div class="photographer-info">
                        <div class="avatar"></div>
                        <p>${photo.photographer}</p>
                    </div>
                    <div class="actions">
                        <i class="fas fa-download"></i>
                        <i class="far fa-plus-square"></i>
                        <i class="far fa-heart"></i>
                    </div>
                </div>
            `)
        }
        var i = 0;
        var tabletSize =window.matchMedia('screen and (min-width: 900px)')
        var fullSize = window.matchMedia('screen and (min-width: 1800px)')
        for(picContent of picsContent){
            var picDiv = document.createElement('div')
            picDiv.classList.add('picDiv');
            picDiv.innerHTML = picContent;
                    if (fullSize.matches){
                        if( i < 4 ){
                            picsColumns[i].appendChild(picDiv);
                            i++;
                        }else{
                            i = 0;
                        }
                    } else if (tabletSize.matches){
                        if( i < 3 ){
                            picsColumns[i].appendChild(picDiv);
                            i++;
                        }else{
                            i = 0;
                        }
                    } else {
                        if( i < 2 ){
                            picsColumns[i].appendChild(picDiv);
                            i++;
                        }else{
                            i = 0;
                        }
                    }
        }
        }
    };
    var textValue2 = document.querySelector(".search-bar-2").value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue2}`,true);
    xhttp.setRequestHeader("Authorization","563492ad6f91700001000001729fe1bd16a543f7908e7411efc5a6ae")
    xhttp.send();
})

window.onscroll = function() {
    var nav = document.querySelector('nav');
    var searchBarNav = document.querySelector('.searchBar-nav');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("nav-transparent");
        searchBarNav.style.display = 'block'
    } else {
        nav.classList.remove("nav-transparent");
        searchBarNav.style.display = 'none'
    }
}


function setNewActive(selectedTab){
    for(tab of tabs){
        tab.classList.remove('tab-active');
    }
    selectedTab.classList.add('tab-active');
}
var tabs = document.querySelectorAll('.tab');
for(tab of tabs){
    tab.addEventListener('click',function(e){
        setNewActive(e.currentTarget);
    })
}