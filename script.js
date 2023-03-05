let time = 20;
let lock = 0;
let index = 0;
st_string = document.getElementById('raw_text').innerText;
div_string = "";
ans_string = "";
setInterval(()=>{
    let el = document.getElementById('timer');
    if(lock && time>=0){
        let text = el.innerText;
        el.innerText="Time:00:"+time;
        if(time<10){
            el.innerText="Time:00:0"+time;
        }
        var x=document.getElementById("myTextarea").value;
        var arr=x.split(" ");
        var y=st_string.split(" ");
        let ws=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==y[i]){
                ws=ws+1;
            }
        }
        ws=Math.floor((ws)/(20-time)*60)+" w/m"
        document.getElementById("result").innerText=ws;
        time=time-1;
    }
},1000);

addEventListener('keydown',(event)=>{
    if(lock){
        setTimeout(()=>{
            console.log(event.key)
            if(event.key=="Backspace" || event.key=="Shift" || event.key=="Ctrl"){
                console.log("Backspace");
            }
            else{
                div_string=div_string.slice(0,div_string.length-1);
                console.log("Inside:",event.key);
                if(event.key=="Enter"){
                    ans_string = ans_string + " ";
                    div_string = div_string + "<br>";
                }
                // if(event.key=="Backspace"){
                //     ans_string = ans_string.slice(0,ans_string.length-1);
                //     div_string = 
                // }
                else{
                    ans_string = ans_string + event.key;
                    if(event.key==st_string[index]){
                        div_string = div_string + '<span class="green">'+event.key+'</span>'
                    }
                    else{
                        div_string = div_string + '<span class="red">'+event.key+'</span>'
                    }
                }

                div_string = div_string + "_";
                index=index+1;
                console.log(div_string,ans_string);
                document.getElementById('user-input').innerHTML=div_string;
            }

        },20);
    }
    lock=1;
})