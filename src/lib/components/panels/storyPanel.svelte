<script>
    // @ts-nocheck
    
    let { title, content, src, srcSet, alt, slug } = $props();
    </script>
 
    <div class="panel -p -m">
      <div class="panel__header">
     <h2 class="panel__title">
          <a href="/{slug}/">{@html title}</a>
        </h2>
      </div>
    <div class="panel_inner">
       <figure>
        <img src={src} srcSet={srcSet} alt={alt}  sizes="(max-width: 768px) 100vw, 768px" />
    </figure>
    <div class="panel__content">
        <div>
          <p>{@html content}</p>
         <p><a class="btn" href="/{slug}">Go to story</a></p> 
        </div>
      </div>
    </div>
    </div>

    <style>

 .panel {
      max-width: 800px;
      background-color: ivory;
      padding: 1em;
      overflow: hidden;
      border-radius: 16px;
    }

    .panel_inner {
    display: flex;
     vertical-align: top;

     align-items: flex-start; /* Ensures text aligns with the top of the image */
    

    }
   
    .panel__header {
    border-bottom: 1px solid #fff;
      width: 100%;
      display: block;
    }

    .panel__content {
      padding-left: 1em;
    }

    figure {
    margin: 0; /* Removes default margin from the figure element */
    display: flex;

}
    .panel__title {
      font-size: 2rem;
      margin: 0;
    }
    
   
     
    .panel__header h2 a {
      color: green;
    }
    
    .panel__header h2 a:hover {
      color: purple;
    }
    


@keyframes wiggle {
   0%, 100% { transform: rotate(0deg); }
   25% { transform: rotate(-5deg); }
   75% { transform: rotate(5deg); }
}



.btn {

    background-color: green;
    color: white;
    padding: 1em;
    border-radius: 6px;
}

.btn:hover {
   color: green;
    background-color: yellow;
}


    </style>
    