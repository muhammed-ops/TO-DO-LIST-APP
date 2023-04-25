        let arr = [];
        function Click(){
        let a = document.getElementById('change').value;
        if(a!==''){
        arr.push(a);
        document.getElementById('change').value = '';
        console.log(arr);
        document.getElementById('list').innerHTML =  arr.map((i,inde,arr) => `<ul><li>${i}</li></ul>`).join('');
        }}
        ;

        function Clear(){
            arr=[];
            document.getElementById('list').innerHTML =  arr.map(i =>  `i`);
        };
        