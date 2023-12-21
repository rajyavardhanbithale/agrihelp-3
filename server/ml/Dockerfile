# Use the official Python image from Docker Hub
FROM python:3.10-slim-bullseye

# Set the working directory inside the container
WORKDIR /server/ml

# Copy the contents of the local directory to the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
