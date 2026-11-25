import json

from flask import Flask, Response

import os

app = Flask(__name__)
@app.route('/translate/<engsana>')
def sanakirja(engsana):
        try:
            kansio = os.path.dirname(__file__)
            polku = os.path.join(kansio, "dictionary.json")
            with open(polku, "r", encoding="utf-8") as tiedosto:
                kaannos = json.load(tiedosto)
            engsana_lowcase = engsana.lower()
            suomsana = kaannos[engsana_lowcase]
            response = {
                "English" : engsana_lowcase,
                "Finnish" : suomsana,
            }
            return response
        except KeyError:
            response = {
                "error": "Word not found",
            }
            json_response = json.dumps(response)
            http_response = Response(response=json_response, status=404, mimetype="application/json")
            return http_response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)