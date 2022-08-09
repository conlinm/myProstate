<script >

    export let visit;
    export let doctor_name;
    
    export let date;
    export let notes;
    export let user_id


	
	
    function createNew(visit){
        drNameField = visit.doctor_name;
        notesField = visit.notes;
        dateField = visit.visit_date;
        window.location.replace('./create_visit');
    }
</script>



<div class="visits">
    <div class="create">
        <h3>Enter New Clinic Visit</h3>
        <form action="/create_visit" method="POST">
            <fieldset>
                <input bind:value={user_id} type="hidden" name="user_id" id="userIdField">
                <label for="doctor_name">Dr. Name</label>
                <input bind:value={doctor_name} name="doctor_name" id="drNameField">
                <label for="date">Date</label>
                <input  bind:value={date} type="date" name="date" placeholder="Date" id="dateField">
                <label for="notes">Notes</label>
                <textarea bind:value={notes} name="notes" id="" cols="30" rows="60"></textarea>
                <button class="button-primary" type="submit" >Save Clinic Visit</button>
            </fieldset>
        </form>
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
    .right{
        padding: 2rem 4rem 2rem 4rem;
    }
    .button-create {

        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
    } 
    .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
    }
    .button-primary-delete {
        width: 100%;
        background-color: #ff3300;
        border: 0.1rem solid #FF7F00;
    }
    .button-primary-edit {
        width: 60px;
        height:30px;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
        padding: 0;
        line-height: 20px;

    }
    .button-primary:hover {
        
        background-color: #fea347;
        border: 0.1rem solid #fea347;
    }
    .button-primary:active {
        
        background-color: #c16100;
        border: 0.1rem solid #c16100;
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
