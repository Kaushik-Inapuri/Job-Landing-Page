# Healthcare Chatbot using Machine Learning

## Project Overview

This project is a healthcare chatbot designed to predict diseases based on user-provided symptoms. Utilizing machine learning algorithms such as Decision Tree and Support Vector Classifier (SVC), the chatbot interacts with users through text and voice to assist in diagnosing possible medical conditions with a high degree of accuracy. The chatbot also provides health-related precautions and descriptions for suggested conditions.

## Features

- **Disease Prediction**: Predicts diseases based on symptoms using a trained Decision Tree and SVC model.
- **Voice Interaction**: Implements text-to-speech to enhance user experience.
- **Symptom Severity Analysis**: Measures the severity of symptoms and suggests consultation or self-care.
- **High Accuracy**: Achieves 97.35% prediction accuracy.
- **Precautionary Measures**: Offers tailored health precautions based on the predicted condition.
  
## Technology Stack

- **Python**
- **Pandas** for data manipulation.
- **scikit-learn** for machine learning (Decision Tree and SVC).
- **pyttsx3** for text-to-speech functionality.
- **NumPy** for numerical computations.
- **CSV** for reading and managing symptom data.

## Dataset

- **Training Dataset**: Contains multiple symptoms and the corresponding disease diagnosis.
- **Testing Dataset**: Used to evaluate the performance of the model.
- **Additional Files**:
  - `symptom_Description.csv`: Contains detailed descriptions for each disease.
  - `symptom_severity.csv`: Maps symptoms to their severity levels.
  - `symptom_precaution.csv`: Lists the precautions for each disease.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/healthcare-chatbot-ml.git

2. Install the necessary dependencies:
    ```bash
    pip install pandas scikit-learn numpy pyttsx3

3. Run the chatbot script:
    ```bash
    python chat_bot.py"# Job-Landing-Page" 
