<?php 
	
	class db {
		//properties
		private $dbhost = "localhost";
		private $dbname  = "to-do-app";
		private $username = 'root';
		private $password = '';

		//connect
		public function connect() {
			$mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";
			$dbConnection  = new PDO($mysql_connect_str, $this->username, $this->password);
			$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $dbConnection ;
		}
	}

 ?>