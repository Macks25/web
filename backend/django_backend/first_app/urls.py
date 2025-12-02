from django.urls import path
from django.contrib import admin
from . import views


urlpatterns = [
    path('students/', views.students),
    path('register/', views.register),
    path('login/', views.login, name='login'),
    path('save_student/', views.student_save),
]
