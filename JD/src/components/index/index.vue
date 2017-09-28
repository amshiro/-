<template>
<div class="box">
		
		<!-- <div class="main">
			<mt-swipe :auto="3000" class="banner">
			  <mt-swipe-item><img src="src/components/index/img/1.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/2.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/3.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/4.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/5.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/6.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/7.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/8.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
			<div class="top">
				<img src="src/components/index/img/1_03.jpg" alt="">
			</div>
			<div class="mid">
				<ul>
					<li><i><img src="src/components/index/img/001.png" alt=""></i><span>京东超市</span></li>
					<li><i><img src="src/components/index/img/002.png" alt=""></i><span>全球购</span></li>
					<li><i><img src="src/components/index/img/003.png" alt=""></i><span>服装城</span></li>
					<li><i><img src="src/components/index/img/004.png" alt=""></i><span>京东生鲜</span></li>
					<li><i><img src="src/components/index/img/005.png" alt=""></i><span>京东到家</span></li>
					<li><i><img src="src/components/index/img/006.png" alt=""></i><span>充值缴费</span></li>
					<li><i><img src="src/components/index/img/007.png" alt=""></i><span>领京豆</span></li>
					<li><i><img src="src/components/index/img/008.png" alt=""></i><span>领券</span></li>
					<li><i><img src="src/components/index/img/009.png" alt=""></i><span>惠赚钱</span></li>
					<li><i><img src="src/components/index/img/100.png" alt=""></i><span>物流查询</span></li>
				</ul>
			</div>
			
			<div class="pic">	
				<img src="src/components/index/img/1_07.jpg" alt="">
			</div>
			<div class="kuai">
				<i><img src="src/components/index/img/jd_news.png" alt="">：</i>
				<mt-swipe :show-indicators="false" class="pic2">
				  <mt-swipe-item><span><b>热</b>京东生鲜领券满199减100</span></mt-swipe-item>
				  <mt-swipe-item><span><b>爆</b>内裤对就换一次？大多数人多久</span></mt-swipe-item>
				  <mt-swipe-item><span><b>抢</b>京东生鲜领券满199减100</span></mt-swipe-item>
				</mt-swipe>
				<em>| 更多</em>
			</div>
			<div class="miao">
				<div class="m_top">
					<div class="le">
						<i><img src="src/components/index/img/57fdff2eNb7cd186f.png" alt=""></i>
						<span>20点场</span>
						<div class="hour">
							<b>01</b>:<b>21</b>:<b>49</b>
						</div>
					</div>
					<div class="rs">
						<em>京选尖货轮番秒</em><i class="iconfont icon-xiangyoujiantou"></i>
					</div>
				</div>
			</div>
		</div> -->
		
			<router-view></router-view>
		
		
		<footer class="footer">
			<ul>
				<router-link to="/home" tag="li"><i class="iconfont icon-appreciate"></i><span>推荐</span></router-link>
				<router-link  to="/about" tag="li"><i class="iconfont icon-focus"></i><span>分类</span></router-link>
				<router-link  to="/msg" tag="li"><i class="iconfont icon-search_light"></i><span>发现</span></router-link>
				<router-link  to="/car" tag="li"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
				<router-link  to="/me" tag="li"><i class="iconfont icon-my_light"></i><span>我的</span></router-link>
			</ul>
		</footer>
</div>

</template>
<script>
import Vue from "vue"
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
import {default as jsFn} from "./js/js.js"
jsFn()
import "./css/style.css"

export default {

}
</script>	
<style>

</style>	