<script >
   export let visits;
   export let visit_id;
    export let doctor_name;
    
    export let visit_date;
    export let notes;
    export let user_id;

    export let visitIDField;
    export let userIDField;
    export let visitDateField;
    export let drNameField;
    export let notesField;


    function createNew(visit){
        userIDField = visit.user_id;
        // visitDateField = visit.visit_date;
        // drNameField = visit.doctor_name;
        // notesField = visit.notes;
        window.location.replace('./create_visit?user_id=' + visit.user_id);
    }

    function openEdit(visit){
        visitIDField = visit.visit_id;
        userIDField = visit.user_id;
        visitDateField = visit.visit_date;
        drNameField = visit.doctor_name;
        notesField = visit.notes;
    }
    function modifyAccount(){
        let visit = {
            visit_id: visitIDField,
            user_id: userIDField,
            visit_date: visitDateField,
            doctor_name: drNameField,
            notes: notesField
        };
    }

</script>

  
<div class="visits">
    <div class="heading">
        <div class="intro">
         <h3 class="center">Clinic Visits</h3>
         <p>
            Here you can view all of the notes you have recorded from your clinic visits.
         </p>
         <form>
         <button formaction="/create_visit" class="button-primary-edit">New</button>
        </form>
        </div>
        <!-- <div class="right">
            <button on:click={() => (toggleModal(Test))} class="button-create">New Interaction</button>
            {#if showModal}
	        <Modal on:click={toggleModal} {modalContent} />
            {/if}
        </div> -->
    </div>  
      <div class="table">
      <table>
        <colgroup>
            <col style= "width: 8em">
            <col>
            <col>
            <col>
 
        </colgroup>
          <thead>
            <tr>
                <th scope="col" >Date</th>
                <th scope="col" >Dr. Name</th>
                <th scope="col" >Notes</th>
                <th scope="col" ></th>

            </tr>
          </thead>
         
          <tbody>
            
            {#each visits as visit}
            <tr>
                <td>{visit.visit_date}</td>
                <td>{visit.doctor_name}</td>
                <td>{visit.notes}</td>
                <td><button on:click={()=>openEdit(visit)} class="button-primary-edit">Edit</button></td>
                <!-- <td><button on:click={()=>createNew(visit)} class="button-primary-edit">New</button></td> -->
            </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div class="edit">
        {#if drNameField}
        <h3>Edit Visit</h3>
        <form action="/visits?_method=PUT" method="POST">
            <fieldset>
                <input bind:value={visitIDField} type="hidden" name="visit_id" id="visitIdField">
                <label for="date">Date</label>
                <input  bind:value={visitDateField} type="text" name="date" placeholder="Date" id="dateField">
                <label for="note">Note</label>
                <textarea bind:value={notesField} name="note" id="" cols="30" rows="60"></textarea>
              <button class="button-primary" type="submit" >Save Edited Notes</button>
              <button formaction="/visits?_method=delete" class="button-primary-delete" type="submit">Delete Notes</button>
            </fieldset>
          </form>
        {/if}
    </div>
</div>



  <style>
    .visits {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: auto;
        margin-top: 2rem;
    }
    .heading {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 2rem;
    }
    .intro{
        padding: 2rem;
        width: 80%;
    }
    /* .right{
        padding: 2rem 4rem 2rem 4rem;
    }
    .button-create {

        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00; 
     }  */
    .button-primary {
        width: 100%;
        background-color: #2e6adb;
        border: 0.1rem solid #2e6adb;
    }
    .button-primary-delete {
        width: 100%;
        background-color: #595959;
        border: 0.1rem solid #595959;
    }
    .button-primary-edit {
        width: 60px;
        height:30px;
        background-color: #2e6adb;
        border: 0.1rem solid #2e6adb;
        padding: 0;
        line-height: 20px;

    }
    .button-primary:hover {
        
        background-color: #5d93f7;
        border: 0.1rem solid #5d93f7;
    }
    .button-primary:active {
        
        background-color: #0f3f99;
        border: 0.1rem solid #0f3f99;
    }
    .table {
        width: 900px;
        table-layout: auto;
        border-collapse: collapse;
    }
    .table tbody {
        /* display: block; */
        width: 100%;
        /* overflow: auto; */
        height: auto;
    }
    .table thead {
        /* display: block; */
        width: auto;

    }
    .table th {
        padding: 3px;
        /* text-align: left; */
        /* width: auto; */
    }
    .table td {
        padding: 3px;
        /* text-align: left; */
        width: auto;
    }
    .edit {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
      margin: 0rem 16rem 2rem;

}
  </style>