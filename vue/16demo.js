let app = new Vue({
    el:"#app",
    data:{
        message:"message",
        city:'',
        weatherList:[]
    },
    methods:{
        searchWeather:function (){
            console.log(this.weatherList);
            let that = this;

            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
                .then(
                    res=>{
                        // console.log(res.data.data.forecast);
                        console.log(this.weatherList);
                        that.weatherList = res.data.data.forecast;
                    }
                )

        }
    }
})