## Surplus-toys
Surplus-toys makes it super simple to write single-file 'toy' [Surplus.js](https://github.com/adamhaile/surplus) apps: demos, games, experiments, etc.  

It's old school webdev: no build tools, just a single HTML file.  Hit reload to see changes.

### How to use it

1. Make a single .html file
2. Put your javascript, including Surplus JSX, in a `<script type="text/jsx"></script>` tag in the file.  NOTE THE "text/jsx" PART.
3. At the end of the file, include the surplus-toys script: `<script src="http://unpkg.com/surplus-toys"/>`

Surplus-toys will compile your `"text/jsx"` code into regular javascript and execute it.

### Example

```html
<h1>Hello World with Surplus-toys</h1>
<script type="text/jsx">
var name = S.data("World");
document.body.appendChild(
    <div>
        Your name: <input type="text" value={name()} onChange={e => name(e.target.value)} />
        <br/>
        Hello {name()}!
    </div>
)
</script>
<script src="http://unpkg.com/surplus-toys" />
```
For more examples, see [surplus-demos](https://github.com/adamhaile/surplus-demos).

### FAQ

#### Can I use surplus-toys with multi-file apps?

No.  This is for demos.  If you need multiple files, look into a real build system.  Surplus has plugins for all the major ones.

#### How big apps can I make?

Surplus apps tend to be pretty expressive, i.e. a few lines of code does a lot.  For longer examples, see games like [the Asteroids demo](https://github.com/surplus-demos/asteroids.html), which runs to a few hundred lines.

#### How does it work

Surplus-toys bundles both the surplus runtime and compiler into a single script.  Since you tagged your code with "text/jsx" not "text/javascript", the browser didn't run it on initial load.  Surplus-toys then finds all such script tags, compiles their contents, and inserts new script tags with the generated javascript.