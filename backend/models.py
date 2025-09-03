from pydantic import BaseModel

class OCRResponse(BaseModel):
    text: str
    lang: str
    language: str