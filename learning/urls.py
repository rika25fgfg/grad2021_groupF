from django.urls import path
from . import views

app_name = 'learning'

urlpatterns = [
    path('',views.IndexView.as_view(), name="index"),
    path('question/',views.QuestionView.as_view(),name="question"),
    path('question_confirm/',views.Question_confirmView.as_view(),name='question_confirm'),
    path('question_done/',views.Question_doneView.as_view(),name="question_done"),
]