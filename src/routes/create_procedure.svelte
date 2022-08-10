<script >

    export let procedures;
    export let procedure_name;
    export let procedure_date;
    export let notes;
    export let user_id;


	
	
    function createNew(procedure){
        userIDField = procedure.user_id;
        procedureNameField = procedure.procedure_name;
        notesField = procedure.notes;
        procedureDateField = procedure.procedure_date;
        window.location.replace('./create_procedure');
    }
</script>



<div class="procedures">
    <div class="create">
        <h3>Enter New Clinic procedure</h3>
        <form action="/create_procedure" method="POST">
            <fieldset>
                <input bind:value={user_id} type="hidden" name="user_id" id="userIdField">
                <label for="date">Date</label>
                 <input  bind:value={procedure_date} type="date" name="date" placeholder="Date" id="dateField">
                 <label for="procedure_name">Procedure Name</label>
                 <select  bind:value={procedure_name} name="procedure_name"  id="procedureNameField">
                    <option value="">Select a Procedure</option>
                    <option value="Prostate Biopsy">Prostate Biopsy</option>
                    <option value="Prostatectomy - Open">Prostatectomy - Open</option>
                    <option value="Prostatectomy - Robotic">Prostatectomy - Robotic</option>
                    <option value="Prostatectomy - Salvage">Prostatectomy - Salvage</option>
                    <option value="Radiation">Radiation</option>
                    <option value="Cystoscopy">Cystoscopy</option>
                </select>
                 <label for="procedure_notes">Note</label>
                 <textarea bind:value={notes} name="notes" id="" cols="30" rows="60"></textarea>
                <button class="button-primary" type="submit" >Save Procedure</button>
            </fieldset>
        </form>
    </div>
</div>

<style>
    .procedures {
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
    .right{
        padding: 2rem 4rem 2rem 4rem;
    }
    .button-create {

        background-color: #2e6adb;
        border: 0.1rem solid #2e6adb;
    } 
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
        width: 700px;
        table-layout: auto;
        border-collapse: collapse;
    }
    .table tbody {
        display: block;
        width: 100%;
        overflow: auto;
        height: 400px;
    }
    .table thead tr {
        display: block;

    }
    .table th,
    .table td {
        padding: 5px;
        /* text-align: left; */
        width: 200px;
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
