let app = new Vue({
    el:"#app",
    data:{
        message:"message",
        city:'',
        weatherList:[]
    },
    methods:{
        initialize:function(){
            axios.get('http://pv.sohu.com/cityjson')
                .then(res=>{
                    console.log(res);
                },err=>{
                    console.log(err);
                })
            },
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

        },
        changeCity:function (city){
            this.city=city;
            this.searchWeather();
        }
    }
})