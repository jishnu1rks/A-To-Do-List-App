<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

//get all users

$app->get('/api/users', function(Request $request, Response $response){
	$sql = "SELECT * from  users ";

	try {
		$db = new db();

		$db = $db->connect();

		$stmt = $db->query($sql);
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($users);
	}
	catch(PDOException $e)
	{
		echo `{"error": {"text": `.$e->getMessage().`}`;
	}
});

// check user login

$app->post('/api/user/login', function(Request $request, Response $response){

	$user=$request->getParsedBody()['username'];
    $pass=$request->getParsedBody()['password'];

	$sql = "SELECT * from  users WHERE username =  '$user' AND password =  '$pass'";
	try {
		$db = new db();

		$db = $db->connect();

		$stmt = $db->query($sql);
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		$userData = json_encode($users);
		echo '{"userData": ' .$userData . '}';
	}
	catch(PDOException $e)
	{
		echo `{"error": {"text": `.$e->getMessage().`}`;
	}
});

//get single user
/*
$app->get('/api/user/login/{user}', function(Request $request, Response $response){

	$user = $request.getAttribute('user');

	$sql = "SELECT * from  users WHERE username =  '$user'";
	try {
		$db = new db();

		$db = $db->connect();

		$stmt = $db->query($sql);
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($users);
	}
	catch(PDOException $e)
	{
		echo `{"error": {"text": `.$e->getMessage().`}`;
	}
});
*/
// sign up  user

$app->post('/api/user/signup', function(Request $request, Response $response){

	$email = $request->getParam('email');
	$name = $request->getParam('name');
	$username = $request->getParam('username');
	$password = $request->getParam('password');

	$sql = "INSERT INTO users (email,name,username,password) VALUES (:email,:name,:username,:password)";

	try {
		$db = new db();

		$db = $db->connect();

		$stmt = $db->prepare($sql);

		$stmt->bindParam(':email',$email);
		$stmt->bindParam(':name',$name);
		$stmt->bindParam(':username',$username);
		$stmt->bindparam(':password',$password);

		$stmt->execute();
		$userData = json_encode($userData);
		echo '{"userData": ' .$userData . '}';
		

	}
	catch(PDOException $e)
	{
		echo `{"error": {"text": `.$e->getMessage().`}`;
	}
});

//get single user
$app->post('/api/todo/add', function(Request $request, Response $response){

	$name = $request->getParam('todo_name');
	$todo_of = $request->getParam('todo_of');

	$sql = "INSERT INTO todos (todo_name,todo_of) VALUES (:name,:todo_of)";

	try {

		$db = new db();

		$db = $db->connect();

		$stmt = $db->prepare($sql);

		$stmt->bindParam(':name',$name);
		$stmt->bindParam(':todo_of',$todo_of);

		$stmt->execute();

		echo '{ "Added": "Done" }';
		

	}
	catch(PDOException $e)
	{
		echo `{"error": {"text": `.$e->getMessage().`}`;
	}
});

//update user
$app->put('/api/todo/update/{id}', function(Request $request, Response $response){
	$id = $request->getAttribute('id');

	$name = $request->getParam('todo_name');
	$todo_of = $request->getParam('todo_of');

	$sql = "UPDATE todos SET todo_name = :name ,todo_of = :todo_of WHERE todo_id = $id";

	try {
		$db = new db();

		$db = $db->connect();

		$stmt = $db->prepare($sql);

		$stmt->bindParam(':name',$name);
		$stmt->bindparam(':todo_of',$todo_of);

		$stmt->execute();

		echo '{"notice": {"text": "Todo Updated"}';
		

	}
	catch(PDOException $e)
	{
		echo `{"error": {"text": `.$e->getMessage().`}`;
	}
});

//update user
$app->delete('/api/todo/delete/{id}', function(Request $request, Response $response){
	$id = $request->getAttribute('id');

	$sql = "DELETE FROM  todos  WHERE todo_id = $id";

	try {
		$db = new db();

		$db = $db->connect();

		$stmt = $db->prepare($sql);


		$stmt->execute();

		echo '{"notice": {"text": "Todo Deleted"}';
		

	}
	catch(PDOException $e)
	{
		echo `{"error": {"text": `.$e->getMessage().`}`;
	}
});