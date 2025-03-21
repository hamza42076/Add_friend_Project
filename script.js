let friends =[
    {
        name:"Muhammad Hamza",
        status:"Stranger",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bf05s2gtoLDMXBWVVdP57irDuJ5bMiqmKA&s"
    },
    {
        name:"Ehtesham ullah",
        status:"Stranger",
        img:"https://i.pinimg.com/736x/cf/2b/1d/cf2b1dd0624dd5e24fe0a10590f9eccd.jpg"
    },
    {
        name:"Syed Ashir ",
        status:"Stranger",
        img:"https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw"
    },  
    {
        name:"Bilal Ahemd Waris ",
        status:"Stranger",
        img:"https://c8.alamy.com/comp/2WG4PKM/700-best-attitude-boy-hoodie-style-whatsapp-dp-profile-pic-2024-handsome-boy-images-download-premium-high-resolution-stock-images-on-alamy-2WG4PKM.jpg"
    },  
]
function print(){
    let clutter = "";
friends.forEach(function(val,index){
    clutter += `<div id="card">
        <img src="${val.img}" alt="">
        <h1>${val.name}</h1>
        <p>Great thing take a time empires are not build in a day ,so we should be patience inshaAllah we will acheive everything.</p>
            <h2>${val.status}</h2>
            <button id=${index}>Add Friend</button>
       </div> `
})
document.querySelector("#main").innerHTML = clutter;
}
print();
document.querySelector("#main").addEventListener("click",function(details){
    friends[details.target.id].status ="friends";
    print();    
})

