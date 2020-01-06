# AsyncImg

Load images asynchronously in HTML.

[A new, native way of lazing loading](https://css-tricks.com/native-lazy-loading/) is on its way, but not yet supported by every browswer (only Chrome at this point). This "library" is a quick-fix for people who want lazy loading now.

## Usage
Use `async-src` instead of `src` on your images.
```html
<img async-src="/path/to/image.jpg" alt="...">
```

Load the library:
```html
<script src="https://cdn.jsdelivr.net/gh/rickwierenga/AsyncImg@master/asyncimg.js"></script>
```

You probably want to have a fallback for users who have disabled JavaScript in their browswer. This can, of course, be done in the usual way.
```html
<noscript>
  <img src="/path/to/image.jpg" alt="...">
</noscript>
```

This is very important because without this fallback images will not be shown on their devices.

## License

See `LICENSE`.

---
&copy;2020 Rick Wierenga
