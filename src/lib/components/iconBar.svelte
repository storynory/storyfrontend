<script>
    import Apple from  "$lib/components/icons/apple.svelte";
    import Spotify from  "$lib/components/icons/spotify.svelte";
    import YouTube from  "$lib/components/icons/youtube.svelte";
    import Amazon from  "$lib/components/icons/amazon.svelte";
    import Podcast from  "$lib/components/icons/podcast.svelte";
    import Details from "$lib/notes/details.svelte"

 </script>

<div class="icons">
    <div class="page-width flex">
        <div><Apple /></div>
        <div><Spotify /></div>
        <div><YouTube/></div>
        <div><Amazon/></div>
        <div><Podcast /></div>
   
    </div>

</div>

<style>
.icons .flex {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    
}

.icons .flex > div {
    margin: 10px 20px;
    
}
</style>
