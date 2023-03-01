let time = 20;
setInterval(()=>{
    let el = document.getElementById('timer');
    if(time>=0){
        let text = el.innerText;
        el.innerText="Time:00:"+time;
        if(time<10){
            el.innerText="Time:00:0"+time;
        }
    }
    time=time-1;
},1000);
setTimeout(()=>{
    var x=document.getElementById("myTextarea").value;
    var arr=x.split(" ");
    var y=st_string.split(" ");
    console.log(arr,y);
    let ws=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==y[i]){
            ws=ws+1;
        }
    }
    ws=ws+" w/m"
    document.getElementById("result").innerText=ws;
},20*1000);

let lock = 0;
st_string = document.getElementById('raw_text').innerText;
addEventListener('keydown',(event)=>{
    if(lock){
        setTimeout(()=>{
            let c_text = document.getElementById("myTextarea").value;
            let user = document.getElementById("user-input");
            let y="";
            let w="";
            let s_string="";
            c_text = c_text.trim();
            for(let i=0;i<c_text.length;i++){
                if(c_text[i]==st_string[i]){
                    y=y+'<span class="green">'+c_text[i]+'</span>'
                }
                else{
                    y=y+'<span class="red">'+c_text[i]+'</span>'
                }
                flag=i;
                w=w+"\u005F"
            }
            w=w+st_string.slice(c_text.length);
            if(event.key=="Enter"){
                y=y+"<br>";
                w=w+"<br>";
            }
            console.log(w);
            document.getElementById("raw_text").innerText=w;
            if(event.key==" ")
                y=y+" ";
            y=y+"\u2591";
            user.innerHTML=y;
        },20);
    }
    lock=1;
})