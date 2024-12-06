<script>
// @ts-nocheck
let { mp3 } = $props();
let audio;
let playclass = $state(0);
let range = $state(0);
range = 0;
 // This will bind to the range input (progress bar)
let dur = $state(0);// This will bind to the duration display
let status = $state("get ready"); // Status text
let lds; // This will bind to the loading spinner element
let currentSeconds = $state(0);
let currentTime = $state(0)

function onRangeChange(event) {
	const percentage = event.target.value / 100;
		const newTime = percentage * audio.duration;
		audio.currentTime = newTime;ç
		currentTime.set(newTime);

	}

function setTime () {
  currentSeconds = audio.currentTime;
  currentTime = HHMMSS(currentSeconds);
  range = parseInt((currentSeconds / audio.duration) * 100)
  
}

function percentComplete(currentSeconds, durationSeconds) {
    return parseInt((currentSeconds / durationSeconds) * 100);
}


	
function HHMMSS(seconds) {
		const hrs = Math.floor(seconds / 3600);
		const mins = Math.floor((seconds % 3600) / 60);
		const secs = Math.floor(seconds % 60);
		return [
			hrs > 0 ? hrs.toString().padStart(2, '0') : null,
			mins.toString().padStart(2, '0'),
			secs.toString().padStart(2, '0')
		].filter(Boolean).join(':');
	}

   

    function onCanPlay() {
        status = "Loading";
    };

    function onCanPlayThrough() {
        status = "Loaded";
    };

	function onLoadedMetadata() {
		// Access the duration once metadata is loaded
		dur = HHMMSS(audio.duration);
	}

    

function play() {
   
    
    if (audio.paused ) {
       playclass="paused";
        audio.play();

    } else {
       playclass="play";
        audio.pause();
    }
}



</script>
 

  

   <figure id="figure" class="player container -p" >

<audio bind:this={audio}  src={mp3} preload="auto" 
        onloadedmetadata={onLoadedMetadata}    
        ontimeupdate={setTime}
        oncanplay={onCanPlay}
        oncanplaythrough={onCanPlayThrough}
        ></audio>
      <div class="playbtn">
         <span id="back" class="wind left">⟲</span>

         <div id="lds" class="lds-ripple">
         </div>

         <button
         onclick={play}
         class="center {playclass}"
         name="audio_player"
         id="play"
         aria-label="Play or pause audio"
       ></button>
         <span id="forward" class="wind right">⟳</span>
      
</div>
      <input class="slider" type="range" id="range" min="0" max="100" value="{range}" oninput={onRangeChange} />
      <label for="seek">seek</label>
      <span class="left" id="time">{currentTime}</span>
      <span   class="right" id="dur">{dur}</span>
      <span>{status}</span>
       <audio id="storyplayer" src=""></audio>
   </figure>
<style>
      figure.player {
         position: relative;
         width: 90%;
         display: block;
         margin: auto;
         background: #5a6886;
         border-radius: 8px;
         position: relative;
         font-size: 16px;
         text-align: center;
         overflow: hidden;
         color: #fff
      }

      .player label {
         position: absolute;
         left: -3000px
      }

      .wind {
         font-size: 32px;
         display: block;
         color: #efd480
      }

      .wind:hover {
         color: #fff
      }

      .left {
         float: left
      }

      .right {
         float: right
      }

      .playbtn {
         width: 100%;
         text-align: center;
         height: 52px
      }

      #range {
         width: 100%
      }

      #play {
         border: 0;
         background: 0 0;
         box-sizing: border-box;
         width: 0;
         height: 48px;
         overflow: hidden;
         border-color: transparent transparent transparent #efd480;
         transition: .1s all ease;
         cursor: pointer;
         border-style: solid;
         border-width: 24px 0 24px 38px
      }

      #play:hover {
         border-color: transparent transparent transparent #fff
      }

      #play.paused {
         border-style: double;
         border-width: 0 0 0 38px
      }

      #play:active {
         border-color: transparent transparent transparent #404040
      }

      button#play:active {
         background-color: #00f
      }

      #time {
         width: 60px;
         text-align: left
      }

      #dur {
         float: right
      }

      #range::-webkit-slider-thumb {
         background: #4caf50;
         cursor: pointer
      }

      

      .slider {
         -webkit-appearance: none;
         appearance: none;
         width: 100%;
         height: 8px;
         background: #efd480;
         outline: 0;
         opacity: .7;
         -webkit-transition: .2s;
         transition: opacity .2s
      }

      .slider:hover {
         opacity: 1
      }

      .slider::-webkit-slider-thumb {
         -webkit-appearance: none;
         appearance: none;
         width: 16px;
         height: 16px;
         border-radius: 100%;
         background: #4caf50;
         cursor: pointer
      }

      .slider::-moz-range-thumb {
         width: 12px;
         height: 12px;
         background: #4caf50;
         cursor: pointer
      }
   </style>