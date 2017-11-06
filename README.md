# generalAPI
A general API used to store and retrieve data from a mongo database. The API has been designed to run in a Docker container.

General Commands:
Build the container:
docker build -t generalapi .

Debugging on startup:
docker logs -f $(sudo docker run -itd --rm -p 3030:3000  -h generalapi  --name generalAPI  generalapi -s)

Generally startup:
docker run -itd -p 3030:3000  -h generalapi  --name generalAPI  generalapi -s

How to GET:
10.211.55.6:3030/store

How to POST:
{IP ADDRESS}:3030/store

Type: POST
Body: RAW

Body :
{
	"dataString":"{Test123}",
	"status":"ready"

}
