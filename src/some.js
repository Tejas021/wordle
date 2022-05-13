let a=  [[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}]]

const flatter=(a)=>{
let arr=[]

for(let i =0;i<5;i++)
{
    for(let j=0;j<5;j++){
        a[i][j].content="a"
       arr= arr.concat(a[i][j].content)
    }
}

return arr}

console.log(flatter(a))