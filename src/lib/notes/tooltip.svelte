<button class="tooltip">Hover Me
    <span class="tooltip-text">This is a tooltip</span>
  </button>

<style>
    .tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltip-text {
  visibility: hidden;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>