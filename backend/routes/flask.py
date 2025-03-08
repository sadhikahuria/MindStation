import whisper
from flask import FLASK, request, jsonify
app = Flask(__name__)

model = whisper.load_model("base")

def trancribe();
    audio_file = request.files['audio']
    audio_file.save("temp_audio.mp3")
    result = model.transcribe("audio.mp3")
    return jsonify({"transcription": result['text']})

if __name__ == '__main__':
    app.run(debug=True)
