from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

app_name = 'learning'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('block', views.BlockView.as_view(), name='block'),
    path('enzan', views.EnzanView.as_view(), name='enzan'),
    path('stoplight', views.StoplightView.as_view(), name="stoplight"),
]
