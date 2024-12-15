<script>
    let { title = '', content = '', src = null, alt = '', slug = '', sizes = [] } = $props();

    // Validate sizes and find specific sizes
    let medium = sizes.find(size => Number(size.width) === 600) || null;
    let thumb = sizes.find(size => Number(size.width) === 300) || null;

    // Check if valid image data exists
    const hasValidImage = 
    src &&
    Array.isArray(sizes) &&
    (thumb?.sourceUrl || medium?.sourceUrl);
</script>

<div class="card -p shadow -m">
    <header>
        <h2><a href="/{slug}/">{title}</a></h2>
    </header>
    <section class="-p">
        {#if hasValidImage}
            <figure class="-p-r -p-b">
                <a href="/{slug}/" aria-label="Read more about {title}">
                    <picture>
                        {#if thumb}
                            <source 
                                srcset="{thumb.sourceUrl}" 
                                media="(max-width: 480px)" 
                                width="{thumb.width}" 
                                height="{thumb.height}" 
                            />
                        {/if}
                        {#if medium}
                            <source 
                                srcset="{medium.sourceUrl}" 
                                media="(min-width: 481px)" 
                                width="{medium.width}" 
                                height="{medium.height}" 
                            />
                        {/if}
                        <img 
                            src="{medium?.sourceUrl}" 
                            alt="{alt}" 
                            width="{medium?.width}" 
                            height="{medium?.height}" 
                        />
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
