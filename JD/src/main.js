import Vue from "vue"
import Router from "vue-router"
import axios from "axios"
import VueAxios from "vue-axios"
import index from "./components/index/index.vue"
import Vuex from "vuex"

import home from "./components/onely/home.vue"
import about from "./components/onely/about.vue"
import msg from "./components/onely/msg.vue"
import car from "./components/onely/car.vue"
import me from "./components/onely/me.vue"
Vue.use(Router)
Vue.use(VueAxios,axios)

// //some轮播
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
Vue.use(VueAwesomeSwiper)

//mint-ui 轮播
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(Vuex)

//上拉加载
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);




var store = new Vuex.Store({
	state:{
		datas:[],
		arr:[]
	},
	actions:{
		actdata({commit},_this){
			_this.axios.get("/some/path").then(function(res){
				
				commit("getdata",res.data)
			})
		}
	},
	mutations:{
		getdata(state,datas){
			state.datas=datas
			// console.log(state.data)
		}
	}
})




var router = new Router({
	//linkActiveClass:"active",
	routes:[
		{
			name:"index",
			path:"/",
			component:index,
			redirect:"home",
			children:[
				{
					name:"home",
					path:"/home",
					component:home
				},
				{
					name:"about",
					path:"/about",
					component:about
				},
				{
					name:"msg",
					path:"/msg",
					component:msg
				},
				{
					name:"car",
					path:"/car",
					component:car
				},
				{
					name:"me",
					path:"/me",
					component:me
				}
			]
			
		}
		
	]
})


new Vue({
	el:"#app",
	// template:"<div class='box'><index></index></div>",
	// components:{
	// 	index:index
	// },
	router,
	store
})
