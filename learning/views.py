from django.shortcuts import render
from django.views import generic

class IndexView(generic.TemplateView):
    template_name = "index.html"

class BlockView(generic.TemplateView):
    template_name = "public/index.html"
# Create your views here.
