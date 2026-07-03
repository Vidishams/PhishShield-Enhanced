# models/train_model.py

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pickle

# Load the dataset
df = pd.read_csv("phishing_dataset.csv")  # use your actual file name

# Drop the 'index' column if it exists
if 'index' in df.columns:
    df = df.drop(columns=['index'])

# Separate features and target
X = df.drop(columns=['Result'])
y = df['Result']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model
with open("phishing_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved as phishing_model.pkl")
