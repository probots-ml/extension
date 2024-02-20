
> Open this page at [https://probots-ml.github.io/extension/](https://probots-ml.github.io/extension/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/probots-ml/extension** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/probots-ml/extension** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## Block for screen led in line

### Add functionality to turn on leds indivudually but in sequence. 

## Usage

### ``plotAt``

Use the ``plotAt`` to address LEds and turn it on.

```blocks
for(let i = 0; i < 25; i++){
    screenMagic.plotAt(i);
    basic.pause(200);
}
```