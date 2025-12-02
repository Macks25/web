from django.shortcuts import render, redirect
from .forms import UserRegistrationForm, UserLoginForm
import json
from django.http import HttpResponse
from django.contrib.auth import authenticate

# Create your views here.

def students(request):
    #define 3 students
    #Return the highest score here
    students = [
        {'first_name': "Max", 'last_name': "Mustermann", 'score': 85},
        {'first_name': "Erika", 'last_name': "Musterfrau", 'score': 92},
        {'first_name': "John", 'last_name': "Doe", 'score': 78},
    ]
    return render(request, 'student_template.html', context={'students': students})


def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            # Process the valid form data
            form.save()

            return redirect('login') 
        form = UserRegistrationForm()
        return render(request, 'register.html', context={'form': form})
    else:
        form = UserRegistrationForm()
        return render(request, 'register.html', context={'form': form})
    
def login(request):

    if request.method == 'POST':
        form = UserLoginForm()
        user = authenticate(
            username=form.data.get('username'),
            password=form.data.get('password')
        )
        if form.is_valid():
            return  HttpResponse("Login successful")
    form = UserLoginForm()
    return render(request, 'login.html', context={'form': form})


def student_save(request):
    if request.method == 'POST':
        body = request.body
        json_data = json.loads(body)

        first_name = json_data.get('first_name')
        last_name = json_data.get('last_name')
        email = json_data.get('email')

        student = Student(first_name=first_name, last_name=last_name, email=email)
        student.save()
        return HttpResponse("Student saved successfully")
    else:
        return ValueError("Invalid request method")
