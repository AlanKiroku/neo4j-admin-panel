As we traverse down this rabbit hole, just know... I am here to support you! Never fear!

Go ahead and clone the dickens out of this repo:

```git clone https://github.com/AlanKiroku/neo4j-admin-panel.git```

At the base of the rabbit hole you will find 2 folders:
1. backend
2. frontend

Enter on in the **backend** and find...
yet another folder labelled **app** and it's tiny friend, a little file named **Dockerfile**. Dockerfile runs these tings!

Pop on back up and jump on inside the folder named **frontend**. Insder we have:
1. create-react-app shambles and,
2. and the main folder named **src**. src holds the frontend tings but dones't run them. This responsibility is given to **Dockerfile** yet again.

Before you head off to create and spin up your backend docker container, you require another, more powerful docker image, the one to serve you data nom noms!

Simply spin this badass up by running:

```docker run -e NEO4J_dbms_connector_bolt_listen__address=:7688 -e NEO4J_dbms_connector_bolt_advertised__address=:7688 --publish=7475:7474 --publish=7688:7687 --volume=$HOME/neo4j/data/template:/data --volume=$HOME/neo4j/logs/template:/logs neo4j:3.0```

Don't worry about the --publish flags, we are simply redirecting the internally exposed port to a port we prefer!

Commands explained:
1. '-e': send bash commands inside the container to set environment variables
2. '--publish': merely used to redirect the the internally exposed port to a port we prefer
3. '--volume': used to mount a local dir from the host machine to the container

I'm not too keen on this following part and will make amendments soon!
Brace yourself...

You will need to take note of each IP Address for each docker container you run and make amendments to the **server.py** file found in **backend/app/web/app** and the **App.js** file found in **frontend/src**.

To do this you will have to run the following commands
1. docker ps
    1. *to retreive docker container_id*
2. docker inspect ${container_id}
    1. *to find out details about the running container*
3. look for the **IP Address** under **NetworkSettings/Network** in the json heirarchy

Open **backend/app/web/database.py** in Vim (only), I can't stress this enough. You must open **database.py** in Vim!

Edit the url by replacing 0.0.0.0 with the IP Address you retrieved above.
save and exit out.

From within **backend/app/** run: 
1. docker build -t neo-backend .

To run your newly, flashy, shinny, docker image in detach mode, from anywhere, run:
1. docker run -d -p 4000:4000 neo-backend

Rikki-Tikki-Tavi, you have a **** **** docker instance running ****!

Yet again, you will need to follow the above commands to retrieve the IP Address on the newly spun-up docker container

Open **App.py** under **frontend/src** and replace 0.0.0.0 with the IP Address you gots son! Boom!

From within **frontend** run:
1. docker build -t neo-frontend .

To run your less excited about, less interesting, third docker image in detach mode, run:
1. docker run -d -p 5000:5000 neo-frontend

Well, that's it... You just squanched the squanch out of that squanch and that squanch be running squanchy