  
 


const search=document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchStates = async searchText =>{
const res = await fetch('https://raw.githubusercontent.com/awezrebel/profile/main/states.json');
const states = await res.json(); 

let matches = states.filter(state =>{
const regex = new RegExp(`^${searchText}`,'gi');
return state.name.match(regex) || state.abbr.match(regex);
});

if(searchText.length ===0){
matches=[];
matchList.innerHTML='';
}
console.log(matches);
outputHtml(matches);
};

const outputHtml = matches =>{
    if(matches.length > 0){
        const html =matches.map(
        match => `

       
        <h4>${match.name} (${match.abbr})${
        match.capital
        }</h4>
        <small>Lat: ${match.lat} /Long : ${match.long}</small>
         
        `        
        ).join('');

    matchList.innerHTML=html;
    }
}
search.addEventListener('input',() => searchStates(search.value));