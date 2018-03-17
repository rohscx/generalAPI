# generalAPI
A general API used to store and retrieve data from a mongo database. The API has been designed to run in a Docker container.
Native ES6 support.

General Commands:
Build the container:
docker run --name generalMongo -d mongo
docker build -t generalapi .
docker run -itd -p 3030:3000 -h node  --name generalAPI  generalapi -s
modify mongoose.connect() to reference docker mongo container generalMongo

docker-compose Commands :
docker-compuse up

Debugging on startup:
docker logs -f $(sudo docker run -itd --rm -p 3030:3000  -h generalapi  --name generalAPI  generalapi -s)

** Requires Mongo DB connection if not run with docker-compose

Generally startup:
docker run -itd -p 3030:3000  -h generalapi  --link generalMongo:mongo --name generalAPI  generalapi -s


Body :
{
	"data":object,
	"status": string = 'pending' OR string = 'ready'

}


{IP ADDRESS}:3030/store
	GET
		Lists all stores
	POST
		Create a store
			Type: POST
			Body: RAW

				Body :
				{
					"data":{"Test123":"okayGo!"},
					"status":"ready"
				}


{IP ADDRESS}:3030/store:storeId
	GET
		Retrieve a single store
	PUT
		Update a single store
	DELETE
		Delete a single store
}
