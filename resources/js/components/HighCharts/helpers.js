export default function setData (props) {
    let {data,index} = props;
    var hash={},result=[];

    data.forEach(function(obj){
      var id=obj[index];
      if(hash[id]){
       hash[id].y++;
     }else{
       result.push(hash[id]={
        y:1,
        name: id
      });
     }
   });
    return result;
  }