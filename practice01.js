function plus(){

    var startDay=document.getElementById("startday").value;

    var year=Number(startDay.slice(0,4));
    var month=Number(startDay.slice(5,7))-1;
    var day=Number(startDay.slice(8,10));
    
    var today=new Date();
    var startDate=new Date(year, month, day);

    var start, end, finish, left,percent;

    start=String(startDate.getFullYear())+"/"+String(startDate.getMonth()+1)+"/"+String(startDate.getDate());

    $("input[name=mil]:checked").each(function(){
        year+=1;
        day-=1;

        if($(this).val()=="roka"){
            if((month + 6) > 11){
                year+=1;
                month=month-6;
            }
            else{
                month+=6;
            }
        }

        else if($(this).val()=="rokn"){
            if((month + 8) > 11){
                year+=1;
                month=month-4;
            }
            else{
                month+=8;
            }
        }

        else if($(this).val()=="rokaf"){
            if((month + 9) > 11){
                year+=1;
                month=month-3;
            }
            else{
                month+=9;
            }
        }

        var endDate=new Date(year, month, day);

        end=String(endDate.getFullYear())+"/"+String(endDate.getMonth()+1)+"/"+String(endDate.getDate());

        finish=Math.floor((today.getTime()-startDate.getTime())/(60*60*24*1000));

        left=Math.ceil((endDate.getTime()-today.getTime())/(60*60*24*1000));
        
        percent=Number.parseFloat((finish/(finish+left))*100).toFixed(6);
    });

    $("tbody").append("<tr></tr>");
    for(var i=0;i<5;i++){
        $("tbody>tr").last().after("<td></td>");
    } 

    $("td:nth-last-of-type(5)").text(start);
    $("td:nth-last-of-type(4)").text(end);
    $("td:nth-last-of-type(3)").text(finish+"일");
    $("td:nth-last-of-type(2)").text(left+"일");
    $("td:nth-last-of-type(1)").html("<div></div>");
    $("div").last().width(percent*1.6).css("background-color", "gray").text(percent+"%");
} 
