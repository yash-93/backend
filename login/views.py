from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LoginSerializer
from .models import Login

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer
    queryset = Login.objects.all()