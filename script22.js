let friends =[
    {
        name:"Mahabia",
        status:"Stranger",
        img:"mahabia img.jpg",
        text:"My beauty isn’t just in the way my looks but in the way my shines with kindness, carries strength in her heart, and walks with confidence, leaving behind a glow that lights up the world around her. ✨💕"
    },
    {
        name:"Ehtesham ullah",
        status:"Stranger",
        img:"ehtesham.jpg",
        text:"Cricket isn't just a game; it's a passion, a battle of skill and willpower, where every run counts, every ball matters, and the spirit of the game teaches patience, perseverance, and the joy of never giving up. 🏏🔥"
    },
    {
        name:"Syed Ashir ",
        status:"Stranger",
        img:"ashir.jpg",
        text:"A web developer is a creator of the digital world, turning ideas into interactive experiences, where every line of code builds bridges between imagination and reality, shaping the future one website at a time. 💻🚀"
    },  
    {
        name:"Bilal Ahemd Waris ",
        status:"Stranger",
        img:"bilal.jpg",
        text:"An English teacher is a guide to the power of words, shaping minds with knowledge, unlocking confidence through language, and inspiring students to express themselves and connect with the world. 📚✨"
    },  
    {
        name:"Sheikh bacha ",
        status:"Stranger",
        img:"hamza.jpg",
        text:"A web developer is an architect of the internet, crafting seamless experiences with code, transforming ideas into reality, and building the digital world where creativity meets technology. 💻🚀"
    },  
];
function print(){
    let clutter = "";
friends.forEach(function(val,index){
    clutter += `<div id="card">
        <img src="${val.img}" alt="">
        <h1>${val.name}</h1>
        <p>${val.text} </p>
            <h2 id=${val.status}>${val.status}</h2>
            <button class =${val.status === "Stranger" ? "blue" :"red" } id=${index}>${val.status === "Stranger" ? "Add Friend" : "Remove Friend"}</button>
       </div> `
})
document.querySelector("#main").innerHTML =clutter;
}
print();

let res = 0;
document.querySelector("#main").addEventListener("click",function(details){
  
    if (friends[details.target.id].status === "Stranger"){
        friends[details.target.id].status ="friends";
        res= 1;
    }
    else{
        friends[details.target.id].status ="Stranger";
        res = 0;
    }

    print();
})