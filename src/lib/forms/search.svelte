<script>

let result = $state('world');
</script>

<div class="results">
<form class="search-form" action="/search" method="get">
    <input bind:value={result}
        class="search-input"
        type="text" 
        name="query"
        placeholder="Search..." 
        aria-label="Search"
    />
</form>
result
</div>
<style>
.results{
    position:absolute;
    top: 0;
    width: 500px;
    height: 500px;
    background-color: white;
}

 input[type=text] {
       width: 300px;
        padding: 6px;
        border: none;
        font-size: 16px;
        border-radius: 50px; /* Super rounded corners */
    }

.search-input:focus {
  transition: box-shadow 0.3s ease;
  color: black;
}

.search-form {
    display: flex;
  align-items: center;
  border: 2px solid #ccc;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  border: transparent;

}
</style>