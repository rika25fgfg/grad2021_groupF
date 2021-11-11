from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

app_name = 'learning'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]