let time = 30;
let lock = 0;
let index = 0;
let set_time = 30;
let st_string = document.getElementById('raw_text').innerText;
let div_string = "\u2592";
document.getElementById('user-input').innerHTML=div_string;

let ans_string = "";
let back_string = st_string;

function replace(str,index,replace){
    return str.slice(0,index)+ replace + str.slice(index+1); 
}
setInterval(()=>{
    let el = document.getElementById('timer');
    if(lock && time>=0){
        el.innerText=+time;
        if(time<10){
            el.innerText=time;
        }
        var arr=ans_string.split(" ");
        var y=st_string.split(" ");
        let ws=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==y[i]){
                ws=ws+1;
            }
        }
        ws=Math.floor((ws)/(set_time-time)*60)+" w/m"
        document.getElementById("result").innerText=ws;
        time=time-1;
    }
},1000);

addEventListener('keydown',(event)=>{
    if(lock){
        setTimeout(()=>{
            console.log(event.key)
            div_string=div_string.slice(0,div_string.length-1);
            if(event.key=="Backspace" || event.key=="Shift" || event.key=="Control" || event.key=="Alt" || event.key=="CapsLock"){
                console.log("Backspace");
                if(event.key=="Backspace" && index>0){
                    ans_string=ans_string.slice(0,ans_string.length-1);
                    div_string=div_string.slice(0,div_string.length-26);
                    back_string=replace(back_string,index-1,st_string[index-1]);
                    index=index-1;
                }
            }
            else{
                console.log("Inside:",event.key);
                if(event.key=="Enter"){
                    ans_string = ans_string + " ";
                    div_string = div_string + '<span class=""><br></span>'
                }
                else{
                    if(index>0 && ans_string[index-1]==event.key && ans_string[index-1]==" ")
                    {
                        div_string = div_string +"\u2592";
                        console.log(div_string,ans_string);
                        console.log(back_string);
                        document.getElementById('user-input').innerHTML=div_string;
                        document.getElementById('raw_text').innerText=back_string;
                        return ;
                    }
                    ans_string = ans_string + event.key;
                    if(event.key==st_string[index]){
                        div_string = div_string + '<span class="gre">'+event.key+'</span>'
                    }
                    else{
                        div_string = div_string + '<span class="red">'+event.key+'</span>'
                    }
                    back_string=replace(back_string,index,"_");
                }
                index=index+1;
            }
            div_string = div_string +"\u2592";
            console.log(div_string,ans_string);
            console.log(back_string);
            document.getElementById('user-input').innerHTML=div_string;
            document.getElementById('raw_text').innerText=back_string;
        },20);
    }
    lock=1;
})


function Set15(){
    console.log("Pressed");
    if(lock==0){
        time=15;
        document.getElementById('timer').innerText=15;
        set_time=15;
    }
}

function Set30(){
    console.log("Pressed");
    if(lock==0){
        time=30;
        document.getElementById('timer').innerText=30;
        set_time = 30;
    }
}function Set60(){
    console.log("Pressed");
    if(lock==0){
        time=60;
        document.getElementById('timer').innerText=60;
        set_time = 60;
    }
}