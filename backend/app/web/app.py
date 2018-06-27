"""
Quart Server for backend to server template changes
to the Neo4j docker instance
"""
import json

from quart import Quart, request
from quart_cors import cors

from database import db

APP = Quart(__name__)
APP = cors(APP)


@APP.route('/', methods=['POST'])
async def hello():
    """
    An async call serving POST requests from the frontend
    Each request handled is sent to Neo4j for possible modifications

    rtype -> None
    """
    if request.method == 'POST':
        data = await request.get_data()
        res = json.loads(data)

        with db.session() as session:
            possible_change_types = {
                'note': 'TemplateNote',
                'title': 'TemplateTitle'
            }

            neo_res = session.run("MATCH (a:" +
                                  possible_change_types[res['changeType']] +
                                  " {" + res['changeType'] + ": '" +
                                  res['oldWord'] + "'}) "
                                  "SET a."+res['changeType'] +
                                  "= '" + res['newWord'] + "' "
                                  "RETURN "
                                  "CASE a.note "
                                  "WHEN '" + res['newWord'] + "' "
                                  "THEN true "
                                  "END")
            neo_res_unwrapped = neo_res.value()

            if not neo_res_unwrapped:
                return json.dumps({'confirmation': 'danger'})
            elif neo_res_unwrapped:
                return json.dumps({'confirmation': 'success'})
            else:
                print('fuck')

if __name__ == '__main__':
    APP.run(debug=True,
            host='0.0.0.0')
