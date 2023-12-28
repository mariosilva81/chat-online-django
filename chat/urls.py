from django.urls import path
from .views import home, RoomDetailView

urlpatterns = [
    path("", home, name="home"),
    path("<pk>", RoomDetailView.as_view(), name="room_detail"),
]
