<script>
    // @ts-nocheck
    import A from "../../../routes/[...error].svelte"
import "./container.css";
    let { title, content, src, alt, slug,sizes } = $props();
  let medium = sizes?.find(size => size.width === "600") || sizes?.[0] || null;
  let thumb = sizes?.find(size => size.width === "300") || sizes?.[0] || null
    console.log('Sizes data:', sizes);
</script>
 
<div class ="card -p shadow -m">
    <header>
    <h2> <a href="/{slug}/" >{title}</a></h2>   
    </header>
    <section class="-p">
        {#if thumb && medium}
        <figure class="-p-r -p-b">
            <a href="/{slug}/" aria-label="Read more about Seminole tax hike">
           
                <picture>
                    <source 
                      srcset="{thumb.sourceUrl}" 
                      media="(max-width: 480px)"
                      width={thumb.width}
                      height="{thumb.height}"
                      >
                    <source 
                      srcset="{medium.sourceUrl}" 
                      media="(min-width: 481px)"
                     width={medium.width}
                      height="{medium.height}"
                      >
                    <img 
                      src="{medium.sourceUrl}" 
                      alt="{alt}"
                      width={medium.width}
                      height="{medium.height}"
                      >
                  </picture>
            </a>
        </figure>
           {/if}
        <article>
            {@html content}   
        </article>
    </section>
    <footer>
 This is footer
    </footer>
</div>

<style>

.card {
    background-color: ivory;
    container-name: story;
    container-type: inline-size;
   
}


.card section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
 
}




</style>