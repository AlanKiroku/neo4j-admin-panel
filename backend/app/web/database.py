from neo4j.v1 import GraphDatabase

db = GraphDatabase.driver("bolt://0.0.0.0:7687", auth=("neo4j", "K1r0ku"))
