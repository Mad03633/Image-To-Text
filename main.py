from PIL import Image
from pytesseract import pytesseract, image_to_string
import os

path_to_tesseract = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
image_path = r"assets\example_1.jpg"

pytesseract.tesseract_cmd = path_to_tesseract

if not os.path.exists(image_path):
    raise FileNotFoundError(f"Image not found: {image_path}")

try:
    img = Image.open(image_path)

    text = image_to_string(img, lang='kaz')

    cleaned_text = text.strip()

    print("Extracted text:")
    print(cleaned_text)

except Exception as e:
    print(f"Error: {e}")