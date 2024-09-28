<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="readme/dark-banner.svg">
    <source media="(prefers-color-scheme: light)" srcset="readme/light-banner.svg">
    <img alt="The Seen Programming Language - لفة البرمجة س" src="readme/light-banner.svg" width="100%">
  </picture>

  [Website] &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [الموقع]
</div>
<br>
pronunciation sīn , like "Seen" is the twelfth letter of the Arabic alphabet,<br>  
&nbsp;&nbsp;the letter س is used in math to indicate unknown values and variables <br>
&nbsp;&nbsp;the equivalent of "x" in English.

[Website]: https://seenlang.org/
[الموقع]: https://seenlang.org/ar

## objectives
- Bilingual programming language ( Arabic and English )
- Code Generation: transpile to readable rust, javascript, html, css , python and more as needed. 
  <br>&nbsp;&nbsp;when the project matures , generating lower level code such as wasm and llvm might be an option.
- Multiplatform, targeting web, mobile and desktop
- Provide tools to work with Arabic
- Easily switch between Arabic and English
- Development tools, including an editor and a cli

## Status 
The project is still in its very early stages and needs lots of work before it becomes fully functional.<br>
The tools are good enough to run the examples provided in the website.<br><br>
Current focus:
- Compiler
  - importing JS files
  - Calling Seen from JS
  - semantic analyzer
  - Complete the HTML/CSS/JS generation 
- Editor
  - Project Explorer / Multifiles
  - Project Building
  - Package Management
  - Desktop version
- Expirements 
  - Generating Reactive Native 
  - Calling Python,
  - Generating Rust
 
## Documentation
The following will be provided soon in both English and Arabic and published on the official website:
- Tutorial
- The Langauge Design
- Inspirations and Credits 
- Open and Known Issues
- Legal Docs
- Todo

## License
**MIT license**.  

## Related Repositories
- [seen-compiler](https://github.com/abukhadra/seen-compiler)
- [seen-gen-html](https://github.com/abukhadra/seen-gen-html)
- [seen-gen-js](https://github.com/abukhadra/seen-gen-js)
- [seen-editor](https://github.com/abukhadra/seen-editor)
- [seen-playground](https://github.com/abukhadra/seen-playground)