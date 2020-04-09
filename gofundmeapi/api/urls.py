from api import views
from django.urls import path


urlpatterns = [
    path('campaign/', views.CampaignList.as_view()),
    path('campaign/<int:pk>/', views.CampaignDetail.as_view()),
    path('donation/', views.DonationList.as_view()),
    path('donation/<int:pk>/', views.DonationDetail.as_view()),
    path('score/',views.ScoreList.as_view()),
    path('score/<int:pk>/', views.ScoreDetail.as_view()),
    path('campaigncreate', views.CreateCampaign.as_view()),
]
