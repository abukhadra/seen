[![en](https://raw.githubusercontent.com/abukhadra/Seen/master/images/language.svg)English](https://github.com/abukhadra/Seen/blob/master/README_en.md)

# The Seen programming language SDK

<img width="1600" alt="image" src="https://github.com/abukhadra/seen/assets/987908/ab49f38f-a0cc-414a-a679-a46d2b61a902">



## objectives
- Bilingual programming language ( Arabic and English ).
- Code Generation: transpile to readable Rust source files, html, css as needed.
- Multiplatform.
- Provide tools to work with Arabic and also to translate between Arabic and English.
- The Seen Editor


## Building from source
> **Note**
> The project is still in early development, <br>
> so far testing is only performed on  `macOS Ventura / Apple M1` 


### Dependencies
- Cargo : Seen transpiles to rust, you will need to install rust and cargo , follow the instructions in the following link:
		https://doc.rust-lang.org/cargo/getting-started/installation.html 
- Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Steps
- open a terminal and perform the following steps to clone and build the repository: 
```
    git clone https://github.com/abukhadra/seen.git
    cd seen
```
Run the editor in English
```   
    cargo run -- editor	
```
Run the editor in Arabic
```
    cargo run -- editor --ar	
```
- To create new projects , go to File -> New Project 
- Or try to run the examples provided:   File -> Open Project


## Status
Currently, the code in the repositories is capable of the following:
- Launch the Seen editor. most editors do not support Right to left languages, a small editor is provided which can be launched in either Arabic or English. 
- Running the samples provided in the examples directory.
- Create new projects from templates
  
The project is still in its very early stages and needs lots of work before it becomes fully functional. 
As of now, it is only tested on a Mac M1. 


## Documentation
The following documents will be uploaded soon:
- Tutorial
- The Langauge Design
- Inspirations and Credits 
- Open and Known Issues
- Legal Docs
- Todo
- documentation will be provided in both English and Arabic


## The Language
### Name **س** 
( pronunciation sīn , like "Seen" ) is the twelfth letter of the Arabic alphabet,  the letter س is used in math to indicate unknown values and variables, the equivalent of "x" in English.
 
**Extension** : Files must have the extension : **.seen** or the Arabic extension **.س**

## License
**MIT license**.  

## Related Repositories
- [seen-compiler](https://github.com/abukhadra/seen-compiler)
- [seen-editor](https://github.com/abukhadra/seen-editor)
- [bootstrap-seen-compiler](https://github.com/abukhadra/bootstrap-seen-compiler)
