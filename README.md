why I did this, I do not know
by
Alan Williams

clone the fuck out of this repo by
git clone https://github.com/AlanKiroku/neo4j-admin-panel.git

you will find 2 folders (which I hope are self explanatory if not, pass the butter):
backend
frontend

in backend we have:
folder - app
file - Dockerfile (which runs the backend tings)

in frontend we have:
create-react-app schambles and,
folder - src (where the frontend tings reside)

Before we create and spin up our backend docker container, you require another, more powerful docker image, the one to serve you data nom noms!

Simply spin this badass up by running:
docker run -e NEO4J_dbms_connector_bolt_listen__address=:7688 -e NEO4J_dbms_connector_bolt_advertised__address=:7688 --publish=7475:7474 --publish=7688:7687 --volume=$HOME/neo4j/data/template:/data --volume=$HOME/neo4j/logs/template:/logs neo4j:3.0

Don't worry about the --publish flags, we are simply redirecting the internally exposed port to a port we prefer!

Because meh!
You will need to take note of your IP Address by:
run: docker ps - retreive docker container_id
run: docker inspect $(container_id)

Open database.py in Vim (only), I can't stress this enough. You must open database.py in Vim!
edit the url. replace 0.0.0.0 with the IP Address you retrieved above.
save and exit out.

From within backend/app/ run: 
docker build -t neo-backend .

To run your newly, flashy, shinny, docker image in detach mode, from anywhere, run:
docker run -d -p 4000:4000 neo-backend

Rikki-Tikki-Tavi, you have a mother fucken docker instance running biiitch!

yet again, because meh!
run: docker ps - retrieve docker container_id for the neo-backend
run: docker inspect ${container_id}

Open App.py under frontend/src and replace 0.0.0.0 with the IP Address you gots son! Boom!

From withint frontend run:
docker build -t neo-frontend .

To run your less excited about, less interesting, third docker image in detach mode, run:
docker run -d -p 5000:5000 neo-frontend

You just squanched the squanch out of that squanch and that squanch be running squanchy
