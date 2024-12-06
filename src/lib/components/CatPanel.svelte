<script>
    // @ts-nocheck
    
    
    let { title, content,slug,topcat,srcSet,alt} = $props();
    
    </script>
    <div class="panel -p -m">
        <div class="panel__header">
         <a href="/category/{topcat}/{slug}/"> <h2 class="panel__title">{@html title}</h2>
   
        </div>
        <div class="panel__content">
           
         {@html content}
         {#if srcSet }
         <figure>
         <a href="/category/{topcat}/{slug}/">
             <img srcSet="{srcSet}" alt="{title}" />
            </a>
        </figure>
         {/if}
          {@html title}
        
        </div>
       
      </div>
    
    <style>
    


.panel {
  /* background-color: #006400; /* Dark green background color 
  color: #fff; /* White text color */
  border: 4px solid #006400;
  overflow: hidden;
  max-width: 600px;

}



.panel__header {
  border-bottom: 1px solid #fff;
}

.panel__title {
    font-size: 2rem;
  margin: 0;
  padding: 0;
}

.panel__content {

  margin-bottom: 0.5rem;
}
  </style>