import { HeadingMain } from '../styled/main';

export function Profile() {
  return(
    <>
    <div>
      <div class="row justify-content-center">
        <HeadingMain>Your Contact Details:</HeadingMain>
      </div>
      <div class="row justify-content-center">
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
          Edit
        </button>
      </div>
      <div class="row justify-content-center">
        <HeadingMain>Your Address Details:</HeadingMain>
      </div>
      <div class="row justify-content-center">
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
          Edit
        </button>
      </div>
      </div>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Your Current Details:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            /*use state to put in the details of either personal or address */
          </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary">Save changes</button>
         </div>
       </div>
     </div>
 </div>
    </>
  )
  }