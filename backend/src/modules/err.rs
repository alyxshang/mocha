/*
Mocha Backend by Alyx Shang.
Licensed under the FSL v1.
*/

/// Importing the standard
/// "Result" enum.
use std::fmt::Result;

/// Importing the standard
/// "Display" trait.
use std::fmt::Display;

/// Importing the standard
/// "Error" trait.
use std::error::Error;

/// Importing the standard
/// "Formatter" trait.
use std::fmt::Formatter;

use actix_web::error;

/// A data structure for
/// storing and handling errors.
#[derive(Clone,Eq,PartialEq, Debug)]
pub struct MochaErr {
    pub details: String
}

/// Implements generic methods.
impl MochaErr {

    /// Implements a generic method to create
    /// a new instance of this data structure.
    pub fn new(details: &str) -> MochaErr {
        MochaErr {
            details: details.to_owned()
        }
    }

    /// Implements a generic method to return
    /// a string representation of this 
    /// data structure.
    pub fn to_string(self) -> String {
        return self.details.to_string();
    }
}

/// Implements the error trait.
impl Error for MochaErr {
    fn description(&self) -> &str {
        &self.details
    }
}

/// Implements the Display trait.
impl Display for MochaErr {
    fn fmt(&self, f: &mut Formatter) -> Result {
        return write!(f,"{}",self.details);
    }
}

impl error::ResponseError for MochaErr {}