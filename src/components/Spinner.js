import React  from "react";

const Spinner = ()=> {
 
    return (
      <div>
        <button className="btn btn-primary justify-content-center" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm "
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    );
  
}
export default Spinner
