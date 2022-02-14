from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

app_name = 'learning'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('question/',views.QuestionView.as_view(),name="question"),
    path('question_confirm/',views.Question_confirmView.as_view(),name='question_confirm'),
    path('question_done/',views.Question_doneView.as_view(),name="question_done"),
    path('block', views.BlockView.as_view(), name='block'),
    path('enzan', views.EnzanView.as_view(), name='enzan'),
    path('question2', views.Question2View.as_view(), name='question2'),
    path('question3', views.Question3View.as_view(), name='question3'),
    path('question4', views.Question4View.as_view(), name='question4'),
    path('question5', views.Question5View.as_view(), name='question5'),
    path('question6', views.Question6View.as_view(), name='question6'),
    path('question7', views.Question7View.as_view(), name='question7'),
    path('question8', views.Question8View.as_view(), name='question8'),
    path('question9', views.Question9View.as_view(), name='question9'),
    path('question10', views.Question10View.as_view(), name='question10'),


]