import logging
from django.contrib import messages
from django.contrib.messages.api import success
from django.db import models
from django.urls import reverse_lazy
from django.core.mail import message
from django.http import request
from django.shortcuts import render
from django.views import generic
from django.http import HttpResponseRedirect


class IndexView(generic.TemplateView):
    template_name = "index.html"
class BlockView(generic.TemplateView):
    template_name = "public/index.html"
class EnzanView(generic.TemplateView):
    template_name = "public/learning_shisoku.html"
class Question2View(generic.TemplateView):
    template_name = "public/question2.html"

from .forms import QuestionForm #, learningCreateForm


logger = logging.getLogger(__name__)

def index(request):
    return render(request, 'index.html')

class IndexView(generic.TemplateView):
    template_name = "index.html"

class QuestionView(generic.FormView):
    template_name = "question.html"
    form_class = QuestionForm
    success_url = reverse_lazy('learning:question_done')
     
    def form_valid(self, form):
        form.send_email()
        logger.info('Question sent by {}'.format(form.cleaned_data['message']))
        logger.info('Question sent by {}'.format(form.cleaned_data['message1']))
        return super().form_valid(form)

class Question_doneView(generic.FormView):
    template_name = "question_done.html"
    form_class = QuestionForm
    success_url = reverse_lazy('learning:question_done')

class Question_confirmView(generic.FormView):
    template_name = "question_confirm.html"
    form_class = QuestionForm
    success_url = reverse_lazy('learning:question_done')

def LoginView(request):
    return HttpResponseRedirect('social:begin', kwargs=dict(backend='google-oauth2'))
