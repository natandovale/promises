const doSomeThingPromise = () =>
  new Promise((resolve, reject) => { 
   setTimeout(function() {
    resolve('First data');
   }, 1000); 
 });
 
 const doOtherSomeThingPromise = () =>
   new Promise((resolve, reject) => {
        setTimeout(function(){
	   resolve('Second data')
	 }, 1000);  
 });
 
//chamando 2 promises sequencialmente.
 
 doSomeThingPromise()
   .then(data => {
	   console.log(data);
       return doOtherSomeThingPromise()
 .then(data2 => console.log(data2))
 .catch(error => console.log('ops', error));
   });
   
   
//Chamando 2 promises em paralelo.
 
Promise.all([doOtherSomeThingPromise(),doOtherSomeThingPromise()])
.then((data) =>{
	console.log(data);
});