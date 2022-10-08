

let app =new Vue({
    el:"#player",
    data:{
        query:"",
        musicList:[],
        musicUrl:'',
        musicCover:'',
        hotComments:'',
        isPlaying:false,
        isShow:false,
        mvUrl:''
    },
    methods:{
        searchMusic:function (){
            let that =this;
            axios.get("http://localhost:3000/search?keywords="+this.query)
                // axios.get(`http://music.163.com/api/search/get/web?csrf_token=hlpretag=&hlposttag=&s=${this.query}&type=1&offset=0&total=true&limit=20`)
                .then(res=>{
                    that.musicList = res.data.result.songs;
                    console.log(that.musicList);
                },err=>{
                    console.log('err')
                });
        },
        playMusic:function (musicId){
            // console.log(musicId);
            that =this;
            axios.get("http://localhost:3000/song/url?id="+musicId)
                .then(res=>{
                    // console.log(res);
                    // console.log(res.data.data[0].url);
                    that.musicUrl=res.data.data[0].url;
                })

            axios.get("http://localhost:3000/song/detail?ids="+musicId)
                .then(res=>{
                    // console.log(res.data.songs[0].al.picUrl);
                    that.musicCover = res.data.songs[0].al.picUrl;
                })

            axios.get("http://localhost:3000/comment/hot?type=0&id="+musicId)
                .then(res=>{
                    console.log(res)
                    that.hotComments=res.data.hotComments;
                })
        },
        play:function (){
            // console.log("play");
            this.isPlaying =true;
        },
        pause:function (){
            // console.log("pause");
            this.isPlaying = false;
        },
        playMV:function (mvid){
            let that =this;
            axios.get("http://localhost:3000/mv/url?id="+mvid)
                .then(res=>{
                    console.log(res.data.data.url);
                    that.isShow =true;
                    that.mvUrl=res.data.data.url;
                })
        },
        hide:function (){
            this.isShow=false;
        }

    }
})