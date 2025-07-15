import yaml
import os

# Optional: get base dir
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load prompts
with open(os.path.join(BASE_DIR, "config.yaml"), "r") as f:
    PROMPTS = yaml.safe_load(f)

# Example: add other config if needed
MODEL_NAME = "llama-3.3-70b-versatile"
TEMPERATURE = 0.1
MAX_TOKENS = 1000