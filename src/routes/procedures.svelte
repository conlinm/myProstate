<script >
    export let procedures;
    export let procedure_id;
     export let procedure_name;
     export let procedure_date;
     export let user_id;
     export let notes;
 
     export let procedureIDField;
     export let userIDField;
     export let procedureDateField;
     export let procedureNameField;
     export let notesField;
 
 
     function createNew(procedure){
         userIDField = procedure.user_id;
         // procedureDateField = procedure.procedure_date;
         // procedureNameField = procedure.procedure_name;
         // notesField = procedure.notes;
         window.location.replace('./create_procedure?user_id=' + procedure.user_id);
     }
 
     function openEdit(procedure){
         procedureIDField = procedure.procedure_id;
         userIDField = procedure.user_id;
         procedureDateField = procedure.procedure_date;
         procedureNameField = procedure.procedure_name;
         notesField = procedure.notes;
     }
     function modifyAccount(){
         let procedure = {
            procedure_id: procedureIDField,
            user_id: userIDField,
            procedure_date: procedureDateField,
            procedure_name: procedureNameField,
            notes: notesField
         };
     }
 
 </script>
 
   
 <div class="procedures">
     <div class="heading">
         <div class="intro">
          <h3 class="center">Procedures</h3>
          <p>
             These are all of the procedures you have recorded.
          </p>
          <form>
          <button formaction="/create_procedure" class="button-primary">New</button>
         </form>
         </div>
     </div>  
       <div class="table">
       <table>
         <colgroup>
             <col>
             <col>
             <col>
             <col>
             <col>
         </colgroup>
           <thead>
             <tr>
                 <th scope="col" >Date</th>
                 <th scope="col" >Procedure Name</th>
                 <th scope="col" >Notes</th>
                 <th scope="col" ></th>
             </tr>
           </thead>
          
           <tbody>
             
             {#each procedures as procedure}
             <tr>
                 <td>{procedure.procedure_date}</td>
                 <td>{procedure.procedure_name}</td>
                <td>{procedure.notes}</td>
                 <td><button on:click={()=>openEdit(procedure)} class="button-primary-edit">Edit</button></td>
                 <!-- <td><button on:click={()=>createNew(procedure)} class="button-primary-edit">New</button></td> -->
             </tr>
             {/each}
           </tbody>
         </table>
     </div>
     <div class="edit">
         {#if procedureNameField}
         <h3>Edit procedure</h3>
         <form action="/procedures?_method=PUT" method="POST">
             <fieldset>
                 <input bind:value={procedureIDField} type="hidden" name="procedure_id" id="procedureIdField">
                 <label for="date">Date</label>
                 <input  bind:value={procedureDateField} type="text" name="date" placeholder="Date" id="dateField">
                 <label for="procedure_name">procedure Name</label>
                 <select  bind:value={procedureNameField} name="procedure_name"  id="procedureNameField">
                    <option value="">Select a Procedure</option>
                    <option value="Prostate Biopsy">Prostate Biopsy</option>
                    <option value="Prostatectomy - Open">Prostatectomy - Open</option>
                    <option value="Prostatectomy - Robotic">Prostatectomy - Robotic</option>
                    <option value="Prostatectomy - Salvage">Prostatectomy - Salvage</option>
                    <option value="Radiation">Radiation</option>
                    <option value="Cystoscopy">Cystoscopy</option>
                </select>
                 <label for="procedure_notes">Note</label>
                 <textarea bind:value={notesField} name="notes" id="" cols="30" rows="60"></textarea>
               <button class="button-primary" type="submit" >Save Edited Procedure</button>
               <button formaction="/labs?_method=delete" class="button-primary-delete" type="submit">Delete Procedure</button>
             </fieldset>
           </form>
         {/if}
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