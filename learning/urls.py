from django.urls import path
from django.urls.resolvers import URLPattern
from .import views

app_name = 'learning'
urlpattern = [
    path('', views.IndexView.as_view(), name='index'),
]