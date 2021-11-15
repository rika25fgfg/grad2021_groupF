from django.urls import path
from . import views

app_name = 'learning'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('block', views.BlockView.as_view(), name='block'),

    
]
