import docker

CLIENT = docker.from_env()

CLIENT.containers.run('neo4j:3.0',
                      command=['NEO4J_dbms_connector_bolt_listen__address=:7688',
                               'NEO4J_dbms_connector_bolt_advertised__address=:7688'],
                      ports={'7475': '7474', '7688': '7687'},
                      volumes={
                          '/home/neo4j/logs/template': {'bind': '/logs'},
                          '/home/neo4j/data/template': {'bind': '/data'}
                      })


containers = CLIENT.containers.list()
for container in containers:
    container.attrs['NetworkSettings'].get('IPAddress')