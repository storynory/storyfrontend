<div class="tabsContainer">
    <h1 tabindex="-1">Pure CSS Accessible Tabs</h1>
    <p tabindex="-1">The tab component below is accessible via the keyboard and is built with pure HTML and CSS (no JavaScript). Use the left/right or up/down arrow keys to move between the tabs after tabbing into or otherwise focusing the component.</p>
    <div class="tabs">
      <input class="radiotab" name="tabs" tabindex="-1" type="radio" id="tabone" checked="checked">
      <label class="label" for="tabone">Tab One</label>
      <div class="panel" tabindex="-1">
        <h2>Tab One Content</h2>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      </div>
      <input class="radiotab" tabindex="-1" name="tabs" type="radio" id="tabtwo">
      <label class="label" for="tabtwo">Tab Two</label>
      <div class="panel" tabindex="-1">
        <h2>Tab Two Content</h2>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      </div>
      <input class="radiotab" tabindex="-1" name="tabs" type="radio" id="tabthree">
      <label class="label" for="tabthree" >Tab Three</label>
      <div class="panel" tabindex="-1">
        <h2>Tab Three Content</h2>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      </div>
    </div>
    
    <p tabindex="-1">The tab component will switch to a vertical accordion on smaller screens.</p>
</div>
  <style>
    * {
  box-sizing: border-box;
}

*:focus, input:focus + label {
  outline: none;
  box-shadow: inset 0 0 0 5px lightBlue;
}


h1 {
  text-align: center;
  margin-top: 0;
}

h2 {
  margin: 0 0 12px;
  font-size: 30px;
}

p {
  margin: 0 0 20px;
  font-size: 20px;
  line-height: 1.5;
}
.tabsContainer {

    width: 600px;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 20px;
  border-radius: 10px 10px 0 0;
}

.radiotab {
  position: absolute;
  opacity: 0;
}

.label {
  width: 100%;
  padding: 22px 20px;
  background: #e5e5e5;
  cursor: pointer;
  font-weight: bold;
  font-size: 23px;
  color: #7f7f7f;
  transition: background .3s, color .3s;
  border: none;
  border-radius: 0;
  text-align: center;
}

.label:hover {
  background: #d8d8d8;
}

.label:active {
  background: #ccc;  
}

.radiotab:checked + .label {
  background: #fff;
  color: #000;
  border-top: solid 2px #000;
  border-left: solid 2px #000;
  border-right: solid 2px #000;
  border-bottom: none;
}

.panel {
  display: none;
  padding: 20px 30px 30px;
  background: #fff;
  width: 100%;
  border-left: solid 2px #000;
  border-bottom: solid 2px #000;
  border-right: solid 2px #000;
}

.radiotab:checked + .label + .panel {
  display: block;
}

@media (min-width: 600px) {
  .panel {
    order: 99;
  }

  .label {
    width: 33.33%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 2px #000;
  }

}
@media (max-width: 600px) {
  .tabs {
    flex-direction: column;
  }
  
  .label {
    width: 100%;
  }
  
  .panel {
    order: 1;
  }
}

  </style>