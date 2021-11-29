from django import forms
from django.core.mail import EmailMessage
from django.forms import fields
from .models import learning

class QuestionForm(forms.Form):
    message  = forms.CharField(label='興味を持ったことは？', widget=forms.Textarea)
    message1 = forms.CharField(label='今回の講義の改善点は？', widget=forms.Textarea)
    

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
       

        self.fields['message'].widget.attrs['class'] = 'form-control col-12'
        self.fields['message'].widget.attrs['placeholder'] = 'メッセージをここに入力してください。'

        self.fields['message1'].widget.attrs['class'] = 'form-control col-12'
        self.fields['message1'].widget.attrs['placeholder'] = 'メッセージをここに入力してください。'
       
    def send_email(self):

        message1 = self.cleaned_data['message']+self.cleaned_data['message1']

        from_email = 'admin@example.com'
        recipient_list = ["admin@example.com"]

        message = EmailMessage("hoge", message1, from_email, recipient_list)
        message.send()
