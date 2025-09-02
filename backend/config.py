import pytesseract

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

LANG_MAP = {
    "en": ("eng", "English"),
    "kk": ("kaz", "Kazakh"),
    "ru": ("rus", "Russian")
}