<template>
<div class="main">

			<header class="header">
				<div class="left"><i></i><b></b><input type="text" placeholder="京东生鲜超级品类日，领券满199减100"></div>
				<div class="center">登录</div>
			</header>
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
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
			<!-- <mt-swipe :show-indicators="false" class="top">
			  <mt-swipe-item><img src="src/components/index/img/01.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/02.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/03.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/04.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/05.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/06.jpg" alt=""></mt-swipe-item>
			</mt-swipe> -->
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
			<!-- <mt-swipe :auto="1000" class="pic">
			  <mt-swipe-item><img src="src/components/index/img/newpeople.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/profiansion.jpg" alt=""></mt-swipe-item>
			</mt-swipe> -->
			<div class="pic">	
				<img src="src/components/index/img/1_07.jpg" alt="">
			</div>
			<div class="kuai">
				<i><img src="src/components/index/img/jd_news.png" alt="">：</i>
				<!-- <mt-swipe :show-indicators="false" class="pic2">
				  <mt-swipe-item><span><b>热</b>京东生鲜领券满199减100</span></mt-swipe-item>
				  <mt-swipe-item><span><b>爆</b>内裤对就换一次？大多数人多久</span></mt-swipe-item>
				  <mt-swipe-item><span><b>抢</b>京东生鲜领券满199减100</span></mt-swipe-item>
				</mt-swipe> -->
				<swiper :options='swiperOption' ref="mySwiper" class="pic2">
					<swiper-slide><span><b>热</b>京东生鲜领券满199减100</span></swiper-slide>
					<swiper-slide><span><b>爆</b>内裤对就换一次？大多数人多久</span></swiper-slide>
					<swiper-slide><span><b>抢</b>京东生鲜领券满199减100</span></swiper-slide>
				</swiper>
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
				<div class="m_mid">
					<div class="nei">
						<dl v-for="(item,index) in datas.arr1" :key="index">
							<dt><img :src="item.img" alt=""></dt>
							<dd>
								<span>￥<b>{{item.price1}}</b></span>
								<span>￥<b>{{item.price2}}</b></span>
							</dd>
						</dl>
					</div>
				</div>
				<div class="m_bot">
					<img src="src/components/index/img/2_03.jpg" alt="">
				</div>
			</div>
			<div class="shan">
				<ul>
					<li>
						<div class="le">
							<span>闪购</span>
							<b>有品有货就1元</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (38).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>发现好货</span>
							<b>发现品质生活</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (39).jpg" alt="">
						</div>
					</li>
				</ul>
			</div>
			<div class="shan2">
				<ul>
					<li>
						<div class="le">
							<span>排行榜</span>
							<b>实时热卖尖货</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (41).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>会买专辑</span>
							<b>美物为你选</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (42).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>新品首发</span>
							<b>三星新品欲松</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (43).jpg" alt="">
						</div>
					</li>
				</ul>
			</div>
			<div class="bei"><img src="src/components/index/img/1 (6).jpg" alt=""></div>
			<div class="sheng">
				<ul>
					<li>
						<div class="le">
							<span>玩3C</span>
							<b>iphone7超低价</b>
							<em>疯狂秒杀中</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (199).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东家电</span>
							<b>美满1500-100</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (200).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东超市</span>
							<b>满99减50</b>
							<em>零食188减100</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (201).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>爱家</span>
							<b>家装节199-100</b>
							<em>家装节全品类</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (202).jpg" alt="">
						</div>
					</li>
				</ul>
			</div>
			<div class="ai">
				<ul>
					<li>
						<div class="le">
							<span>爱宝宝</span>
							<b>爆款低至5折</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (180).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>爱美丽</span>
							<b>美妆0元试用</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (181).jpg" alt="">
						</div>
						<p>美妆趴</p>
					</li>
					<li>
						<div class="le">
							<span>爱吃</span>
							<b>低至9.9包邮</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (182).jpg" alt="">
						</div>
						<p>屯零食</p>
					</li>
					<li>
						<div class="le">
							<span>爱穿搭</span>
							<b>穿着新衣出游</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (183).jpg" alt="">
						</div>
						<p>低至69</p>
					</li>
				</ul>
			</div>
			<mt-swipe :auto="3000" class="banner3">
			  <mt-swipe-item><img src="src/components/index/img/01.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/02.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
			<div class="bei"><img src="src/components/index/img/1 (7).jpg" alt=""></div>
			<div class="sheng">
				<ul>
					<li>
						<div class="le">
							<span>全球尖货</span>
							<b>美妆盛典</b>
							<em>买3免1</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (16).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东精选</span>
							<b>精选优质生活</b>
							<em>品质推荐</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (17).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东体育</span>
							<b>潮流运动</b>
							<em>Adidas超品日</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (18).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>奢品大牌</span>
							<b>钟表6期免息</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (19).jpg" alt="">
						</div>
					</li>
				</ul>
			</div>
			<div class="ai">
				<ul>
					<li>
						<div class="le">
							<span>环球时尚</span>
							<b>低至399</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (20).jpg" alt="">
						</div>
						<p>80元券</p>
					</li>
					<li>
						<div class="le">
							<span>珠宝首饰</span>
							<b>周3 大牌日</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (21).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>设计师</span>
							<b>潮流设计精选</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (22).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>买手甄选</span>
							<b>户外消夏季</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (23).jpg" alt="">
						</div>
						<p>自营</p>
					</li>
				</ul>
			</div>
			<mt-swipe :auto="3000" class="banner3">
			  <mt-swipe-item><img src="src/components/index/img/01.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/02.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
			<div class="bei"><img src="src/components/index/img/1 (4).jpg" alt=""></div>
			<div class="shan2">
				<ul>
					<li>
						<div class="le">
							<span>智能生活</span>
							<b>智能公路车</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (139).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东众筹</span>
							<b>音乐摩托</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (140).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东旅行</span>
							<b>9.9秒杀</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (141).jpg" alt="">
						</div>
					</li>
				</ul>
			</div>
			<div class="ai">
				<ul>
					<li>
						<div class="le">
							<span>白条商城</span>
							<b>电脑12期..</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (149).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>特产扶贫</span>
							<b>洪湖泡藕带</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (150).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>爱车生活</span>
							<b>全场5折起</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (151).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>生活娱乐</span>
							<b>全场5折起</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (152).jpg" alt="">
						</div>
						<p>自营</p>
					</li>
				</ul>
			</div>
			<div class="ai">
				<ul>
					<li>
						<div class="le">
							<span>二手优品</span>
							<b>iPhone秒杀</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (20).jpg" alt="">
						</div>
						<p>分轻重</p>
					</li>
					<li>
						<div class="le">
							<span>大药房</span>
							<b>大牌之降</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (21).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>陪伴宝宝</span>
							<b>1元抢好货</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (22).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东拍卖</span>
							<b>尖货期经典表</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (23).jpg" alt="">
						</div>
						<p>自营</p>
					</li>
				</ul>
			</div>
			<mt-swipe :auto="3000" class="banner3">
			  <mt-swipe-item><img src="src/components/index/img/01.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/02.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
			<div class="bei"><img src="src/components/index/img/1 (5).jpg" alt=""></div>
			<div class="sheng">
				<ul>
					<li>
						<div class="le">
							<span>全球尖货</span>
							<b>美妆盛典</b>
							<em>买3免1</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (16).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东精选</span>
							<b>精选优质生活</b>
							<em>品质推荐</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (17).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东体育</span>
							<b>潮流运动</b>
							<em>Adidas超品日</em>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (18).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>奢品大牌</span>
							<b>钟表6期免息</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (19).jpg" alt="">
						</div>
					</li>
				</ul>
			</div>
			<div class="ai">
				<ul>
					<li>
						<div class="le">
							<span>白条商城</span>
							<b>电脑12期..</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (149).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>特产扶贫</span>
							<b>洪湖泡藕带</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (150).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>爱车生活</span>
							<b>全场5折起</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (151).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>生活娱乐</span>
							<b>全场5折起</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (152).jpg" alt="">
						</div>
						<p>自营</p>
					</li>
				</ul>
			</div>
			<div class="ai">
				<ul>
					<li>
						<div class="le">
							<span>二手优品</span>
							<b>iPhone秒杀</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (20).jpg" alt="">
						</div>
						<p>分轻重</p>
					</li>
					<li>
						<div class="le">
							<span>大药房</span>
							<b>大牌之降</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (21).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>陪伴宝宝</span>
							<b>1元抢好货</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (22).jpg" alt="">
						</div>
					</li>
					<li>
						<div class="le">
							<span>京东拍卖</span>
							<b>尖货期经典表</b>
						</div>
						<div class="rs">
							<img src="src/components/index/img/01 (23).jpg" alt="">
						</div>
						<p>自营</p>
					</li>
				</ul>
			</div>
			<mt-swipe :auto="3000" class="banner3">
			  <mt-swipe-item><img src="src/components/index/img/01.jpg" alt=""></mt-swipe-item>
			  <mt-swipe-item><img src="src/components/index/img/02.jpg" alt=""></mt-swipe-item>
			</mt-swipe>
			<div class="bei"><img src="src/components/index/img/1 (1).jpg" alt=""><p>更多精彩<i class="iconfont icon-xiangyoujiantou"></i></p></div>
			<div class="goods">
				<ul>
					<li>
						<span>休闲食品</span>
						<b>吃货集散中心</b>
						<i><img src="src/components/index/img/111_03.jpg" alt=""></i>
						<em>三只松鼠京东自营旗舰店</em>
					</li>
					<li>
						<span>休闲食品</span>
						<b>吃货集散中心</b>
						<i><img src="src/components/index/img/111_07.jpg" alt=""></i>
						<em>京东Apple产品专营店</em>
					</li>
				</ul>
			</div>
			<div class="bei"><img src="src/components/index/img/1 (2).jpg" alt=""><p>更多精彩<i class="iconfont icon-xiangyoujiantou"></i></p></div>
			<div class="goodss">
				<ul>
					<li>
						<span>小长假出游，2000元</span>
						<b>拍照手机推荐</b>
						<i><img src="src/components/index/img/111_15.jpg" alt=""></i>
					</li>
					<li>
						<span>减轻老婆洗衣服单千元</span>
						<b>内波轮洗衣机推荐</b>
						<i><img src="src/components/index/img/112_13.jpg" alt=""></i>
					</li>
				</ul>
			</div>
			<div class="bei"><img src="src/components/index/img/1 (3).jpg" alt=""><p>更多精彩<i class="iconfont icon-xiangyoujiantou"></i></p></div>
			<div class="chao">
				<ul>
					<li>
						<span>潮搭<i>直播</i></span>
						<b>品牌珠宝厂家清货倒计时</b>
						<em>
							<img src="src/components/index/img/2222_03.jpg" alt="">
						</em>
					</li>
					<li>
						<span>潮搭<i>直播</i></span>
						<b>品牌珠宝厂家清货倒计时</b>
						<em>
							<img src="src/components/index/img/2222_07.jpg" alt="">
						</em>
					</li>
				</ul>
			</div>
			<div class="zhong">
					<span></span>
				<em><i class="iconfont icon-xiafan"></i>为您推荐</em>
			</div>
			
				<div class="foot">
					<dl v-for="(item,index) in datas.arr2">
						<dt><img :src="item.img" alt=""></dt>
						<dd>
							<p>{{item.tex}}</p>
							<b><i>￥</i>{{item.price}}</b>
							<div class="bo"><span>{{item.good}}</span><em>看相似</em></div>
						</dd>
					</dl>
					<div class="clicks">上拉加载继续</div>
				</div>
				<!-- <div slot="top" class="mint-loadmore-top">
				    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
				    <span v-show="topStatus === 'loading'">Loading...</span>
				  </div> -->
			</mt-loadmore>



			<div class="hou">
				<ul class="uls1">
					<li>登录</li>
					<li>注册</li>
					<li>反馈</li>
					<li>回到顶部</li>
				</ul>
				<ul class="uls2">
					<li><i>App</i><span>客户端</span></li>
					<li><i class="iconfont icon-mobilefill"></i><span>触屏版</span></li>
					<li><i class="iconfont icon-computer"></i><span>电脑版</span></li>
				</ul>
				<p>Copyright &copy 2004-2017 京东JD.com 版权所有</p>
			</div>
</div>
</template>
<script>
import $ from "jquery"
//some轮播
import Vue from "vue"
import VueAwesomeSwiper from "vue-awesome-swiper"
require("swiper/dist/css/swiper.css")
Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
export default {
	components: {  
            swiper,  
            swiperSlide  
        },  
	data(){
		return{
			data:[],
			arr:[],
	        swiperOption: {  
                //notNextTick: true,  
                //pagination: '.swiper-pagination',  
                //slidesPerView: 'auto',  
                //centeredSlides: true,  
                //paginationClickable: true,  
                //spaceBetween: 30,  
                autoplay:1000,
                loop:true,
                direction : 'vertical'
            }  

		}
	},
	computed:mapState(["datas"]),
	created(){
	    this.actdata(this)
	},
	methods:{
		...mapActions(["actdata"]),
		loadTop() {
		  //...// load more data
		  this.$refs.loadmore.onTopLoaded();
		},
		loadBottom() {
		  //...// load more data
		  //this.allLoaded = true;// if all data are loaded
		  this.$refs.loadmore.onBottomLoaded();
		  var len=this.datas.arr2.length
		  for(var i = 0;i<len;i++){
		  	this.datas.arr2.push(this.datas.arr2[i])
		  }
		}
	},
	// created(){ 	
	// 	// var _this = this;
	// 	// this.axios.get("/some/path").then(function(result){
	// 	// 	_this.data = result.data.arr1;
	// 	// 	_this.arr = result.data.arr2;
	// 	// },function(error){
	// 	// 	console.log(error)
	// 	// })
		
	// },
	mounted(){

		$(".main").on("scroll",function(){
			if($(this).scrollTop()<=200 && $(this).scrollTop() >=3){
				$(".header").css({"background":"red"},1000)
			}else if($(this).scrollTop() <=0){
				$(".header").css({"background":"transparent"},1000)
			}
		})
	}
}
</script>
<style>

</style>