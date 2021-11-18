from re import template
from django.shortcuts import render
from django.views import generic
# Create your views here.
class IndexView(generic.TemplateView):
    template_name = "index.html"

class BlockView(generic.TemplateView):
    template_name = "public/index.html"

class EnzanView(generic.TemplateView):
    template_name = "public/addition.html"