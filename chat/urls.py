from django.urls import path
from .views import create_room, home, RoomDetailView, send_message

urlpatterns = [
    path("", home, name="home"),
    path("<pk>", RoomDetailView.as_view(), name="room_detail"),
    path('<pk>/send', send_message, name="send_message"),
    path('create-room', create_room, name="create_room"),
]
