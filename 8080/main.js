
const search=document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchStates = async searchText =>{
const res = await fetch('https://raw.githubusercontent.com/awezrebel/profile/main/teachersdata.json');
const states = await res.json(); 

let matches = states.filter(state =>{
const regex = new RegExp(`^${searchText}`,'gi');
return  state.subject.match(regex);
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
        
        <a  href="http://localhost:8000/?search=${match.subject}"  style="text-decoration: none;"  style="color:black">
        <h4>${match.subject}  
            
            </h4>
        <small>Faculty: ${match.faculty} , Designation : ${match.Designation}</small>
        </a> `    
        ).join('');

    matchList.innerHTML=html;
    }
}
search.addEventListener('input',() => searchStates(search.value));