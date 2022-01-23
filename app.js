import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Split from './composition/Split';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

 render () {

return (
   <main className='App'>


   <Split className='left' >

     <nav class="navbar navbar-light bg-light">
<div class="container-fluid">
<a class="navbar-brand">My Notes</a>
 <form class="d-flex">
   <input id="search" class="form-control me-2" type="search" placeholder="Search"></input>
 </form>
</div>

</nav>
     </Split>

   <Split className='right' flexBasis={4}>
   <div className = "hor">
<Split className='left' >
     <ul>
 <li><a class="active" href="#notes">Notes</a></li>
 <li><a href="#reminders">Reminders</a></li>
 <li><a href="#trash">Trash</a></li>
</ul>
</Split>
<Split className='right' flexBasis={4}>
<div class="container my-3" id="container">
  <div class="form-group">
	<textarea id="addNote" class="form-control"></textarea>

</div></div>
</Split></div>
     </Split>

   </main>
   )
}

}


export default App;
