
Vue.component('profile', {
	
	template: '#profile',

	data: function() {
		return {
			i:5,
			r:null,
			large: false,
			match: null,
			offline: true,
			items: ''
		};
	},

  	created: function(){ 
  		this.i = Math.floor(Math.random()*(599)+1);
  		var vm = this;
	    $.getJSON('user_data.json', function(data){
	    	vm.items = data;
	    });
  	},
  	computed: {
  		isOffline: function(){
  			var statusstr = this.items.items[this.i].online_status;
	  		if (statusstr == "OFFLINE"){
	  			return this.offline = true;
	  		}else{
	  			return this.offline = false;
	  		}
	  		console.log(this.offline);
  		},



  	},
	methods:{
		imageLoadOnError: function(){
			var default_avatar = './default.svg';
			this.items.items[this.i].preview_pic.url = default_avatar;

		},
		enlarge: function(){
			if (this.large == false){
				this.large = true;
			}else{
				this.large = false;
			}
		},
		dismiss:function(){
			this.match = false;
			this.i = Math.floor(Math.random()*(599)+1);
		},
		like: function(){
			this.r = Math.floor(Math.random()*(599)+1);
			// this.r = 8;
			if (this.r > 3 * this.i){
				this.match = true;
			}else{
				this.i = Math.floor(Math.random()*(599)+1);
				this.match = false;
			};
			
			
			
		},
		dislike:function(){
			if (this.i == this.items.items.length){
				this.i = 0; 
			}else{
			 ++this.i;	
			}
			

		}
	}

});



