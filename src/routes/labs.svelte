<script >
    export let labs;
    export let lab_id;
     export let lab_name;
     export let lab_value;
     export let lab_date;
     export let user_id;
 
     export let labIDField;
     export let userIDField;
     export let labDateField;
     export let labNameField;
     export let labValueField;
     export let notesField;
 
 
     function createNew(lab){
         userIDField = lab.user_id;
         // labDateField = lab.lab_date;
         // labNameField = lab.lab_name;
         // notesField = lab.notes;
         window.location.replace('./create_lab?user_id=' + lab.user_id);
     }
 
     function openEdit(lab){
         labIDField = lab.lab_id;
         userIDField = lab.user_id;
         labDateField = lab.lab_date;
         labNameField = lab.lab_name;
         labValueField = lab.lab_value;
         notesField = lab.notes;
     }
     function modifyAccount(){
         let lab = {
            lab_id: labIDField,
            user_id: userIDField,
            lab_date: labDateField,
            lab_name: labNameField,
            lab_value: labValueField,
            notes: notesField
         };
     }
 
 </script>
 
   
 <div class="labs">
     <div class="heading">
         <div class="intro">
          <h3 class="center">Labs</h3>
          <p>
             Here you can view all of the lab Values you have recorded.
          </p>
          <form>
          <button formaction="/create_lab" class="button-primary">New</button>
         </form>
         </div>
         
     </div>  
       <div class="table">
       <table>
         <colgroup>
             <col style= "width: 8em">
             <col>
             <col>
             <col>
             <col>
         </colgroup>
           <thead>
             <tr>
                 <th scope="col" >Date</th>
                 <th scope="col" >Lab Name</th>
                 <th scope="col" >Lab Value</th>
                 <th scope="col" >Notes</th>
                 <th scope="col" ></th>
             </tr>
           </thead>
          
           <tbody>
             
             {#each labs as lab}
             <tr>
                 <td>{lab.lab_date}</td>
                 <td>{lab.lab_name}</td>
                 <td>{lab.lab_value}</td>
                <td>{lab.notes}</td>
                 <td><button on:click={()=>openEdit(lab)} class="button-primary-edit">Edit</button></td>
                 <!-- <td><button on:click={()=>createNew(lab)} class="button-primary-edit">New</button></td> -->
             </tr>
             {/each}
           </tbody>
         </table>
     </div>
     <div class="edit">
         {#if labNameField}
         <h3>Edit Lab</h3>
         <form action="/labs?_method=PUT" method="POST">
             <fieldset>
                 <input bind:value={labIDField} type="hidden" name="lab_id" id="labIdField">
                 <label for="date">Date</label>
                 <input  bind:value={labDateField} type="text" name="date" placeholder="Date" id="dateField">
                 <label for="lab_name">Lab Name</label>
                 <select  bind:value={labNameField} name="lab_name"  id="labNameField">
                    <option value="">Select a lab</option>
                    <option value="PSA">PSA</option>
                    <option value="freePSA">Free PSA</option>
                </select>
                 <label for="lab_value">Lab Value</label>
                 <input  bind:value={labValueField} type="text" name="lab_value" placeholder="0.00" id="labValueField">
                 <label for="lab_notes">Note</label>
                 <textarea bind:value={notesField} name="notes" id="" cols="30" rows="60"></textarea>
               <button class="button-primary" type="submit" >Save Edited Lab</button>
               <button formaction="/labs?_method=delete" class="button-primary-delete" type="submit">Delete Lab</button>
             </fieldset>
           </form>
         {/if}
     </div>
 </div>
 
 
 
   <style>
     .labs {
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
   /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 300px;
  }
   </style>