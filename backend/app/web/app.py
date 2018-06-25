from quart import Quart, request
from quart_cors import cors
import json

from database import db

app = Quart(__name__)
app = cors(app)

@app.route('/', methods=['POST'])
async def hello():
    return json.dumps({'confirmation': 'success'})

if __name__ == '__main__':
    app.run(
            debug=True,
            host='0.0.0.0')
