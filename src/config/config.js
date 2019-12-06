module.exports = {
	port: process.env.DB_PORT || 9090,
	db: { 
		database: process.env.DB_NAME || 'database-name',  
		user: process.env.DB_USER || 'database-name',      
		password: process.env.DB_PASS || 'database-name',  
		options: {
			dialect: process.env.DIALECT || 'sqlite',      // for example
			host: process.env.HOST || 'localhost', 	       
			storage: './src/data/database-name.sqlite'	   // for example
		}
	}
}
