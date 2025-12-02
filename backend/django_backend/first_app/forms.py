import django.forms as forms
from django.contrib.auth.models import User

class UserRegistrationForm(forms.Form):
    username = forms.CharField(label='Username', max_length=150)
    email = forms.EmailField(label='Email')
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
    confirm_password = forms.CharField(label='Confirm Password', widget=forms.PasswordInput)

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")


        username = cleaned_data.get("username").strip()
        cleaned_data['username'] = username

        if password != confirm_password:
            raise forms.ValidationError(
                "Password and Confirm Password do not match"
            )
        return cleaned_data
    def save(self):
        user = User(
            username=self.cleaned_data['username'],
            email=self.cleaned_data['email'],
            password=self.cleaned_data['password']
        )
        user.set_password(self.cleaned_data['password'])
        user.save()
        return user
    

class UserLoginForm(forms.Form):
    username = forms.CharField(label='Username', max_length=150)
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
