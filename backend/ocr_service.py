from PIL import Image
import pytesseract
from langdetect import detect
from .config import LANG_MAP

class OCRService:
    def __init__(self, default_langs = "eng+kaz+rus"):
        self.default_langs = default_langs

    def extract_text(self, image: Image.Image):
        rough_text = pytesseract.image_to_string(image, lang=self.default_langs)
        
        if not rough_text.strip():
            return {"text": "", "lang": "unknown", "language": "Unknown"}

        detected_lang = detect(rough_text)

        if detected_lang in LANG_MAP:
            tess_lang, human_lang = LANG_MAP[detected_lang]
            final_text = pytesseract.image_to_string(image, lang=tess_lang)
        else:
            final_text = rough_text
            human_lang = "Unknown"
        
        return{
            "text": final_text,
            "lang": detected_lang,
            "language": human_lang
        }