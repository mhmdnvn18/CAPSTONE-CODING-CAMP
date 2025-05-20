from flask import Flask, render_template, request, flash
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Diperlukan untuk flash messages

# Load dan training model
def train_model():
    try:
        df = pd.read_csv('Cardiovascular_Disease_Dataset.csv')
        
        # Handling missing values
        df['serumcholestrol'] = df['serumcholestrol'].replace(0, df['serumcholestrol'].median())
        
        X = df.drop(['patientid', 'target'], axis=1)
        y = df['target']
        
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)
        
        # Save model
        joblib.dump(model, 'model.pkl')
        return True
    except Exception as e:
        print(f"Error in training model: {str(e)}")
        return False

# Load model
def load_model():
    try:
        return joblib.load('model.pkl')
    except:
        return None

# Initialize model
if not os.path.exists('model.pkl'):
    train_model()
model = load_model()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if request.method == 'POST':
            # Validasi input
            required_fields = ['age', 'gender', 'chestpain', 'restingBP', 'serumcholestrol',
                             'fastingbloodsugar', 'restingrelectro', 'maxheartrate',
                             'exerciseangia', 'oldpeak', 'slope', 'noofmajorvessels']
            
            # Check if all fields are present
            for field in required_fields:
                if field not in request.form:
                    flash(f'Field {field} is missing')
                    return render_template('index.html')
            
            # Convert form data to features
            features = []
            for field in required_fields:
                try:
                    value = float(request.form[field])
                    features.append(value)
                except ValueError:
                    flash(f'Invalid value for {field}. Please enter a number.')
                    return render_template('index.html')
            
            # Check if model is loaded
            if model is None:
                flash('Error: Model not loaded properly')
                return render_template('index.html')
            
            # Prediksi
            prediction = model.predict([features])
            
            # Interpretasi hasil
            result = "Positif Penyakit Kardiovaskular" if prediction[0] == 1 else "Negatif Penyakit Kardiovaskular"
            
            return render_template('result.html', prediction=result)
            
    except Exception as e:
        flash(f'An error occurred: {str(e)}')
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)