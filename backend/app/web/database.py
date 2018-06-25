from neo4j.v1 import GraphDatabase

db = GraphDatabase.driver("bolt://172.17.0.2:7687", auth=("neo4j", "K1r0ku"))
