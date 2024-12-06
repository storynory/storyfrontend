<script>
    // @ts-nocheck
    import A from "../../../routes/[...error].svelte"
import "./container.css";
    let { title, content, src, width, height, alt, slug } = $props();
</script>
 
<div class ="card -p shadow -m">
    <header>
    <h2> <a href="/{slug}" >{title}</a></h2>   
    </header>
    <section class="-p">
        <figure class="-p-r -p-b">
            <a href="/{slug}" >
                <img 
                src="{src}"
                alt="{alt}"
                width="{width}"
                height="{height}"
                />
                
            </a>
        </figure>
           
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