from django.db import models

class Student(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    enrollment_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"
    
    def clean(self):
        self.first_name = self.first_name.strip()
        self.last_name = self.last_name.strip()
        self.email = self.email.strip().lower()
    
    def save(self, *args, **kwargs):
        self.full_clean()

        if self.email.count('@') != 1 or '.' not in self.email.split('@')[1]:
            raise ValueError("Invalid email address")

        super().save(*args, **kwargs)
