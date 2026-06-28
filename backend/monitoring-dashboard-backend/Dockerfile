FROM python:3.13-slim

WORKDIR /app

COPY . .

RUN pip install flask flask-cors psutil kubernetes requests

EXPOSE 9090

CMD ["python", "app.py"]