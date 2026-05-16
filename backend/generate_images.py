"""
DERIS — Batch image generator using Gemini Nano Banana.
Generates product/portfolio mockup images and saves to /app/frontend/public/generated/.
Idempotent: skips if file already exists. Run on demand.

Usage:
    cd /app/backend && python generate_images.py
"""
import asyncio
import os
import base64
import sys
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv(Path(__file__).parent / ".env")
API_KEY = os.getenv("EMERGENT_LLM_KEY")
MODEL = "gemini-3.1-flash-image-preview"
OUT_DIR = Path("/app/frontend/public/generated")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Prompts: dark premium aesthetic, black/gold theme matching DERIS brand
JOBS = [
    ("varsity-jacket", "Premium black varsity jacket with cream sleeves and gold embroidery, hanging in a dark studio with dramatic gold rim lighting, product photography, no text, ultra realistic, 1:1"),
    ("bomber-jacket", "Bomber jacket hitam premium dengan detail ritsleting emas, tampak tiga perempat, pencahayaan studio dramatis, latar gelap gradasi, kesan eksklusif dan modern, no text, ultra realistic, 1:1"),
    ("harrington-jacket", "Classic harrington jacket in deep navy, product shot on a mannequin against dark backdrop with soft gold lighting, premium catalog style, no text, 1:1"),
    ("coach-jacket", "Coach jacket hitam tipis dengan aksen emas pada kerah dan ujung lengan, tampak depan penuh, flat lay atau standing display tanpa model atau orang, latar studio gelap bersih, pencahayaan soft dramatis, kesan premium dan modern, no person no mannequin, no text, ultra realistic product photography, 1:1"),
    ("windbreaker", "Lightweight cream windbreaker jacket with navy trim, hanging in dark moody studio with gold rim light, premium product shot, no text, 1:1"),
    ("hoodie", "Hoodie hitam oversize premium, tampak depan, detail tali dan saku kanguru, tekstur bahan terlihat jelas, pencahayaan studio soft, latar gelap bersih, no text, ultra realistic, 1:1"),
    ("kemeja", "Black PDH formal shirt on a wooden hanger, dark studio with gold side light, premium catalog photography, no text, 1:1"),
    ("kaos", "Kaos hitam dengan sablon emas bertema komunitas kampus, tampak depan, flat lay di atas permukaan gelap dengan aksen emas, no text logo only abstract pattern, ultra realistic, 1:1"),
    ("topi", "Topi snapback hitam dengan bordir emas di bagian depan, tampak samping 45 derajat, detail jahitan terlihat jelas, latar studio gelap, no text, ultra realistic, 1:1"),
    ("lanyard", "Lanyard custom hitam dengan printing emas, digantungkan secara natural, tampak jelas dan rapi, latar netral gelap, no text, ultra realistic, 1:1"),
]


async def generate(slug: str, prompt: str):
    out = OUT_DIR / f"{slug}.png"
    if out.exists():
        print(f"  ✓ {slug}.png already exists, skipping")
        return
    print(f"  → generating {slug}.png ...")
    try:
        chat = LlmChat(api_key=API_KEY, session_id=f"deris-{slug}", system_message="You generate clean, premium product mockup images.")
        chat.with_model("gemini", MODEL).with_params(modalities=["image", "text"])
        msg = UserMessage(text=prompt)
        _text, images = await chat.send_message_multimodal_response(msg)
        if not images:
            print(f"  ✗ {slug}: no image returned")
            return
        image_bytes = base64.b64decode(images[0]["data"])
        out.write_bytes(image_bytes)
        print(f"  ✓ saved {slug}.png ({len(image_bytes)//1024} KB)")
    except Exception as e:
        print(f"  ✗ {slug}: {e}")


async def main():
    print(f"DERIS image generator → {OUT_DIR}\n")
    only = sys.argv[1:] if len(sys.argv) > 1 else None
    jobs = [(s, p) for s, p in JOBS if not only or s in only]
    print(f"Jobs to run: {len(jobs)}\n")
    for slug, prompt in jobs:
        await generate(slug, prompt)
    print("\nDone.")


if __name__ == "__main__":
    asyncio.run(main())
