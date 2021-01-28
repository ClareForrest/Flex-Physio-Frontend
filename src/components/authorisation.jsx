import 'bootstrap/dist/css/bootstrap.min.css';
import { HeadingSub } from '../styled/main';

export function Authorisation() {
  return(
    <>
      <div class="row justify-content-center">
      <HeadingSub>
        Not a Member? Sign Up {/* put in a link that says "sign up" */}
      </HeadingSub>
      </div>
      <div class="row justify-content-center">
      <span class="border-0">
        <p> Put Login fields here...</p>
        <p>Email and input box</p>  
        <p>Password and input box</p>
        <p>text for testing - should be center aligned</p>
      </span>
      </div>
      <button type="button" class="btn btn-secondary">Login</button>
    </>
  )
}
