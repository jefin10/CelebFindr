from flask import Flask, request, jsonify
import pickle
import numpy as np
import cv2
from mtcnn import MTCNN
import base64
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
def load_model():
    try:
        model_url = "https://huggingface.co/datasets/Killer007/Model_detec/resolve/main/model%20copy.pkl"

        response = requests.get(model_url)
        response.raise_for_status()  

        temp_file = "model_copy.pkl"
        with open(temp_file, "wb") as file:
            file.write(response.content)

        with open(temp_file, "rb") as file:
            model = pickle.load(file)

        print("Model loaded successfully!")
        os.remove(temp_file)
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        return None

# Load the model at startup
model = load_model()
class_names = [
    'Brad pitt', 'Kendall_jenner', 'Roanldo', 'Tom Cruise', 'angelina_jolie',
    'anne_hathaway', 'ariana_grande', 'christian_bale', 'cillian_murphy',
    'emma_watson', 'hugh_jackman', 'jennifer_lawrence', 'johny depp',
    'keanu_reeves', 'margot_robbie', 'messi', 'ms_dhoni', 'neymar',
    'olivia_rodrigo', 'robert downey', 'sachin_tendulkar',
    'scarlett_johansson', 'selena_gomez', 'shawn_mendes', 'taylor_swift',
    'virat_kohli'
]

detector = MTCNN()

def decode_image(base64_string):
    img_data = base64.b64decode(base64_string)
    np_img = np.frombuffer(img_data, np.uint8)
    image = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
    print(1)
    return image

def detect_and_crop_face(image):
    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  
    faces = detector.detect_faces(rgb_image)  

    if len(faces) == 0:
        return None

    x, y, width, height = faces[0]['box']
    x, y = max(0, x), max(0, y)
    cropped_face = rgb_image[y:y + height, x:x + width]  
    resized_face = cv2.resize(cropped_face, (128, 128))  

    # Convert the face to grayscale
    grayscale_face = cv2.cvtColor(resized_face, cv2.COLOR_RGB2GRAY)

    return grayscale_face

def preprocess_image(cropped_face):
    img_array = np.array(cropped_face)  
    img_array = np.expand_dims(img_array, axis=0) 
    img_array = img_array / 255.0 
    print(3)
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    print(4)
    data = request.json
    if 'image' not in data:
        return jsonify({'error': 'No image provided'}), 400

    base64_image = data['image']
    image = decode_image(base64_image)
    if image is None:
        return jsonify({'error': 'Invalid image'}), 400

    cropped_face = detect_and_crop_face(image)
    if cropped_face is None:
        return jsonify({'error': 'No face detected'}), 400

    img_array = preprocess_image(cropped_face)

    predictions = model.predict(img_array)
    predicted_class_index = np.argmax(predictions)
    predicted_class_name = class_names[predicted_class_index]
    confidence = float(predictions[0][predicted_class_index])

    return jsonify({
        'predicted_class': predicted_class_name,
        'confidence': confidence
    })
    print(predicted_class_name, confidence)

if __name__ == '__main__':
    app.run()
