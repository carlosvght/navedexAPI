<p>I used insomnia to test the API routes, if you want to use it too, just click the button below and all endpoints will be imported into your system</p>
<a href="https://insomnia.rest/run/?label=NavedexAPI&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcarlosvght%2FnavedexAPI%2Fmain%2FInsomniaExport.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
<hr>

<p>If for some reason you don't want to test with insomnia or some problem here are explained:</p>
<h4>User</h4>
<h5>Body:</h5>

```
{
 "email":"user@email.com",
	"password":"xxpassxx"
}	
```

<ul>
  <li>POST - http://localhost:3000/api/v1/user/register</li>
  <li>POST - http://localhost:3000/api/v1/login</li>
  <li>GET - http://localhost:3000/api/v1/user</li>
  <li>GET - http://localhost:3000/api/v1/user/navers</li>
  <li>PUT - http://localhost:3000/api/v1/user/update</li>
  <li>DELETE - http://localhost:3000/api/v1/user/delete</li>
</ul>
<hr>

<h4>Naver</h4>
<h5>Body:</h5>

```
{
 "name":"first_naver",
	"birthdate":"12-05-92",
	"admissionDate":"12-04-2018",
	"jobRole":"Developer"
}	
```

<ul>
  <li>POST - http://localhost:3000/api/v1/naver/create</li>
  <li>GET - http://localhost:3000/api/v1/naver/:id</li>
  <li>GET - http://localhost:3000/api/v1/naver/projects/:id</li>
  <li>PUT - http://localhost:3000/api/v1/naver/update/:id</li>
  <li>DELETE - http://localhost:3000/api/v1/naver/delete/:id</li>
</ul>
<hr>

<h4>Project</h4>
<h5>Body:</h5>

```
{
 "name":"project x"
}	
```

<ul>
  <li>POST - http://localhost:3000/api/v1/project/:naverId/create</li>
  <li>GET - http://localhost:3000/api/v1/project/:id</li>
  <li>PUT - http://localhost:3000/api/v1/project/update/:id</li>
  <li>DELETE - http://localhost:3000/api/v1/project/delete/:id</li>
</ul>

      
      
