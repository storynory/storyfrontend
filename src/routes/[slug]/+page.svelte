<!-- src/routes/posts/[slug]/+page.svelte -->
<script>
 import AudioPlayer from '$lib/components/AudioPlayer.svelte';
 let { data } = $props();
  let { post } = data; // Destructure `post` from `data`

</script> 
<div class="page -p">
<main class="j-bk-white -p page-width">
<div class="story">
{#if post}
  <h1 class="-p">{@html post.title}</h1>
  <AudioPlayer mp3 = {post.mp3Url } />
    <p> <a href="{post.mp3Url }">Audio File</a></p> 
  {post.mp3Duration}

  <div>{@html post.filteredContent}</div> <!-- Render content as HTML -->

{:else}
  <p>Post not found.</p>
{/if}
</div>
</main >
</div>

<style>
h1 {
    line-height: 1em;
}

</style>