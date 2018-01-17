
new Vue({
    el: '#app',
	data: {
        input: {},
        tableTmp: [],
        tableLeft: [],
        tableRight: [],

		dragging: true
    },
    mounted: function(){

        // this.saveData();
        // this.getData();

    },
    methods: {
        addData: function() {
            this.tableTmp.push(this.input);
            this.input = {};
        },
        removeItem: function(item, table) {
            let index = table.indexOf(item)
            table.splice(index, 1)
        },
        saveData: function() {

            var tableLeft = this.tableLeft;

            var database = firebase.database();
            var ref = database.ref();
            ref.on('value', gotData, errData);
            
            function gotData(data){
                // console.log( data.val() );
                return firebase.database().ref().set( tableLeft );
                // return firebase.database().ref().update( dddd );
            }
            function errData(err){
                console.log(err);
            }

        },
        getData: function() {
            var database = firebase.database();
            var ref = database.ref();
            ref.on('value', gotData, errData);
            
            var tableLeft = this.tableLeft;
            
            function gotData(data){
                // return data.val();
                console.log( data.val() )
            }
            function errData(err){
                console.log(err);
            }
        }
    }
})