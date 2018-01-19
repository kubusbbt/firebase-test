
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD7ALusywZ9jrF7wmfLuOXFLxUNy4_8fUU",
    authDomain: "fir-test-sortable.firebaseapp.com",
    databaseURL: "https://fir-test-sortable.firebaseio.com",
    projectId: "fir-test-sortable",
    storageBucket: "",
    messagingSenderId: "350484940729"
};
firebase.initializeApp(config);

var db = firebase.database().ref('test')

new Vue({
    el: '#app',
	data: {
        input: {},
        tableTmp: [],

        table: {
            left: [],
            right: []
        },

		dragging: true
    },
    mounted: function(){
        this.getData();
    },
    methods: {

        addData: function() {
            this.tableTmp.push(this.input);
            this.input = {};
        },

        removeItem: function(item, table) {
            let index = table.indexOf(item)
            table.splice(index, 1)
            this.saveData()
        },

        saveData: function() {

            // firebase.database().ref('clients/2').set({
            //     username: 'kuba',
            //     email: 'asda@as.pl'
            // });

            db.set( this.table )

        },

        getData: function() {

            var tableLeft = this.table.left;
            var tableRight = this.table.right;
 
            db.once('value').then(function(data) {
                data = data.val()

                if( data ){
                    if( data.left ){
                        tableLeft.push( ...data.left );
                    }
                    if( data.right ){
                        tableRight.push( ...data.right );
                    }
                }
            });

        }

    }
})