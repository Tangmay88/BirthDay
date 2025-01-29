/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app-music",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "New Kite",
          artist: "Anda Anunta",
          cover: "./music/img-music/newkite-photo.jpg",
          source: "./music/newkite.m4a",
          url: "https://youtu.be/BvmS1HYFSIU?si=OqmUvm5KZ_nvWN7f",
          favorited: true
        },
        {
          name: "ผมเสียทรง (Uncontrol)",
          artist: "Anda Anunta",
          cover: "./music/img-music/uncontrol-photo.jpg",
          source: "./music/uncontrol.m4a",
          url: "https://youtu.be/356Sks3mC38?si=zpt9u8FNkrNN1lCa",
          favorited: true
        },
        {
          name: "I like me better",
          artist: "Anda Anunta (Cover)",
          cover: "./music/img-music/ilikemebetter-photo.jpg",
          source: "./music/ilikemebetter.m4a",
          url: "https://youtu.be/qJOdUI71-20?si=nRpolDlcQHiFeTPm",
          favorited: true
        },
        {
          name: "First Snow",
          artist: "Anda Anunta (Cover)",
          cover: "./music/img-music/firstsnow-photo.jpg",
          source: "./music/firstsnow.m4a",
          url: "https://youtu.be/Rdd43douIu4?si=97g69nMLlljMbYVI",
          favorited: true
        },
        {
          name: "กีดกัน 如何",
          artist: "Anda Anunta (Cover)",
          cover: "./music/img-music/กีดกัน-photo.jpg",
          source: "./music/กีดกัน.m4a",
          url: "https://youtu.be/kw5j3DgXMxI?si=7vvC6cErlzgttPhk",
          favorited: true
        },
        {
          name: "Unbreakable Love",
          artist: "Anda Anunta (Cover)",
          cover: "./music/img-music/unbreakablelove.jpg",
          source: "./music/unbreakablelove.m4a",
          url: "https://youtu.be/eyutkKkNF04?si=xyf0AEwrdKEGBOYB",
          favorited: true
        },
        {
          name: "Candy Cane",
          artist: "Anda Anunta (Cover)",
          cover: "./music/img-music/candycane-photo.jpg",
          source: "./music/candycane.m4a",
          url: "https://youtu.be/OAAu-rtVy3Q?si=415VF270ZT5RsMV7",
          favorited: true
        },
        {
          name: "Red Bean",
          artist: "Anda Anunta (Cover)",
          cover: "./music/img-music/redbean.jpg",
          source: "./music/redbean.m4a",
          url: "https://youtu.be/hkr1f9Zmwcs?si=A6ToKMthUrB_nZjK",
          favorited: true
        },
        {
          name: "Love Ads",
          artist: "Anda x Flirt",
          cover: "./music/img-music/loveads.jpg",
          source: "./music/loveads.m4a",
          url: "https://youtu.be/Pv0tCKskaAM?si=lS8DOOCwR3wFjTIi",
          favorited: true
        },
        {
          name: "ชอบใช่มะ! (YOU GET LUCKY)",
          artist: "COSMOS",
          cover: "./music/img-music/cosmos.jpg",
          source: "./music/yougetlucky.m4a",
          url: "https://youtu.be/n6NSXXZVkxw?si=C-V1yhp6eTVhgpfw",
          favorited: true
        },
        {
          name: "BABY RUN!",
          artist: "COSMOSSUN",
          cover: "./music/img-music/babyrun.jpg",
          source: "./music/babyrun.mp3",
          url: "https://youtu.be/hAHBulI1VJ4?si=jhio29989h4u4uL2",
          favorited: true
        },
        {
          name: "รักที่แปลว่ารัก (Real Love)",
          artist: "Anda Lookkaew",
          cover: "./music/img-music/reallove.jpg",
          source: "./music/reallove.m4a",
          url: "https://youtu.be/_b3LpCOe1vs?si=ZUyHbMqaMdt58IKo",
          favorited: true
        },
        {
          name: "COMPLETE",
          artist: "PIN ANDA ATOM (Cover)",
          cover: "./music/img-music/complete.jpg",
          source: "./music/complete.m4a",
          url: "https://youtu.be/YZsshNA0m-k?si=ODkzxvLjSNST66sg",
          favorited: true
        },
        {
          name: "โลกที่ไม่มีเธอ",
          artist: "PIN ANDA ATOM Ft. Isbanky (Cover)",
          cover: "./music/img-music/โลกที่ไม่มีเธอ.jpg",
          source: "./music/โลกที่ไม่มีเธอ.m4a",
          url: "https://youtu.be/WbiGivnZ9sQ?si=m8uJMh6gKBPQkO-N",
          favorited: true
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});