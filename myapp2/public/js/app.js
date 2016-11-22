class App{
	constructor(){
		}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
}

class Component extends App{
	constructor(){
		super();
	}

	recipeLayout(){
		this.reRender(`
			  <nav>
    			<div class="nav-wrapper">
     				 <a href="#!" class="brand-logo">   Cartoon App</a>
      					<ul class="right hide-on-med-and-down">
      						<li><a class="waves-effect waves-light btn">List Of Cartoon</a></li>
      						      					</ul>
    			</div>
  			</nav>
  		<br>

  			<div class="row">
      <div class="col s6 push-s5"><span class="flow-text">Shapes:</span></div>
      <div class="col s6 pull-s6"><span class="flow-text">Colors:</span></div>
    </div>
  			<div class="row">
				<div class="input-field col s5 m5">
    				
    				<select class="icons">
      						<option value="" disabled selected>Face</option>
      						<option value="" data-icon="img/a.png" class="circle">example 1</option>
      						<option value="" data-icon="img/b.png" class="circle">example 2</option>
      						<option value="" data-icon="img/c.png" class="circle">example 1</option>
    				</select>
    			<label>Images in select</label>
  				</div>
  			 <div class="input-field col s5 m4">
    			
    			<select class="icons">
      				
      				<option value="" disabled selected>Face</option>
      				<option value="" data-icon="img/a.png" class="left circle">example 1</option>
      				<option value="" data-icon="img/b.png" class="left circle">example 2</option>
      				<option value="" data-icon="img/c.png" class="left circle">example 3</option>
    			
    			</select>
    		<label>Images in select</label>
    		</div>

    	<div class="row">
			<div class="input-field col s5 m5">
    				
    				<select class="icons">
      						<option value="" disabled selected>Eye</option>
      						<option value="" data-icon="img/a.png" class="circle">example 1</option>
      						<option value="" data-icon="img/b.png" class="circle">example 2</option>
      						<option value="" data-icon="img/c.png" class="circle">example 1</option>
    				</select>
    			<label>Images in select</label>
  				</div>
  			 <div class="input-field col s5 m4">
    			
    			<select class="icons">
      				
      				<option value="" disabled selected>Eye</option>
      				<option value="" data-icon="img/a.png" class="left circle">example 1</option>
      				<option value="" data-icon="img/b.png" class="left circle">example 2</option>
      				<option value="" data-icon="img/c.png" class="left circle">example 3</option>
    			
    			</select>
    		<label>Images in select</label>
    		</div>

    		<div class="row">
			<div class="input-field col s5 m5">
    				
    				<select class="icons">
      						<option value="" disabled selected>Nose</option>
      						<option value="" data-icon="img/a.png" class="circle">example 1</option>
      						<option value="" data-icon="img/b.png" class="circle">example 2</option>
      						<option value="" data-icon="img/c.png" class="circle">example 1</option>
    				</select>
    			<label>Images in select</label>
  				</div>
  			 <div class="input-field col s5 m4">
    			
    			<select class="icons">
      				
      				<option value="" disabled selected>Nose</option>
      				<option value="" data-icon="img/a.png" class="left circle">example 1</option>
      				<option value="" data-icon="img/b.png" class="left circle">example 2</option>
      				<option value="" data-icon="img/c.png" class="left circle">example 3</option>
    			
    			</select>
    		<label>Images in select</label>
    		</div>

    		<div class="row">
			<div class="input-field col s5 m5">
    				
    				<select class="icons">
      						<option value="" disabled selected>Mouth</option>
      						<option value="" data-icon="img/a.png" class="circle">example 1</option>
      						<option value="" data-icon="img/b.png" class="circle">example 2</option>
      						<option value="" data-icon="img/c.png" class="circle">example 1</option>
    				</select>
    			<label>Images in select</label>
  				</div>
  			 <div class="input-field col s5 m4">
    			
    			<select class="icons">
      				
      				<option value="" disabled selected>Mouth</option>
      				<option value="" data-icon="img/a.png" class="left circle">example 1</option>
      				<option value="" data-icon="img/b.png" class="left circle">example 2</option>
      				<option value="" data-icon="img/c.png" class="left circle">example 3</option>
    			
    			</select>
    		<label>Images in select</label>
    		</div>

    		<div class="row">
			<div class="input-field col s5 m5">
    				
    				<select class="icons">
      						<option value="" disabled selected>Body</option>
      						<option value="" data-icon="img/a.png" class="circle">example 1</option>
      						<option value="" data-icon="img/b.png" class="circle">example 2</option>
      						<option value="" data-icon="img/c.png" class="circle">example 1</option>
    				</select>
    			<label>Images in select</label>
  				</div>
  			 <div class="input-field col s5 m4">
    			
    			<select class="icons">
      				
      				<option value="" disabled selected>Body</option>
      				<option value="" data-icon="img/a.png" class="left circle">example 1</option>
      				<option value="" data-icon="img/b.png" class="left circle">example 2</option>
      				<option value="" data-icon="img/c.png" class="left circle">example 3</option>
    			
    			</select>
    		<label>Images in select</label>
    		</div>

    		</div>
    		<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s3">
          <textarea id="textarea1" class="materialize-textarea" placeholder="Name Your Cartoon"></textarea>
        </div>
      </div>
    </form>
  </div>

   <button class="btn waves-effect waves-light" type="submit" name="action">Create
    <i class="material-icons right">send</i>
  </button>

  			<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l4 offset-l2 s12">
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            

  		`,document.getElementById("app"));
	}
}
let component = new Component();
component.recipeLayout();
