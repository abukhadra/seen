
use std::{
	fs, 
	path::PathBuf,
	process::Child,
};

use clap::{
	Parser,
	Subcommand,
  	CommandFactory
};

use seen_compiler::{
    self,
	lang::{
		Lang,
		compiler,
		syntax_tree::ast::{
			ModElement,
			Fn,
			StructLiteral,
			Expr,
			BlockElement
		}
	}, 
	transl, 
	project::ProjSettings
};

use seen_compiler::project::{
	proj_dir,
	conf,
	src,
	build
};

use seen_compiler::transl::transl::Transl;

use seen_compiler::tool::{
	cargo::*,
	npx::NPX
};

use seen_editor::editor;

//================
//   Cli
//================
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
pub struct Cli {
    #[command(subcommand)]
    pub command: Option<Commands>,
}

impl Cli {
    //---------------------
    //  new()
    //---------------------  	
    pub fn new() -> Self {
        Self::parse()        
    }
    //---------------------
    //  print_help()
    //---------------------    
    pub fn print_help() {
        let _ = Cli::command().print_help();
    }
}

//================
//   Commands
//================
#[derive(Debug)]
#[derive(Subcommand)]
pub enum Commands {
  /// New Seen project, creates the project directory.
  New(New),    	
  /// Initialize the Seen project in the current directory
  Init(Init),    
  /// Transpiles the Seen source to target langauges
  Compile(Compile),
  /// Compile the target source and generate any necessary files
  Build(Build),
  /// Run the program
  Run(Run),
  /// Clean 
  Clean(Clean),  
  /// Update
  Update(Update),
  /// Check
  Check(Check),
  // Launch the UI Seen Editor
  Editor(Editor),
}

//================
//   New
//================
#[derive(Parser,Debug)]
#[command()]
pub struct New {
    /// Set language to Arabic
    #[arg(long)]
    pub ar: bool,

    /// The project name:
    pub name: String,

    /// The project template:
    /// e.g:
    /// 	`web_server`
    pub template: Option<String>,
}

impl New {
    //---------------------
    //  exec()
    //---------------------
	pub fn exec(
		ar: bool,
		name: String,
		path: Option<String>,
		template: Option<String>
	) -> Result<(), String> {
        seen_compiler::util::cli::New::exec(ar, name, None, template);
		Ok(())
	}
}

//================
//   Init
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Init {
    /// Set language to Arabic
    #[arg(long)]
    pub ar: bool,

    /// The project template:
    /// e.g:
    /// 	`web_server`
    pub template: Option<String>,
}

impl Init {
    //---------------------
    //  exec()
    //---------------------	
	pub fn exec(
		ar: bool,
		path: Option<PathBuf>,
		template: Option<String>
	) -> Result<(), String> {
        seen_compiler::util::cli::Init::exec(ar, path, template);
		Ok(())	
	}
}

//================
//   Compile
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Compile {}

impl Compile {
    //---------------------
    //  exec()
    //---------------------		
	pub fn exec(
		settings: &ProjSettings
	) {
        seen_compiler::util::cli::Compile::exec(settings);
	}
}
    
//================
//   Build
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Build {
/*       /*
          // FIXME arabic requires right to left support
          /// ملفات
          #[arg(name="ملفات")]
      */		
      /// Seen source files
      pub paths: Option<Vec<String>>,

      /// Destination directory
      #[arg(short, long)]
      pub output: Option<String>, */
}

impl Build {
    //---------------------
    //  exec()
    //---------------------			
	pub fn exec(
		settings: &ProjSettings
	) -> Option<Child> {
        seen_compiler::util::cli::Build::exec(settings)
	}	
}

//================
//   Run
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Run {}

impl Run {
    //---------------------
    //  exec()
    //---------------------		
	pub fn exec(
		settings: &ProjSettings
	) -> Option<Child> {
        seen_compiler::util::cli::Run::exec(settings)
	}	
}

//================
//   Clean
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Clean {}

//================
//   Update
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Update {}

//================
//   Check
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Check {}


//================
//   Editor
//================
#[derive(Parser,Debug)]
#[command()]
pub struct Editor {
	#[arg(long)]
	/// Set language to Arabic
	pub ar: bool,

	/// Launch the editor and open the project at the specified path
	///	e.g:
	///		`seen editor .` will open the project in the current directory
	pub path: Option<String>,
}

impl Editor {
    //---------------------
    //  exec()
    //---------------------		
	pub fn exec(
		ar: bool,
		path: Option<String>
	) {
        editor::startup(ar, &path)
	}
}
