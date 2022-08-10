<script >
    export let events;
    events = events[0];

 </script>
 
   
 <div class="events">
     <div class="heading">
         <div class="intro">
          <h3 class="center">Timeline</h3>
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
                 <th scope="col" >Event</th>
                 <th scope="col" >Notes</th>
                 <th scope="col" ></th>
             </tr>
           </thead>
          
           <tbody>
             
             {#each events as event}
             <tr>
                 <td>{event.date}</td>
                 <td>{event.event}</td>
                <td>{event.notes}</td>
                
             </tr>
             {/each}
           </tbody>
         </table>
     </div>
</div>
 
 
 
   <style>
     .events {
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
      /* .button-create {

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
            } */
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